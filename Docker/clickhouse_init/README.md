## ClickHouse Setup & Queries
### 1. Initialize Database and Tables
Run the SQL scripts to create the database and tables:
```bash
docker exec -it clickhouse clickhouse-client \
    --multiquery \
    --queries-file=/docker-entrypoint-initdb.d/sql/create_db_and_tables.sql
```
### 2. Load Initial Data
Execute the SQL script to load queries/data:
```bash
docker exec -it clickhouse clickhouse-client \
    --multiquery \
    --queries-file=/docker-entrypoint-initdb.d/sql/load_queries.sql
```
### 3.Connect to the Client: To start an interactive SQL session, run:
 ```bash
 docker exec -it clickhouse clickhouse-client
 ```
You should see a prompt like `clickhouse-server :)`. You are now ready to run queries!

## Some comments: 
## 1. I added two lines in the compose file to insert data. 
## 2. For saving time, I only inserted 10 rows per dataset. If you will to insert more plz remove LIMIT 10 in load_queries.sql.


