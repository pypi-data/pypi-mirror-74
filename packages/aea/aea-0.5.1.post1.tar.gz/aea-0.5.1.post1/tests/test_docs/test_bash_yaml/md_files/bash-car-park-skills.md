``` bash
python scripts/oef/launch.py -c ./scripts/oef/launch_config.json
```
``` bash
aea fetch fetchai/car_detector:0.7.0
cd car_detector
aea install
```
``` bash
aea create car_detector
cd car_detector
aea add connection fetchai/oef:0.6.0
aea add connection fetchai/ledger:0.2.0
aea add skill fetchai/carpark_detection:0.6.0
aea install
aea config set agent.default_connection fetchai/oef:0.6.0
```
``` bash
aea fetch fetchai/car_data_buyer:0.7.0
cd car_data_buyer
aea install
```
``` bash
aea create car_data_buyer
cd car_data_buyer
aea add connection fetchai/oef:0.6.0
aea add connection fetchai/ledger:0.2.0
aea add skill fetchai/carpark_client:0.6.0
aea install
aea config set agent.default_connection fetchai/oef:0.6.0
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
aea config set vendor.fetchai.skills.carpark_detection.models.strategy.args.currency_id ETH
aea config set vendor.fetchai.skills.carpark_detection.models.strategy.args.ledger_id ethereum
```
``` bash
aea config set vendor.fetchai.skills.carpark_detection.models.strategy.args.currency_id ATOM
aea config set vendor.fetchai.skills.carpark_detection.models.strategy.args.ledger_id cosmos
```
``` bash
aea config set vendor.fetchai.skills.carpark_client.models.strategy.args.max_buyer_tx_fee 6000 --type int
aea config set vendor.fetchai.skills.carpark_client.models.strategy.args.currency_id ETH
aea config set vendor.fetchai.skills.carpark_client.models.strategy.args.ledger_id ethereum
```
``` bash
aea config set vendor.fetchai.skills.carpark_client.models.strategy.args.max_buyer_tx_fee 6000 --type int
aea config set vendor.fetchai.skills.carpark_client.models.strategy.args.currency_id ATOM
aea config set vendor.fetchai.skills.carpark_client.models.strategy.args.ledger_id cosmos
```
``` bash
aea run
```
``` bash
cd ..
aea delete car_detector
aea delete car_data_buyer
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
