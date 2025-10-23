## ClickHouse Setup & Queries
### 1. Initialize Database and Tables
Run the SQL scripts to create the database and tables:
```bash
docker exec -it clickhouse clickhouse-client \
    --multiquery \
    --queries-file=/docker-entrypoint-initdb.d/sql/create_db_and_tables.sql
```

docker exec -it clickhouse clickhouse-client --password password --query "SELECT * FROM sp600_stocks.daily_stock_data LIMIT 10"

docker exec -it clickhouse clickhouse-client --password password --query "SELECT * FROM sp600_stocks.company_details LIMIT 10"

docker exec -it clickhouse clickhouse-client --password password --query "SELECT * FROM sp600_stocks.sp600 LIMIT 10"

docker exec -it clickhouse clickhouse-client --password password --query "SELECT * FROM sp600_stocks.sp500 LIMIT 10"

docker exec -it clickhouse clickhouse-client --password password --query "SELECT * FROM sp600_stocks.exchanges LIMIT 10"

docker exec -it clickhouse clickhouse-client --password password --query "SELECT * FROM sp600_stocks.before202510_stock_data LIMIT 10"


