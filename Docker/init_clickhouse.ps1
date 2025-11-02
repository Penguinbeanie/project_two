Write-Host "=== ClickHouse Database Initialization ===" -ForegroundColor Green
Write-Host "This script will create the database and load historic data." -ForegroundColor White
Write-Host ""

# Function to check if ClickHouse is ready
function Test-ClickHouseReady {
    try {
        docker-compose exec clickhouse clickhouse-client --query "SELECT 1" 2>&1 | Out-Null
        return $true
    } catch {
        return $false
    }
}

# Wait for ClickHouse to be ready
Write-Host "Waiting for ClickHouse to be ready..." -ForegroundColor Yellow
do {
    Start-Sleep -Seconds 5
    Write-Host "Checking ClickHouse..." -ForegroundColor Yellow
} until (Test-ClickHouseReady)

Write-Host "ClickHouse is ready!" -ForegroundColor Green

# Create database and tables
Write-Host "Creating database and tables..." -ForegroundColor Green
docker-compose exec clickhouse clickhouse-client < /docker-entrypoint-initdb.d/01_create_db_and_tables.sql

# Load historic data  
Write-Host "Loading historic data..." -ForegroundColor Green
docker-compose exec clickhouse clickhouse-client --database sp600_stocks < /docker-entrypoint-initdb.d/02_load_historic_data.sql

Write-Host "" -ForegroundColor Green
Write-Host "=== Initialization Complete ===" -ForegroundColor Green
Write-Host "Database: sp600_stocks" -ForegroundColor White
Write-Host "Tables created: daily_stock_data, sp500, sp600" -ForegroundColor White
Write-Host "Historic data loaded successfully!" -ForegroundColor White
Write-Host "" -ForegroundColor Green
Write-Host "You can now run your Airflow DAGs:" -ForegroundColor Cyan
Write-Host "docker-compose exec airflow-webserver airflow dags trigger daily_market_etl" -ForegroundColor White
