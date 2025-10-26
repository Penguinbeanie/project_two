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

## Comments

### 1. ClickHouse Database

**Database:** `sp600_stocks`

**Tables:**

| Table Name | Description |
|------------|-------------|
| `daily_stock_data` | Daily stock prices |
| `sp600` | S&P 600 small-cap components |
| `sp500` | S&P 500 components |
| `company_details` | Monthly company overview data |
| `exchanges` | Exchange information |
| `before202510_stock_data` | Historical stock data (pre-Oct 2025) |

---

### 2. Current Setup & Known Issues

#### Architecture
- Built **two separate ingestors**: `ingestor-daily` and `ingestor-monthly`
- Both run **once** when container starts (`restart: "no"`)

#### ⚠️ Known Issue: Data Duplication
**Problem:** Every time containers restart, data gets duplicated in tables.

**Root Cause:** Ingestors use `INSERT` without checking for existing data.

#### 🔧 Solutions

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










