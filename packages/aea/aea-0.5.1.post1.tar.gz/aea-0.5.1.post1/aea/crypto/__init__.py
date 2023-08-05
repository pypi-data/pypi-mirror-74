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

"""This module contains the crypto modules."""

from aea.crypto.registries import register_crypto, register_ledger_api  # noqa

register_crypto(id_="fetchai", entry_point="aea.crypto.fetchai:FetchAICrypto")
register_crypto(id_="ethereum", entry_point="aea.crypto.ethereum:EthereumCrypto")
register_crypto(id_="cosmos", entry_point="aea.crypto.cosmos:CosmosCrypto")

register_ledger_api(
    id_="fetchai", entry_point="aea.crypto.fetchai:FetchAIApi",
)

register_ledger_api(id_="ethereum", entry_point="aea.crypto.ethereum:EthereumApi")

register_ledger_api(
    id_="cosmos", entry_point="aea.crypto.cosmos:CosmosApi",
)
