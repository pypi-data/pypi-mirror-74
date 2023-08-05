``` bash
python scripts/oef/launch.py -c ./scripts/oef/launch_config.json
```
``` bash
aea fetch fetchai/ml_data_provider:0.7.0
cd ml_data_provider
aea install
``` 
``` bash
aea create ml_data_provider
cd ml_data_provider
aea add connection fetchai/oef:0.6.0
aea add connection fetchai/ledger:0.2.0
aea add skill fetchai/ml_data_provider:0.6.0
aea config set agent.default_connection fetchai/oef:0.6.0
aea install
```
``` bash
aea fetch fetchai/ml_model_trainer:0.7.0
cd ml_model_trainer
aea install
```
``` bash
aea create ml_model_trainer
cd ml_model_trainer
aea add connection fetchai/oef:0.6.0
aea add connection fetchai/ledger:0.2.0
aea add skill fetchai/ml_train:0.6.0
aea config set agent.default_connection fetchai/oef:0.6.0
aea install
```
``` bash
aea generate-key fetchai
aea add-key fetchai fet_private_key.txt
```
``` bash
aea generate-wealth fetchai
```
``` bash
aea generate-key ethereum
aea add-key ethereum eth_private_key.txt
```
``` bash
aea generate-wealth ethereum
```
``` bash
aea generate-key cosmos
aea add-key cosmos cosmos_private_key.txt
```
``` bash
aea generate-wealth cosmos
```
``` bash
aea config set vendor.fetchai.skills. ml_data_provider.models.strategy.args.currency_id ETH
aea config set vendor.fetchai.skills.ml_data_provider.models.strategy.args.ledger_id ethereum
```
``` bash
aea config set vendor.fetchai.skills.ml_data_provider.models.strategy.args.currency_id ATOM
aea config set vendor.fetchai.skills.ml_data_provider.models.strategy.args.ledger_id cosmos
```
``` bash
aea config set vendor.fetchai.skills.ml_trainer.models.strategy.args.currency_id ETH
aea config set vendor.fetchai.skills.ml_trainer.models.strategy.args.ledger_id ethereum
```
``` bash
aea config set vendor.fetchai.skills.ml_train.models.strategy.args.currency_id ATOM
aea config set vendor.fetchai.skills.ml_train.models.strategy.args.ledger_id cosmos
```
``` bash
aea run
```
``` bash
cd ..
aea delete ml_data_provider
aea delete ml_model_trainer
```
``` yaml
ledger_apis:
  fetchai:
    network: testnet
```
``` yaml
default_routing:
  fetchai/ledger_api:0.1.0: fetchai/ledger:0.2.0
```
``` yaml
ledger_apis:
  fetchai:
    network: testnet
```
``` yaml
default_routing:
  fetchai/ledger_api:0.1.0: fetchai/ledger:0.2.0
```
``` yaml
ledger_apis:
  ethereum:
    address: https://ropsten.infura.io/v3/f00f7b3ba0e848ddbdc8941c527447fe
    chain_id: 3
    gas_price: 50
```
``` yaml
ledger_apis:
  cosmos:
    address: https://rest-agent-land.prod.fetch-ai.com:443
```
