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
