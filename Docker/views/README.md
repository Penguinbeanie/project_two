## ClickHouse Access Control & Security

### Overview

This project implements role-based access control (RBAC) with column-level security and data pseudonymization in ClickHouse 24.8.

### Role Definitions

#### 1. analyst_full
- Full SELECT access to all gold layer and its views
- Can see all columns including sensitive data

| # | Name                 |
| - | -------------------- |
| 1 | `dim_company`        |
| 2 | `dim_company_v`      |
| 3 | `dim_date`           |
| 4 | `dim_date_v`         |
| 5 | `dim_exchange`       |
| 6 | `dim_exchange_v`     |
| 7 | `fact_stock_price`   |
| 8 | `fact_stock_price_v` |


#### 2. analyst_limited
- Column-level grants on `dim_company` (excludes 3 sensitive columns)
- **Cannot** access `company_name`, `headquarters_country`, `website_url` directly
- **Cannot** perform `SELECT *` on `dim_company` (attempts to access restricted columns will fail)
- Must query through `dim_company_limited_v` view for complete data with pseudonymization

| # | Name                         |
| - | ---------------------------- |
| 1 | `dim_company`                |
| 2 | `dim_company_limited_v`      |
| 3 | `dim_date`                   |
| 4 | `dim_date_limited_v`         |
| 5 | `dim_exchange`               |
| 6 | `dim_exchange_limited_v`     |
| 7 | `fact_stock_price`           |
| 8 | `fact_stock_price_limited_v` |


### Technical Implementation

- **SQL SECURITY DEFINER**: Views use ClickHouse 24.4+ feature that allows views to execute with creator's permissions
- **Column-level Security**: Granular grants ensure sensitive columns are inaccessible to restricted users


### Pseudonymized Columns

The following 3 columns are pseudonymized for `analyst_limited`:

| Column | Pseudonymization Method | Example |
|--------|------------------------|---------|
| `company_name` | First 3 characters + "***" | Apple Inc. → App*** |
| `headquarters_country` | First 2 characters + "**" | United States → Un** |
| `website_url` | Domain masked with "***" | https://apple.com → https://***com |

> **Note**: These columns were selected for demonstration purposes as our dataset does not contain actual PII (Personally Identifiable Information).

---

## ClickHouse Setup Instructions

### Prerequisites

- ClickHouse 24.4+ (for SQL SECURITY DEFINER support)
- Admin user

Run the SQL script to create full and limited access views:
## ClickHouse Setup & Queries
### 1.Creating views
Run the SQL scripts to create views:
```bash
docker exec -i clickhouse clickhouse-client --multiquery --user=admin_user --password=admin123 < views/02_create_analytical_views.sql
```
### 2. Creating users and roles
Execute the SQL script to add users and roles:
```bash
docker exec -i clickhouse clickhouse-client --multiquery --user=admin_user --password=admin123 < views/01_create_roles_and_users.sql
```
### 3.Connect to the Client: To start an interactive SQL session, run:
**with limited user:**
 ```bash
docker exec -it clickhouse clickhouse-client --user=limited_analyst --password=secure_password_456
 ```
**Try these queries:**
```sql
SELECT * FROM sp600_stocks.dim_company_limited_v LIMIT 3;
```
| company_id           | symbol | sector             | industry               | employee_count | exchange_code           | valid_from | valid_to | is_current | company_name | headquarters_country | website_url     |
| -------------------- | ------ | ------------------ | ---------------------- | -------------- | ----------------------- | ---------- | -------- | ---------- | ------------ | -------------------- | --------------- |
| 3397809020744382953  | A      | Healthcare         | Diagnostics & Research | 18000          | New York Stock Exchange | 2025-11-16 | NULL     | 1          | Agi***       | Un**                 | https://***.com |
| 10503953690831840687 | AAMI   | Financial Services | Asset Management       | 383            | New York Stock Exchange | 2025-11-16 | NULL     | 1          | Aca***       | Un**                 | https://***.com |
| 16774863976635419370 | AAP    | Consumer Cyclical  | Auto Parts             | 33200          | New York Stock Exchange | 2025-11-16 | NULL     | 1          | Adv***       | Un**                 | https://***.com |

```sql
SELECT company_name FROM sp600_stocks.dim_company LIMIT 1;
```
```text
Received exception from server (version 24.8.14):
Code: 497. DB::Exception: Received from localhost:9000. DB::Exception: limited_analyst: Not enough privileges. To execute this query, it's necessary to have the grant SELECT(company_name) ON sp600_stocks.dim_company. (ACCESS_DENIED)
```

```sql
SELECT 
    c.sector, 
    c.company_name,  -- This will show masked data (e.g., "App***")
    SUM(f.volume) AS total_volume
FROM sp600_stocks.fact_stock_price_limited_v f
INNER JOIN sp600_stocks.dim_company_limited_v c ON f.company_id = c.company_id
INNER JOIN sp600_stocks.dim_date_limited_v d ON f.date_id = d.date_id
WHERE d.year = 2025 AND d.quarter = 1
GROUP BY c.sector, c.company_name
ORDER BY c.sector, total_volume DESC
LIMIT 3 BY c.sector;
```

| sector                 | company_name | total_volume   |
| ---------------------- | ------------ | -------------- |
| Basic Materials        | Hec***       | 2,306,331,200  |
| Basic Materials        | Fre***       | 1,928,831,400  |
| Basic Materials        | New***       | 1,234,419,400  |
| Communication Services | Alp***       | 6,119,401,000  |
| Communication Services | AT&***       | 5,055,227,800  |
| Communication Services | War***       | 4,258,502,600  |
| Consumer Cyclical      | For***       | 12,037,247,000 |
| Consumer Cyclical      | Tes***       | 11,622,656,000 |
| Consumer Cyclical      | Ama***       | 4,805,825,000  |
| Consumer Defensive     | The***       | 6,796,864,400  |
| Consumer Defensive     | Wal***       | 2,450,345,000  |
| Consumer Defensive     | Mon***       | 2,059,655,200  |
| Energy                 | Exx***       | 1,936,474,400  |
| Energy                 | SLB***       | 1,850,996,600  |
| Energy                 | Kin***       | 1,844,731,200  |
| Financial Services     | Ban***       | 5,103,976,200  |
| Financial Services     | MAR***       | 4,626,919,200  |
| Financial Services     | Rob***       | 4,320,932,200  |
| Healthcare             | Pfi***       | 5,438,017,000  |
| Healthcare             | Mer***       | 1,998,581,000  |
| Healthcare             | Abb***       | 1,600,143,200  |
| Industrials            | Jet***       | 2,813,824,800  |
| Industrials            | Uni***       | 2,132,430,400  |
| Industrials            | CSX***       | 1,779,322,800  |
| Real Estate            | Med***       | 1,497,149,200  |
| Real Estate            | Hos***       | 1,059,462,800  |
| Real Estate            | Rea***       | 969,665,600    |
| Technology             | NVI***       | 33,763,163,000 |
| Technology             | Int***       | 12,820,724,800 |
| Technology             | Pal***       | 12,554,576,400 |
| Utilities              | PG&***       | 2,835,697,800  |
| Utilities              | The***       | 2,464,643,600  |
| Utilities              | Nex***       | 1,407,906,600  |


**with unlimited user:**
 ```bash
docker exec -it clickhouse clickhouse-client --user=full_analyst --password=secure_password_123
 ```
You should see a prompt like `clickhouse-server :)`. You are now ready to run queries!
**Try these queries:**
```sql
SELECT * FROM sp600_stocks.dim_company_v LIMIT 3;
```
| company_id           | symbol | company_name                  | sector             | industry               | headquarters_country | website_url                                                            | employee_count | exchange_code           | valid_from | valid_to | is_current |
| -------------------- | ------ | ----------------------------- | ------------------ | ---------------------- | -------------------- | ---------------------------------------------------------------------- | -------------- | ----------------------- | ---------- | -------- | ---------- |
| 3397809020744382953  | A      | Agilent Technologies, Inc.    | Healthcare         | Diagnostics & Research | United States        | [https://www.agilent.com](https://www.agilent.com)                     | 18000          | New York Stock Exchange | 2025-11-16 | NULL     | 1          |
| 10503953690831840687 | AAMI   | Acadian Asset Management Inc. | Financial Services | Asset Management       | United States        | [https://www.bsig.com](https://www.bsig.com)                           | 383            | New York Stock Exchange | 2025-11-16 | NULL     | 1          |
| 16774863976635419370 | AAP    | Advance Auto Parts, Inc.      | Consumer Cyclical  | Auto Parts             | United States        | [https://shop.advanceautoparts.com](https://shop.advanceautoparts.com) | 33200          | New York Stock Exchange | 2025-11-16 | NULL     | 1          |
```sql
SELECT company_name, headquarters_country FROM sp600_stocks.dim_company LIMIT 3;
```
| company_name                  | headquarters_country |
| ----------------------------- | -------------------- |
| Agilent Technologies, Inc.    | United States        |
| Acadian Asset Management Inc. | United States        |
| Advance Auto Parts, Inc.      | United States        |

```sql
SELECT 
    c.sector, 
    c.company_name,  -- This will show full data (e.g., "Apple Inc.")
    SUM(f.volume) AS total_volume
FROM sp600_stocks.fact_stock_price_v f
INNER JOIN sp600_stocks.dim_company_v c ON f.company_id = c.company_id
INNER JOIN sp600_stocks.dim_date_v d ON f.date_id = d.date_id
WHERE d.year = 2025 AND d.quarter = 1
GROUP BY c.sector, c.company_name
ORDER BY c.sector, total_volume DESC
LIMIT 3 BY c.sector;
```

| sector                 | company_name                   | total_volume   |
| ---------------------- | ------------------------------ | -------------- |
| Basic Materials        | Hecla Mining Company           | 2,306,331,200  |
| Basic Materials        | Freeport-McMoRan Inc.          | 1,928,831,400  |
| Basic Materials        | Newmont Corporation            | 1,234,419,400  |
| Communication Services | Alphabet Inc.                  | 6,119,401,000  |
| Communication Services | AT&T Inc.                      | 5,055,227,800  |
| Communication Services | Warner Bros. Discovery, Inc.   | 4,258,502,600  |
| Consumer Cyclical      | Ford Motor Company             | 12,037,247,000 |
| Consumer Cyclical      | Tesla, Inc.                    | 11,622,656,000 |
| Consumer Cyclical      | Amazon.com, Inc.               | 4,805,825,000  |
| Consumer Defensive     | Walmart Inc.                   | 2,450,345,000  |
| Consumer Defensive     | The Coca-Cola Company          | 2,184,861,400  |
| Consumer Defensive     | Kenvue Inc.                    | 1,795,803,600  |
| Energy                 | Exxon Mobil Corporation        | 1,936,474,400  |
| Energy                 | SLB N.V.                       | 1,850,996,600  |
| Energy                 | Kinder Morgan, Inc.            | 1,746,061,800  |
| Financial Services     | Bank of America Corporation    | 4,652,304,400  |
| Financial Services     | MARA Holdings, Inc.            | 4,626,919,200  |
| Financial Services     | Robinhood Markets, Inc.        | 4,320,932,200  |
| Healthcare             | Pfizer Inc.                    | 5,438,017,000  |
| Healthcare             | Merck & Co., Inc.              | 1,925,854,200  |
| Healthcare             | Viatris Inc.                   | 1,599,761,600  |
| Industrials            | JetBlue Airways Corporation    | 2,813,824,800  |
| Industrials            | CSX Corporation                | 1,779,322,800  |
| Industrials            | Southwest Airlines Co.         | 1,300,953,400  |
| Real Estate            | Medical Properties Trust, Inc. | 1,497,149,200  |
| Real Estate            | Host Hotels & Resorts, Inc.    | 1,059,462,800  |
| Real Estate            | VICI Properties Inc.           | 865,722,600    |
| Technology             | NVIDIA Corporation             | 33,763,163,000 |
| Technology             | Intel Corporation              | 11,974,755,200 |
| Technology             | Palantir Technologies Inc.     | 11,872,756,200 |
| Utilities              | PG&E Corporation               | 2,835,697,800  |
| Utilities              | The AES Corporation            | 1,849,701,200  |
| Utilities              | NextEra Energy, Inc.           | 1,407,906,600  |
