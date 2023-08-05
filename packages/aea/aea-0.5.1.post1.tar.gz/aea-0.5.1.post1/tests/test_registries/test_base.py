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
"""This module contains the tests for aea/registries/base.py."""

import os
import random
import shutil
import tempfile
import unittest.mock
from pathlib import Path
from typing import cast

import pytest

import aea
import aea.registries.base
from aea.aea import AEA
from aea.configurations.base import ComponentId, ComponentType, PublicId
from aea.configurations.constants import DEFAULT_PROTOCOL, DEFAULT_SKILL
from aea.contracts.base import Contract
from aea.crypto.fetchai import FetchAICrypto
from aea.crypto.wallet import Wallet
from aea.helpers.transaction.base import SignedTransaction
from aea.identity.base import Identity
from aea.protocols.base import Protocol
from aea.protocols.default.message import DefaultMessage
from aea.protocols.signing.message import SigningMessage
from aea.registries.base import AgentComponentRegistry
from aea.registries.resources import Resources
from aea.skills.base import Skill

from tests.conftest import CUR_PATH, ROOT_DIR, _make_dummy_connection


class TestContractRegistry:
    """Test the contract registry."""

    @classmethod
    def setup_class(cls):
        """Set the tests up."""
        cls.patch = unittest.mock.patch.object(aea.registries.base.logger, "exception")
        cls.mocked_logger = cls.patch.start()

        cls.oldcwd = os.getcwd()
        cls.agent_name = "agent_dir_test"
        cls.t = tempfile.mkdtemp()
        cls.agent_folder = os.path.join(cls.t, cls.agent_name)
        shutil.copytree(os.path.join(CUR_PATH, "data", "dummy_aea"), cls.agent_folder)
        os.chdir(cls.agent_folder)

        contract = Contract.from_dir(
            str(Path(ROOT_DIR, "packages", "fetchai", "contracts", "erc1155"))
        )

        cls.registry = AgentComponentRegistry()
        cls.registry.register(contract.component_id, cast(Contract, contract))
        cls.expected_contract_ids = {
            PublicId.from_str("fetchai/erc1155:0.6.0"),
        }

    def test_fetch_all(self):
        """Test that the 'fetch_all' method works as expected."""
        contracts = self.registry.fetch_by_type(ComponentType.CONTRACT)
        assert all(isinstance(c, Contract) for c in contracts)
        assert set(c.public_id for c in contracts) == self.expected_contract_ids

    def test_fetch(self):
        """Test that the `fetch` method works as expected."""
        contract_id = PublicId.from_str("fetchai/erc1155:0.6.0")
        contract = self.registry.fetch(ComponentId(ComponentType.CONTRACT, contract_id))
        assert isinstance(contract, Contract)
        assert contract.id == contract_id

    def test_unregister(self):
        """Test that the 'unregister' method works as expected."""
        contract_id_removed = PublicId.from_str("fetchai/erc1155:0.6.0")
        component_id = ComponentId(ComponentType.CONTRACT, contract_id_removed)
        contract_removed = self.registry.fetch(component_id)
        self.registry.unregister(contract_removed.component_id)
        expected_contract_ids = set(self.expected_contract_ids)
        expected_contract_ids.remove(contract_id_removed)

        assert (
            set(
                c.public_id for c in self.registry.fetch_by_type(ComponentType.CONTRACT)
            )
            == expected_contract_ids
        )

        # restore the contract
        self.registry.register(component_id, contract_removed)

    @classmethod
    def teardown_class(cls):
        """Tear down the tests."""
        cls.mocked_logger.__exit__()
        os.chdir(cls.oldcwd)
        try:
            shutil.rmtree(cls.t)
        except (OSError, IOError):
            pass


class TestProtocolRegistry:
    """Test the protocol registry."""

    @classmethod
    def setup_class(cls):
        """Set the tests up."""
        cls.patch = unittest.mock.patch.object(aea.registries.base.logger, "exception")
        cls.mocked_logger = cls.patch.start()

        cls.oldcwd = os.getcwd()
        cls.agent_name = "agent_dir_test"
        cls.t = tempfile.mkdtemp()
        cls.agent_folder = os.path.join(cls.t, cls.agent_name)
        shutil.copytree(os.path.join(CUR_PATH, "data", "dummy_aea"), cls.agent_folder)
        os.chdir(cls.agent_folder)

        cls.registry = AgentComponentRegistry()

        protocol_1 = Protocol.from_dir(Path(aea.AEA_DIR, "protocols", "default"))
        protocol_2 = Protocol.from_dir(
            Path(ROOT_DIR, "packages", "fetchai", "protocols", "fipa"),
        )
        cls.registry.register(protocol_1.component_id, protocol_1)
        cls.registry.register(protocol_2.component_id, protocol_2)

        cls.expected_protocol_ids = {
            DEFAULT_PROTOCOL,
            PublicId.from_str("fetchai/fipa:0.4.0"),
        }

    def test_fetch_all(self):
        """Test that the 'fetch_all' method works as expected."""
        protocols = self.registry.fetch_by_type(ComponentType.PROTOCOL)
        assert all(isinstance(p, Protocol) for p in protocols)
        assert set(p.public_id for p in protocols) == self.expected_protocol_ids

    def test_unregister(self):
        """Test that the 'unregister' method works as expected."""
        protocol_id_removed = DEFAULT_PROTOCOL
        component_id = ComponentId(ComponentType.PROTOCOL, protocol_id_removed)
        protocol_removed = self.registry.fetch(component_id)
        self.registry.unregister(component_id)
        expected_protocols_ids = set(self.expected_protocol_ids)
        expected_protocols_ids.remove(protocol_id_removed)

        assert (
            set(
                p.public_id for p in self.registry.fetch_by_type(ComponentType.PROTOCOL)
            )
            == expected_protocols_ids
        )

        # restore the protocol
        self.registry.register(component_id, protocol_removed)

    @classmethod
    def teardown_class(cls):
        """Tear down the tests."""
        cls.mocked_logger.__exit__()
        os.chdir(cls.oldcwd)
        try:
            shutil.rmtree(cls.t)
        except (OSError, IOError):
            pass


class TestResources:
    """Test the resources class."""

    @classmethod
    def _patch_logger(cls):
        cls.patch_logger_exception = unittest.mock.patch.object(
            aea.registries.base.logger, "exception"
        )
        cls.mocked_logger_exception = cls.patch_logger_exception.__enter__()
        cls.patch_logger_warning = unittest.mock.patch.object(
            aea.registries.base.logger, "warning"
        )
        cls.mocked_logger_warning = cls.patch_logger_warning.__enter__()

    @classmethod
    def _unpatch_logger(cls):
        cls.mocked_logger_exception.__exit__()
        cls.mocked_logger_warning.__exit__()

    @classmethod
    def setup_class(cls):
        """Set the tests up."""
        cls._patch_logger()

        # create temp agent folder
        cls.oldcwd = os.getcwd()
        cls.agent_name = "agent_test" + str(random.randint(0, 1000))  # nosec
        cls.t = tempfile.mkdtemp()
        cls.agent_folder = os.path.join(cls.t, cls.agent_name)
        shutil.copytree(os.path.join(CUR_PATH, "data", "dummy_aea"), cls.agent_folder)
        os.chdir(cls.agent_folder)

        cls.resources = Resources()

        cls.resources.add_component(
            Protocol.from_dir(Path(aea.AEA_DIR, "protocols", "default"))
        )
        # cls.resources.add_component(Component.load_from_directory(ComponentType.PROTOCOL, Path(ROOT_DIR, "packages", "fetchai", "protocols", "oef_search")))
        cls.resources.add_component(
            Skill.from_dir(
                Path(CUR_PATH, "data", "dummy_skill"),
                agent_context=unittest.mock.MagicMock(),
            )
        )
        cls.resources.add_component(
            Skill.from_dir(
                Path(aea.AEA_DIR, "skills", "error"),
                agent_context=unittest.mock.MagicMock(),
            )
        )

        cls.error_skill_public_id = DEFAULT_SKILL
        cls.dummy_skill_public_id = PublicId.from_str("dummy_author/dummy:0.1.0")

        cls.expected_skills = {
            PublicId.from_str("fetchai/dummy:0.1.0"),
            DEFAULT_SKILL,
        }

        cls.expected_protocols = {
            DEFAULT_PROTOCOL,
            PublicId.from_str("fetchai/oef_search:0.3.0"),
        }

    def test_unregister_handler(self):
        """Test that the unregister of handlers work correctly."""
        assert len(self.resources.get_all_handlers()) == 3

        # unregister the error handler and test that it has been actually unregistered.
        # TODO shouldn't we prevent the unregistration of this?
        error_handler = self.resources._handler_registry.fetch(
            (self.error_skill_public_id, "error_handler")
        )
        assert error_handler is not None
        self.resources._handler_registry.unregister(
            (self.error_skill_public_id, "error_handler")
        )
        assert (
            self.resources._handler_registry.fetch(
                (self.error_skill_public_id, "error_handler")
            )
            is None
        )

        # unregister the dummy handler and test that it has been actually unregistered.
        dummy_handler = self.resources._handler_registry.fetch(
            (self.dummy_skill_public_id, "dummy")
        )
        assert dummy_handler is not None
        self.resources._handler_registry.unregister(
            (self.dummy_skill_public_id, "dummy")
        )
        assert (
            self.resources._handler_registry.fetch(
                (self.dummy_skill_public_id, "dummy")
            )
            is None
        )

        # restore the handlers
        self.resources._handler_registry.register(
            (self.error_skill_public_id, "error"), error_handler
        )
        self.resources._handler_registry.register(
            (self.dummy_skill_public_id, "dummy"), dummy_handler
        )
        assert len(self.resources.get_all_handlers()) == 3

    # def test_fake_skill_loading_failed(self):
    #     """Test that when the skill is bad formatted, we print a log message."""
    #     s = "A problem occurred while parsing the skill directory {}. Exception: {}".format(
    #         os.path.join(self.agent_folder, "skills", "fake"),
    #         "[Errno 2] No such file or directory: '"
    #         + os.path.join(self.agent_folder, "skills", "fake", "skill.yaml")
    #         + "'",
    #     )
    #     self.mocked_logger_warning.assert_called_once_with(s)

    def test_remove_skill(self):
        """Test that the 'remove skill' and 'add skill' method works correctly."""
        error_skill = self.resources.get_skill(self.error_skill_public_id)
        self.resources.remove_skill(self.error_skill_public_id)
        assert self.resources.get_skill(self.error_skill_public_id) is None
        self.resources.add_skill(error_skill)
        assert self.resources.get_skill(self.error_skill_public_id) == error_skill

    def test_add_protocol(self):
        """Test that the 'add protocol' method works correctly."""
        oef_protocol = Protocol.from_dir(
            Path(ROOT_DIR, "packages", "fetchai", "protocols", "oef_search"),
        )
        self.resources.add_protocol(cast(Protocol, oef_protocol))
        for protocol_id in self.expected_protocols:
            assert (
                self.resources.get_protocol(protocol_id) is not None
            ), "Protocol missing!"

    def test_register_behaviour_with_already_existing_skill_id(self):
        """Test that registering a behaviour with an already existing skill id behaves as expected."""
        # this should raise an error, since the 'dummy" skill already has a behaviour named "dummy"
        with pytest.raises(
            ValueError,
            match="Item already registered with skill id '{}' and name '{}'".format(
                self.dummy_skill_public_id, "dummy"
            ),
        ):
            self.resources._behaviour_registry.register(
                (self.dummy_skill_public_id, "dummy"), None
            )

    def test_behaviour_registry(self):
        """Test that the behaviour registry behaves as expected."""
        dummy_behaviour = self.resources.get_behaviour(
            self.dummy_skill_public_id, "dummy"
        )
        assert len(self.resources.get_all_behaviours()) == 1
        assert dummy_behaviour is not None

        self.resources._behaviour_registry.unregister(
            (self.dummy_skill_public_id, "dummy")
        )
        assert self.resources.get_behaviour(self.dummy_skill_public_id, "dummy") is None
        assert len(self.resources.get_all_behaviours()) == 0

        self.resources._behaviour_registry.register(
            (self.dummy_skill_public_id, "dummy"), dummy_behaviour
        )

    def test_skill_loading(self):
        """Test that the skills have been loaded correctly."""
        dummy_skill = self.resources.get_skill(self.dummy_skill_public_id)
        skill_context = dummy_skill.skill_context

        handlers = dummy_skill.handlers
        behaviours = dummy_skill.behaviours
        models = dummy_skill.models

        assert len(handlers) == len(skill_context.handlers.__dict__)
        assert len(behaviours) == len(skill_context.behaviours.__dict__)

        assert handlers["dummy"] == skill_context.handlers.dummy
        assert behaviours["dummy"] == skill_context.behaviours.dummy
        assert models["dummy"] == skill_context.dummy

        assert handlers["dummy"].context == dummy_skill.skill_context
        assert behaviours["dummy"].context == dummy_skill.skill_context
        assert models["dummy"].context == dummy_skill.skill_context

    def test_handler_configuration_loading(self):
        """Test that the handler configurations are loaded correctly."""
        default_handlers = self.resources.get_handlers(DefaultMessage.protocol_id)
        assert len(default_handlers) == 2
        handler1, handler2 = default_handlers[0], default_handlers[1]
        dummy_handler = (
            handler1 if handler1.__class__.__name__ == "DummyHandler" else handler2
        )

        assert dummy_handler.config == {"handler_arg_1": 1, "handler_arg_2": "2"}

    def test_behaviour_configuration_loading(self):
        """Test that the behaviour configurations are loaded correctly."""
        dummy_behaviour = self.resources.get_behaviour(
            self.dummy_skill_public_id, "dummy"
        )
        assert dummy_behaviour.config == {"behaviour_arg_1": 1, "behaviour_arg_2": "2"}

    def test_model_configuration_loading(self):
        """Test that the model configurations are loaded correctly."""
        dummy_skill = self.resources.get_skill(self.dummy_skill_public_id)
        assert dummy_skill is not None
        assert len(dummy_skill.models) == 1
        dummy_model = dummy_skill.models["dummy"]

        assert dummy_model.config == {
            "model_arg_1": 1,
            "model_arg_2": "2",
        }

    @classmethod
    def teardown_class(cls):
        """Tear the tests down."""
        cls._unpatch_logger()
        os.chdir(cls.oldcwd)
        try:
            shutil.rmtree(cls.t)
        except (OSError, IOError):
            pass


class TestFilter:
    """Test the resources class."""

    @classmethod
    def setup_class(cls):
        """Set the tests up."""
        # create temp agent folder
        cls.oldcwd = os.getcwd()
        cls.agent_name = "agent_test" + str(random.randint(0, 1000))  # nosec
        cls.t = tempfile.mkdtemp()
        cls.agent_folder = os.path.join(cls.t, cls.agent_name)
        shutil.copytree(os.path.join(CUR_PATH, "data", "dummy_aea"), cls.agent_folder)
        os.chdir(cls.agent_folder)

        connection = _make_dummy_connection()
        private_key_path = os.path.join(CUR_PATH, "data", "fet_private_key.txt")
        wallet = Wallet({FetchAICrypto.identifier: private_key_path})
        identity = Identity(
            cls.agent_name, address=wallet.addresses[FetchAICrypto.identifier]
        )
        resources = Resources()

        resources.add_component(
            Skill.from_dir(
                Path(CUR_PATH, "data", "dummy_skill"),
                agent_context=unittest.mock.MagicMock(),
            )
        )

        resources.add_connection(connection)

        cls.aea = AEA(identity, wallet, resources=resources,)
        cls.aea.setup()

    def test_handle_internal_messages(self):
        """Test that the internal messages are handled."""
        t = SigningMessage(
            performative=SigningMessage.Performative.SIGNED_TRANSACTION,
            skill_callback_ids=[str(PublicId("dummy_author", "dummy", "0.1.0"))],
            skill_callback_info={},
            crypto_id="ledger_id",
            signed_transaction=SignedTransaction("ledger_id", "tx"),
        )
        self.aea.decision_maker.message_out_queue.put(t)
        self.aea._filter.handle_internal_messages()

        internal_handlers_list = self.aea.resources.get_handlers(t.protocol_id)
        assert len(internal_handlers_list) == 1
        internal_handler = internal_handlers_list[0]
        assert len(internal_handler.handled_internal_messages) == 1
        self.aea.teardown()

    @classmethod
    def teardown_class(cls):
        """Tear the tests down."""
        os.chdir(cls.oldcwd)
        try:
            shutil.rmtree(cls.t)
        except (OSError, IOError):
            pass
