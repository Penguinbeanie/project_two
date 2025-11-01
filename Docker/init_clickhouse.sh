#!/bin/bash
echo "=== ClickHouse Database Initialization ==="
echo "This script will create the database and load historic data."
echo ""

# Wait for ClickHouse to be ready
echo "Waiting for ClickHouse to be ready..."
until docker-compose exec clickhouse clickhouse-client --query "SELECT 1" 2>/dev/null; do
    echo "ClickHouse not ready yet..."
    sleep 2
done

echo "ClickHouse is ready!"

# Create database and tables
echo "Creating database and tables..."
docker-compose exec clickhouse clickhouse-client < /docker-entrypoint-initdb.d/01_create_db_and_tables.sql

# Load historic data
echo "Loading historic data..."
docker-compose exec clickhouse clickhouse-client --database sp600_stocks < /docker-entrypoint-initdb.d/02_load_historic_data.sql

echo ""
echo "=== Initialization Complete ==="
echo "Database: sp600_stocks"
echo "Tables created: daily_stock_data, sp500, sp600"
echo "Historic data loaded successfully!"
echo ""
echo "You can now run your Airflow DAGs: docker-compose exec airflow-webserver airflow dags trigger daily_market_etl"
