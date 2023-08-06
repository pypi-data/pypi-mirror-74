![Python](https://github.com/bclipp/easy_database/workflows/Python/badge.svg)

## easy_database

### description
This is a personal package used to hold code patterns used for relational ETL database access.

### Usage

environment setup
```
pyenv install 3.8.0
pyenv virtualenv 3.8.0 app_3.8
pyenv activate app_3.8

# for integration tests
export PASSWORD=testing1234
export USERNAME=testing1234
export DATABASE=testing1234
export TABLE=customers
export INTEGRATION_TEST=True
export DB_IP_ADDRESS=127.0.0.1
export DATABASE_TYPE=postgresql
sudo --preserve-env docker-compose up
```

python 
```
import easy_database.database as db

database_manager = db.database_factory("postgresql")
database_manager.set_connection_string("...")
database_manager.open_conn()
database_manager.send_sql("SELECT * FROM TEST;")
database_manager.close_conn()
```
