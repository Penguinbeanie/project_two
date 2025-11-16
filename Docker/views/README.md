## ClickHouse Access Control & Security

### Overview

This project implements role-based access control (RBAC) with column-level security and data pseudonymization in ClickHouse 24.8.

### Role Definitions

#### 1. analyst_full
- Full SELECT access to all gold layer and its views
- Can see all columns including sensitive data

#### 2. analyst_limited
- Column-level grants on `dim_company` (excludes 3 sensitive columns)
- **Cannot** access `company_name`, `headquarters_country`, `website_url` directly
- **Cannot** perform `SELECT *` on `dim_company` (attempts to access restricted columns will fail)
- Must query through `dim_company_limited_v` view for complete data with pseudonymization


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

### Step-by-Step Setup

#### 1. Create Analytical Views

Run the SQL script to create full and limited access views:
```bash
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
with limited user:
 ```bash
docker exec -it clickhouse clickhouse-client --user=limited_analyst --password=secure_password_456
 ```
with unlimited user:
 ```bash
docker exec -it clickhouse clickhouse-client --user=full_analyst --password=secure_password_123
 ```
You should see a prompt like `clickhouse-server :)`. You are now ready to run queries!

