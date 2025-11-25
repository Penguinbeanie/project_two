\# OpenMetadata Setup Guide for Team Members



This guide will help you set up the complete OpenMetadata environment with all ClickHouse connections and data quality tests pre-configured.



\## Prerequisites



\- Docker Desktop installed and running

\- At least 12GB RAM allocated to Docker

\- Git installed

\- PowerShell (Windows)



\## Quick Start (5 minutes)



\### Step 1: Clone the Repository

```bash

git clone -b feature/openmetadata https://github.com/Penguinbeanie/project\_two.git

cd project\_two/Docker

```



\### Step 2: Start Docker Services



\*\*Start main analytics stack:\*\*

```bash

docker-compose up -d

```



Wait for all containers to be healthy (~30 seconds):

```bash

docker ps

```



You should see:

\- ✅ `clickhouse` - Running

\- ✅ `postgres` - Running  

\- ✅ `airflow-webserver` - Running

\- ✅ `airflow-scheduler` - Running



\*\*Start OpenMetadata:\*\*

```bash

cd openmetadata-infra

docker-compose up -d

```



Wait for OpenMetadata to be ready (~2-3 minutes):

```bash

docker logs -f openmetadata\_server

\# Wait until you see: "OpenMetadata Server is up and running"

\# Press Ctrl+C to exit logs

```



\### Step 3: Restore OpenMetadata Database



This step imports all pre-configured ClickHouse connections, data quality tests, and metadata.

```bash

.\\restore\_backup.ps1

```



\*\*What this does:\*\*

\- Extracts the database backup

\- Imports all configurations into MySQL

\- Sets up ClickHouse connection to main `clickhouse` container (port 8123)

\- Restores all data quality tests



\*\*Expected output:\*\*

```

Restoring OpenMetadata database backup...

Waiting for MySQL to be ready...

Database restored successfully!

You can now access OpenMetadata at http://localhost:8585

```



\### Step 4: Access OpenMetadata



Open your browser:

```

http://localhost:8585

```



\*\*Login credentials:\*\*

\- Email: `admin@open-metadata.org`

\- Password: `admin`



\### Step 5: Verify Setup



\*\*Check ClickHouse connection:\*\*

1\. Go to \*\*Settings\*\* → \*\*Services\*\* → \*\*Databases\*\*

2\. You should see your ClickHouse service already configured

3\. Click on it and verify:

&nbsp;  - Host: `clickhouse:8123`

&nbsp;  - Database: `sp600\_stocks`

&nbsp;  - Status: Connected ✅



\*\*Check data quality tests:\*\*

1\. Go to \*\*Explore\*\*

2\. Search for tables: `fact\_stock\_price`, `dim\_company`

3\. Click on a table → \*\*Quality\*\* tab

4\. You should see pre-configured tests (NOT NULL, UNIQUE, RANGE tests)



\## What's Pre-Configured



After running the restore script, you'll have:



✅ \*\*ClickHouse Connection:\*\*

\- Service name: Your ClickHouse service

\- Connected to main `clickhouse` container

\- Database: `sp600\_stocks`

\- All tables cataloged



✅ \*\*Data Quality Tests:\*\*

\- NOT NULL tests on foreign keys

\- UNIQUE tests on primary keys

\- RANGE tests on numeric fields



✅ \*\*Metadata:\*\*

\- Table descriptions

\- Column descriptions

\- Data lineage

\- Tags and glossary terms



\## Troubleshooting



\### "Database restore failed"



\*\*Problem:\*\* MySQL container not ready yet



\*\*Solution:\*\*

```bash

\# Check if MySQL is running

docker ps | Select-String "openmetadata\_mysql"



\# If not running, restart OpenMetadata stack

docker-compose restart



\# Wait 30 seconds and try restore again

.\\restore\_backup.ps1

```



\### "Cannot connect to ClickHouse"



\*\*Problem:\*\* ClickHouse container not running



\*\*Solution:\*\*

```bash

\# Go back to main Docker folder

cd ..



\# Check if ClickHouse is running

docker ps | Select-String "clickhouse"



\# If not running

docker-compose up -d clickhouse



\# Verify it's healthy

docker ps

```



\### "Port already allocated"



\*\*Problem:\*\* Another project using the same ports



\*\*Solution:\*\*

```bash

\# Stop all Docker containers

docker stop $(docker ps -aq)



\# Start fresh

docker-compose up -d

cd openmetadata-infra

docker-compose up -d

```



\### OpenMetadata shows empty (no data)



\*\*Problem:\*\* Restore script didn't run or failed



\*\*Solution:\*\*

```bash

cd openmetadata-infra



\# Run restore again

.\\restore\_backup.ps1



\# Restart OpenMetadata to reload

docker-compose restart openmetadata\_server

```



\## Important Ports



| Service | Port | URL |

|---------|------|-----|

| OpenMetadata UI | 8585 | http://localhost:8585 |

| ClickHouse HTTP | 8123 | http://localhost:8123 |

| ClickHouse Native | 9000 | localhost:9000 |

| Airflow | 8080 | http://localhost:8080 |

| Elasticsearch | 9200 | http://localhost:9200 |



\## Next Steps



After setup is complete:



1\. \*\*Explore the Data Catalog:\*\*

&nbsp;  - Browse tables in `sp600\_stocks` database

&nbsp;  - View column-level metadata

&nbsp;  - Check data lineage



2\. \*\*Run Data Quality Tests:\*\*

&nbsp;  - Navigate to table → Quality tab

&nbsp;  - Click "Run All Tests"

&nbsp;  - View test results and history



3\. \*\*View ClickHouse Data:\*\*

```bash

&nbsp;  docker exec -it clickhouse clickhouse-client --user default --password default

```

```sql

&nbsp;  USE sp600\_stocks;

&nbsp;  SHOW TABLES;

&nbsp;  SELECT \* FROM fact\_stock\_price LIMIT 10;

```



\## Stopping the Environment



When you're done:

```bash

\# Stop main stack

cd C:\\path\\to\\project\_two\\Docker

docker-compose down



\# Stop OpenMetadata

cd openmetadata-infra

docker-compose down

```



\*\*Note:\*\* This preserves all data in Docker volumes. Next time you run `docker-compose up -d`, everything will be as you left it.



\## Getting Help



If you encounter issues:

1\. Check Docker Desktop is running

2\. Verify you have enough RAM (12GB+)

3\. Check all containers are healthy: `docker ps`

4\. View container logs: `docker logs <container\_name>`



For project-specific questions, contact the team lead.

