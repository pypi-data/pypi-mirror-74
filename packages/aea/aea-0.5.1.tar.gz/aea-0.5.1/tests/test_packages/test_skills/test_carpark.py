# -*- coding: utf-8 -*-
# ------------------------------------------------------------------------------
#
#   Copyright 2018-2019 Fetch.AI Limited
#
#   Licensed under the Apache License, Version 2.0 (the "License");
#   you may not use this file except in compliance with the License.
#   You may obtain a copy of the License at
#
#       http://www.apache.org/licenses/LICENSE-2.0
#
#   Unless required by applicable law or agreed to in writing, software
#   distributed under the License is distributed on an "AS IS" BASIS,
#   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
#   See the License for the specific language governing permissions and
#   limitations under the License.
#
# ------------------------------------------------------------------------------

"""This test module contains the integration test for the weather skills."""

import pytest

from aea.test_tools.test_cases import AEATestCaseMany, UseOef

from tests.conftest import FUNDED_FET_PRIVATE_KEY_1, MAX_FLAKY_RERUNS


class TestCarPark(AEATestCaseMany, UseOef):
    """Test that carpark skills work."""

    def test_carpark(self):
        """Run the weather skills sequence."""
        carpark_aea_name = "my_carpark_aea"
        carpark_client_aea_name = "my_carpark_client_aea"
        self.create_agents(carpark_aea_name, carpark_client_aea_name)

        default_routing = {"fetchai/ledger_api:0.1.0": "fetchai/ledger:0.2.0"}

        # Setup agent one
        self.set_agent_context(carpark_aea_name)
        self.add_item("connection", "fetchai/oef:0.6.0")
        self.add_item("connection", "fetchai/ledger:0.2.0")
        self.add_item("skill", "fetchai/carpark_detection:0.6.0")
        self.set_config("agent.default_connection", "fetchai/oef:0.6.0")
        setting_path = (
            "vendor.fetchai.skills.carpark_detection.models.strategy.args.is_ledger_tx"
        )
        self.set_config(setting_path, False, "bool")
        setting_path = "agent.default_routing"
        self.force_set_config(setting_path, default_routing)
        self.run_install()

        # Setup agent two
        self.set_agent_context(carpark_client_aea_name)
        self.add_item("connection", "fetchai/oef:0.6.0")
        self.add_item("connection", "fetchai/ledger:0.2.0")
        self.add_item("skill", "fetchai/carpark_client:0.6.0")
        self.set_config("agent.default_connection", "fetchai/oef:0.6.0")
        setting_path = (
            "vendor.fetchai.skills.carpark_client.models.strategy.args.is_ledger_tx"
        )
        self.set_config(setting_path, False, "bool")
        setting_path = "agent.default_routing"
        self.force_set_config(setting_path, default_routing)
        self.run_install()

        # Fire the sub-processes and the threads.
        self.set_agent_context(carpark_aea_name)
        carpark_aea_process = self.run_agent()

        self.set_agent_context(carpark_client_aea_name)
        carpark_client_aea_process = self.run_agent()

        check_strings = (
            "updating services on OEF service directory.",
            "received CFP from sender=",
            "sending a PROPOSE with proposal=",
            "received ACCEPT from sender=",
            "sending MATCH_ACCEPT_W_INFORM to sender=",
            "received INFORM from sender=",
            "transaction confirmed, sending data=",
        )
        missing_strings = self.missing_from_output(
            carpark_aea_process, check_strings, is_terminating=False
        )
        assert (
            missing_strings == []
        ), "Strings {} didn't appear in carpark_aea output.".format(missing_strings)

        check_strings = (
            "found agents=",
            "sending CFP to agent=",
            "received proposal=",
            "accepting the proposal from sender=",
            "informing counterparty=",
            "received INFORM from sender=",
            "received the following data=",
        )
        missing_strings = self.missing_from_output(
            carpark_client_aea_process, check_strings, is_terminating=False
        )
        assert (
            missing_strings == []
        ), "Strings {} didn't appear in carpark_client_aea output.".format(
            missing_strings
        )

        self.terminate_agents(carpark_aea_process, carpark_client_aea_process)
        assert (
            self.is_successfully_terminated()
        ), "Agents weren't successfully terminated."


class TestCarParkFetchaiLedger(AEATestCaseMany, UseOef):
    """Test that carpark skills work."""

    @pytest.mark.flaky(reruns=MAX_FLAKY_RERUNS)  # cause possible network issues
    def test_carpark(self):
        """Run the weather skills sequence."""
        carpark_aea_name = "my_carpark_aea"
        carpark_client_aea_name = "my_carpark_client_aea"
        self.create_agents(carpark_aea_name, carpark_client_aea_name)

        default_routing = {"fetchai/ledger_api:0.1.0": "fetchai/ledger:0.2.0"}

        ledger_apis = {"fetchai": {"network": "testnet"}}

        # Setup agent one
        self.set_agent_context(carpark_aea_name)
        self.force_set_config("agent.ledger_apis", ledger_apis)
        self.add_item("connection", "fetchai/oef:0.6.0")
        self.add_item("connection", "fetchai/ledger:0.2.0")
        self.add_item("skill", "fetchai/carpark_detection:0.6.0")
        self.set_config("agent.default_connection", "fetchai/oef:0.6.0")
        setting_path = "agent.default_routing"
        self.force_set_config(setting_path, default_routing)
        self.run_install()

        diff = self.difference_to_fetched_agent(
            "fetchai/car_detector:0.7.0", carpark_aea_name
        )
        assert (
            diff == []
        ), "Difference between created and fetched project for files={}".format(diff)

        # Setup agent two
        self.set_agent_context(carpark_client_aea_name)
        self.force_set_config("agent.ledger_apis", ledger_apis)
        self.add_item("connection", "fetchai/oef:0.6.0")
        self.add_item("connection", "fetchai/ledger:0.2.0")
        self.add_item("skill", "fetchai/carpark_client:0.6.0")
        self.set_config("agent.default_connection", "fetchai/oef:0.6.0")
        setting_path = "agent.default_routing"
        self.force_set_config(setting_path, default_routing)
        self.run_install()

        diff = self.difference_to_fetched_agent(
            "fetchai/car_data_buyer:0.7.0", carpark_client_aea_name
        )
        assert (
            diff == []
        ), "Difference between created and fetched project for files={}".format(diff)

        self.generate_private_key("fetchai")
        self.add_private_key("fetchai", "fet_private_key.txt")
        self.replace_private_key_in_file(
            FUNDED_FET_PRIVATE_KEY_1, "fet_private_key.txt"
        )

        # Fire the sub-processes and the threads.
        self.set_agent_context(carpark_aea_name)
        carpark_aea_process = self.run_agent()

        self.set_agent_context(carpark_client_aea_name)
        carpark_client_aea_process = self.run_agent()

        check_strings = (
            "updating services on OEF service directory.",
            "unregistering services from OEF service directory.",
            "received CFP from sender=",
            "sending a PROPOSE with proposal=",
            "received ACCEPT from sender=",
            "sending MATCH_ACCEPT_W_INFORM to sender=",
            "received INFORM from sender=",
            "checking whether transaction=",
            "transaction confirmed, sending data=",
        )
        missing_strings = self.missing_from_output(
            carpark_aea_process, check_strings, timeout=240, is_terminating=False
        )
        assert (
            missing_strings == []
        ), "Strings {} didn't appear in carpark_aea output.".format(missing_strings)

        check_strings = (
            "found agents=",
            "sending CFP to agent=",
            "received proposal=",
            "accepting the proposal from sender=",
            "received MATCH_ACCEPT_W_INFORM from sender=",
            "requesting transfer transaction from ledger api...",
            "received raw transaction=",
            "proposing the transaction to the decision maker. Waiting for confirmation ...",
            "transaction signing was successful.",
            "sending transaction to ledger.",
            "transaction was successfully submitted. Transaction digest=",
            "informing counterparty=",
            "received INFORM from sender=",
            "received the following data=",
        )
        missing_strings = self.missing_from_output(
            carpark_client_aea_process, check_strings, is_terminating=False
        )
        assert (
            missing_strings == []
        ), "Strings {} didn't appear in carpark_client_aea output.".format(
            missing_strings
        )

        self.terminate_agents(carpark_aea_process, carpark_client_aea_process)
        assert (
            self.is_successfully_terminated()
        ), "Agents weren't successfully terminated."
