#!/bin/bash
set -e

echo "=== Starting ClickHouse with Auto-Initialization ==="

# Start ClickHouse in background
/entrypoint.sh clickhouse-server &
CLICKHOUSE_PID=$!

# Wait for ClickHouse to be ready
echo "Waiting for ClickHouse to start..."
until clickhouse-client --query "SELECT 1" 2>/dev/null; do
    echo "ClickHouse not ready yet..."
    sleep 2
done

echo "ClickHouse is ready! Running initialization scripts..."

# Run initialization scripts in order
echo "Running 01_create_db_and_tables.sql..."
clickhouse-client < /docker-entrypoint-initdb.d/01_create_db_and_tables.sql

echo "Running 02_load_historic_data.sql..."
clickhouse-client --database sp600_stocks < /docker-entrypoint-initdb.d/02_load_historic_data.sql

echo "=== ClickHouse initialization complete ==="
echo "All tables created and historic data loaded successfully!"

# Keep ClickHouse running
wait $CLICKHOUSE_PID
