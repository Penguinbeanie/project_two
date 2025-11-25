# OpenMetadata Setup Guide

## Prerequisites

- Docker Desktop installed with at least **12GB RAM allocated**
- Windows with WSL 2 backend
- Python 3.13+ installed
- Git

## Table of Contents

1. [Configure Docker Memory](#1-configure-docker-memory)
2. [Start OpenMetadata Stack](#2-start-openmetadata-stack)
3. [Create ClickHouse Gold Tables with DBT](#3-create-clickhouse-gold-tables-with-dbt)
4. [Connect ClickHouse to OpenMetadata](#4-connect-clickhouse-to-openmetadata)
5. [Register Gold Tables in OpenMetadata](#5-register-gold-tables-in-openmetadata)
6. [Troubleshooting](#6-troubleshooting)

---

## 1. Configure Docker Memory

### For WSL 2 Backend (Windows)

1. **Create `.wslconfig` file:**
   ```powershell
   notepad $env:USERPROFILE\.wslconfig
   ```

2. **Add the following content:**
   ```ini
   [wsl2]
   memory=12GB
   processors=4
   swap=2GB
   ```

3. **Save and close the file**

4. **Shutdown WSL to apply changes:**
   ```powershell
   wsl --shutdown
   ```

5. **Restart Docker Desktop**

6. **Verify memory allocation:**
   ```powershell
   docker info | Select-String "Total Memory"
   # Should show: Total Memory: ~11-12GiB
   ```

### For Docker Desktop on Mac

1. Open Docker Desktop
2. Go to Settings → Resources → Advanced
3. Set Memory to at least 12GB
4. Click "Apply & Restart"

---

## 2. Start OpenMetadata Stack

1. **In the openmetadata-infra start up all services:**
   ```powershell
   docker-compose up -d
   ```
   You should see these containers as **healthy**:
   - `openmetadata_server`
   - `openmetadata_elasticsearch`
   - `openmetadata_mysql`
   - `openmetadata_ingestion`

2. **Wait for OpenMetadata to be ready (~2-3 minutes):**
   ```powershell
   docker logs -f openmetadata_server
   # Wait until you see: "OpenMetadata Server is up and running"
   ```
---


---

## 3. Connect ClickHouse to OpenMetadata

### Create Dedicated OpenMetadata User (First Time Setup Only)

For security best practices, we created a dedicated user for OpenMetadata with read-only access:

```powershell
# Connect to ClickHouse
docker exec -it openmetadata_clickhouse clickhouse-client --user default --password default

# Create role and user
CREATE ROLE role_openmetadata;
CREATE USER service_openmetadata IDENTIFIED WITH sha256_password BY 'omd_very_secret_password';
GRANT role_openmetadata TO service_openmetadata;
GRANT SELECT, SHOW ON system.* TO role_openmetadata;
GRANT SELECT ON sp600_stocks.* TO role_openmetadata;

# Exit ClickHouse client
EXIT;
```

### Configure OpenMetadata Connection

**Option A: Service Already Exists (Most Common)**

1. Login to OpenMetadata: http://localhost:8585
   - Email: `admin@open-metadata.org`
   - Password: `admin`

2. Verify connection:
   - Settings → Services → Databases
   - Look for existing ClickHouse service (`openmetadata_p3`)
   - Service should be connected with these credentials:
     - Host: `clickhouse:8132`
     - Username: `service_openmetadata`
     - Password: `omd_very_secret_password`
     - Database: `sp600_stocks`

3. If service exists, you're done! Skip to Step 5.

**Option B: Add New Service (If It Doesn't Exists)**

If no ClickHouse service exists:

1. Navigate to Services:
   - Click Settings (gear icon) → Services → Databases

2. Add New Database Service:
   - Click **+ Add Service**
   - Select **ClickHouse**

3. Configure Connection:
   - **Name:** `openmetadata_p3`
   - **Host and Port:** `clickhouse:8132`
   - **Username:** `service_openmetadata`
   - **Password:** `omd_very_secret_password`
   - **Database:** `sp600_stocks`

4. Test Connection:
   - Click **Test Connection**
   - Should show: Connection successful

5. Save Service

---

## 5. Verify Gold Tables in OpenMetadata

If OpenMetadata has been set up correctly, gold tables should already be registered and visible. This section shows how to verify and re-sync if needed.

### Check if Tables Are Registered

1. Login to OpenMetadata: http://localhost:8585

2. Go to Explore and search for gold tables:
   - `dim_company`
   - `dim_date`
   - `dim_exchange`
   - `fact_stock_price`


### If Tables Are Missing: Run Metadata Ingestion

If you don't see the gold tables, the metadata hasn't been synced yet:

1. Navigate to your ClickHouse service:
   - Settings → Services → Databases → `openmetadata_p3`

2. Go to Agents tab:
   - Click Agents → Metadata

3. Run Metadata Ingestion:
   - Click the ▶ Run button next to the Metadata pipeline
   - Wait ~1-2 minutes for completion

4. Monitor Progress:
   - Status should change: `Running` → `Success`
   - Check the logs for number of tables discovered
   - Should discover: `dim_company`, `dim_date`, `dim_exchange`, `fact_stock_price` (plus bronze/silver tables)

5. Verify tables now appear:
   - Go back to Explore and search for tables
   - All 4 gold tables should now be visible

### View Data Lineage

1. Open a table (e.g., `fact_stock_price`)

2. Click Lineage tab:
   - Should show data flow from source tables
   - Lineage is generated from:
     - DBT models (relationships defined in your DBT project)
     - SQL query history in ClickHouse
     - Manual relationships (if configured)

3. If lineage is empty:
   - This is normal if you haven't run DBT transformations yet
   - Or if Lineage ingestion pipeline hasn't run
   - To populate lineage: Settings → Services → Your ClickHouse service → Agents → Lineage → Run

---

## 6. Troubleshooting

### Elasticsearch Not Starting 

**Problem:** Elasticsearch crashes with "Killed" 

**Solution:** Increase Docker memory allocation (see Step 1)

```powershell
# Check if Elasticsearch is running
docker ps | Select-String "elasticsearch"

# If not running, check logs
docker logs openmetadata_elasticsearch

# Restart services after increasing memory
cd openmetadata-infra
docker-compose down
docker-compose up -d
```

### OpenMetadata Server Crashes

**Problem:** OpenMetadata server keeps restarting or shows "Killed"

**Solution:** This is also a memory issue. Ensure Docker has at least 12GB RAM.

### DBT Connection Error: "Authentication failed"

**Problem:** DBT can't connect to ClickHouse

**Solution:** Verify environment variables:

```powershell
$env:CLICKHOUSE_HOST = "localhost"
$env:CLICKHOUSE_USER = "default"
$env:CLICKHOUSE_PASSWORD = "default"
```

### DBT "Module not found" Error

**Problem:** `dbt` command not recognized

**Solution:** Use Python module syntax:

```powershell
python -m dbt.cli.main run
```

### Missing Staging Tables Error

**Problem:** `Unknown table expression identifier 'stg_company_details'`

**Solution:** Run all DBT models (not just marts):

```powershell
python -m dbt.cli.main run
# This runs staging models first, then marts
```

### ClickHouse Tables Not Appearing in OpenMetadata

**Problem:** Gold tables exist in ClickHouse but don't show in OpenMetadata

**Solution:**

1. **Verify ClickHouse connection:**
   - Settings → Services → Databases → Your ClickHouse service
   - Click **Test Connection**

2. **Re-run Metadata Agent:**
   - Agents → Metadata → Run
   - Wait for completion

3. **Check filters:**
   - Ensure `sp600_stocks` database is included in ingestion settings

### Lineage Page Shows Error

**Problem:** "An exception with message [elasticsearch] was thrown"

**Solution:** Elasticsearch is not running. Check container status:

```powershell
docker ps -a | Select-String "elasticsearch"

# If not running:
docker-compose up -d openmetadata_elasticsearch

# Wait until healthy:
docker ps
```

---

## Architecture Overview

```
┌─────────────────────┐
│   Bronze Layer      │
│  (Raw Data)         │
│  - company_details  │
│  - daily_stock_data │
│  - exchanges        │
└──────────┬──────────┘
           │
           │ DBT Transformations
           │
           ▼
┌─────────────────────┐
│   Gold Layer        │
│  (Dimensional)      │
│  - dim_company      │
│  - dim_date         │
│  - dim_exchange     │
│  - fact_stock_price │
└──────────┬──────────┘
           │
           │ Metadata Ingestion
           │
           ▼
┌─────────────────────┐
│   OpenMetadata      │
│  - Data Catalog     │
│  - Lineage          │
│  - Data Quality     │
└─────────────────────┘
```

---

## Key Ports

| Service | Port | URL |
|---------|------|-----|
| OpenMetadata UI | 8585 | http://localhost:8585 |
| ClickHouse HTTP | 8123 | http://localhost:8123 |
| ClickHouse Native | 9000 | localhost:9000 |
| Elasticsearch | 9200 | http://localhost:9200 |
| Airflow (if running) | 8080 | http://localhost:8080 |

---



## 6. Data Quality Tests

### Creating Data Quality Tests (First Time Setup)

If data quality tests don't exist yet, here's how to create them:

#### Test 1: NOT NULL on Foreign Key (Fact Table)

1. Navigate to fact table:
   - Go to Explore → Search: `fact_stock_price`
   - Click on the table

2. Go to Quality tab:
   - Click Quality tab
   - Click + Add Test

3. Configure test:
   - **Test Level:** Column Level
   - **Select Table:** `fact_stock_price` (should be pre-filled)
   - **Select Column:** `CompanyID`
   - **Select Test Type:** `Column Values To Be Not Null`
   
4. Test details:
   - **Name:** `fact_stock_price_company_id_not_null`
   - **Description:** `Ensures all records have a valid company reference`
   - **Compute Row Count:** Leave unchecked (for better performance)

5. Create Pipeline:
   - **Pipeline Name:** `fact_stock_price_quality_tests`
   - **Schedule:** Select On Demand (manual execution)
   - **Enable Debug Log:** Leave unchecked
   - **Raise on Error:** Keep enabled ✅
   - Click Submit

#### Test 2: UNIQUE on Surrogate Key (Dimension Table)

1. Navigate to dimension table:
   - Go to Explore → Search: `dim_company`
   - Click on the table

2. Add test:
   - Quality tab → + Add Test

3. Configure test:
   - **Test Level:** Column Level
   - **Select Column:** `company_id`
   - **Select Test Type:** `Column Values To Be Unique`

4. Test details:
   - **Name:** `dim_company_id_unique`
   - **Description:** `Ensures each company has a unique identifier, maintaining referential integrity in the dimension table`
   - **Compute Row Count:** Leave unchecked

5. Create Pipeline:
   - **Pipeline Name:** `dim_company_quality_tests`
   - **Schedule:** On Demand
   - **Raise on Error:** Enabled ✅
   - Click Submit

#### Test 3: Range Check (Additional Test)

1. Go back to fact table:
   - Explore → `fact_stock_price`

2. Add another test:
   - Quality tab → + Add Test

3. Configure range test:
   - **Test Level:** Column Level
   - **Select Column:** `Close`
   - **Select Test Type:** `Column Values To Be Between`
   - **Min Value:** `0`
   - **Max Value:** `999999999` (or leave empty if allowed)

4. Test details:
   - **Name:** `fact_stock_price_close_positive`
   - **Description:** `Validates that closing stock prices are positive values, ensuring data quality and preventing invalid or negative price entries`

5. Use existing pipeline:
   - Select the existing `fact_stock_price_quality_tests` pipeline
   - Click Submit


### Tests

1. NOT NULL test on `CompanyID` foreign key in `fact_stock_price` table
2. UNIQUE test on `company_id` surrogate key in `dim_company` table  
3. RANGE test on `Close` price in `fact_stock_price` table (validates positive values)

### How to Run Data Quality Tests

**Method 1: Run from Ingestion Pipeline (Recommended)**

1. Navigate to Services:
   - Click Settings (gear icon)
   - Go to Services → Databases

2. Open your ClickHouse service:
   - Click on your ClickHouse service (`openmetadata_p3`)

3. Go to Agents/Ingestion tab:
   - Click Agents or Ingestion tab and go to Data Quality

4. Run Data Quality Pipeline:
   - Find the Data Quality pipeline
   - Click the Run button 
   - Wait for execution (usually 10-30 seconds)

5. Monitor progress:
   - Status changes: Queued → Running → Success/Failed
   - Click on the pipeline name to see detailed logs

**Method 2: Run from Table Quality Tab**

1. Navigate to a table:
   - Go to Explore
   - Search for: `fact_stock_price` or `dim_company`
   - Click on the table

2. Go to Quality tab:
   - Click the Quality tab

3. View configured tests:
   - You'll see all tests configured for this table
   - Each test shows: Name, Test Type, Column, Last Run status

4. Run individual test:
   - Click the Run button next to a specific test
   - Or click Run All Tests to run all tests for this table

5. Wait for results:
   - Test status updates: Running → Success / Failed 


### What to Do if Tests Fail

If a test fails:

1. Click on the failed test to see details

2. Check failure reason:
   - NULL values found? → Data quality issue in source
   - Duplicate IDs? → Problem in DBT transformation
   - Negative prices? → Data ingestion error

3. Fix the root cause:
   - If source data is bad: Fix upstream data pipeline
   - If transformation is wrong: Update DBT model and re-run
   - If test configuration is wrong: Edit test parameters

4. Re-run DBT if needed:
   ```powershell
   cd C:\Users\<your-username>\DA_project\project_two\Docker\dbt
   $env:CLICKHOUSE_HOST = "localhost"
   $env:CLICKHOUSE_USER = "default"  
   $env:CLICKHOUSE_PASSWORD = "default"
   python -m dbt.cli.main run --select marts.*
   ```

5. Re-run tests:
   - Go back to OpenMetadata
   - Run Data Quality pipeline again
   - Verify tests now pass


### Troubleshooting

**"Data Quality pipeline not found":**
- The pipeline may not be created yet
- Run Metadata ingestion first (it should create the Data Quality pipeline)
- Or create it manually: Agents tab → Add Pipeline → Data Quality

**"Test execution failed with connection error":**
- Verify ClickHouse is running: `docker ps | Select-String "clickhouse"`
- Check OpenMetadata can connect: Settings → Services → Test Connection

**"Tests never finish running":**
- Large tables may take time
- Check Docker container resources
- View pipeline logs for detailed error messages

**"Test results not showing":**
- Refresh the page
- Clear browser cache
- Check if test pipeline completed successfully

---

## Support

If you encounter issues not covered in this guide:

1. Check Docker container logs: `docker logs <container-name>`
2. Verify all environment variables are set correctly
3. Ensure Docker has sufficient memory (12GB+)
4. Check that all required ports are not in use by other applications

---
