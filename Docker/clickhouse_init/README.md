## ClickHouse Setup & Queries
### 1. Initialize Database and Tables
Run the SQL scripts to create the database and tables:
```bash
docker exec -it clickhouse clickhouse-client --multiquery --queries-file=/docker-entrypoint-initdb.d/sql/create_db_and_tables.sql
```
### 2. Load Historic Data
Execute the SQL script to load queries/data:
```bash
docker exec -it clickhouse clickhouse-client --multiquery --queries-file=/docker-entrypoint-initdb.d/sql/load_historic_data.sql
```
### 3.Connect to the Client: To start an interactive SQL session, run:
 ```bash
 docker exec -it clickhouse clickhouse-client
 ```
You should see a prompt like `clickhouse-server :)`. You are now ready to run queries!

### Some comments: 
#### 1. ClickHouse Database
- Database: sp600_stocks
- Tables Created:
- daily_stock_data - Daily stock prices (date, ticker, OHLC, volume) 
- sp600 - S&P 600 small-cap components
- sp500 - S&P 500 components
- company_details - Monthly company overview data
- exchanges - Exchange information 
- before202510_stock_data - Historical stock data
#### 2. Current Setup:
- I builded **two ingestors** monthly and daily, both run **once** when container starts (there will be **duplicated data** every time when restart containet!!)
- how to fix it?
- Before restarting, truncate tables
```bash
docker exec -it clickhouse clickhouse-client --password password
```
In ClickHouse:
```bash
TRUNCATE TABLE sp600_stocks.daily_stock_data;
TRUNCATE TABLE sp600_stocks.sp600;
TRUNCATE TABLE sp600_stocks.sp500;
TRUNCATE TABLE sp600_stocks.company_details;
TRUNCATE TABLE sp600_stocks.exchanges;
exit
```
Now restart: 
```bash
docker-compose restart ingestor
```








