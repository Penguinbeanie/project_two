# OpenMetadata Database Restore Script
Write-Host "Restoring OpenMetadata database backup..." -ForegroundColor Green

# Check if backup zip exists
if (-not (Test-Path "openmetadata_backup.zip")) {
    Write-Host "Error: openmetadata_backup.zip not found!" -ForegroundColor Red
    exit 1
}

# Unzip backup
Write-Host "Extracting backup file..."
Expand-Archive -Path openmetadata_backup.zip -DestinationPath . -Force

# Check if SQL file was extracted
if (-not (Test-Path "openmetadata_minimal_backup.sql")) {
    Write-Host "Error: SQL backup file not found after extraction!" -ForegroundColor Red
    exit 1
}

# Wait for MySQL to be ready
Write-Host "Waiting for MySQL to be ready..."
Start-Sleep -Seconds 15

# Check if MySQL container is running
$mysqlRunning = docker ps --filter "name=openmetadata_mysql" --format "{{.Names}}"
if (-not $mysqlRunning) {
    Write-Host "Error: MySQL container is not running!" -ForegroundColor Red
    Write-Host "Please run 'docker-compose up -d' first" -ForegroundColor Yellow
    exit 1
}

# Restore database
Write-Host "Importing database (this may take 1-2 minutes)..."
Get-Content openmetadata_minimal_backup.sql | docker exec -i openmetadata_mysql mysql -u root -ppassword openmetadata_db

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nDatabase restored successfully!" -ForegroundColor Green
    Write-Host "`nYou can now access OpenMetadata at: " -NoNewline
    Write-Host "http://localhost:8585" -ForegroundColor Cyan
    Write-Host "Login: " -NoNewline
    Write-Host "admin@open-metadata.org" -ForegroundColor Yellow -NoNewline
    Write-Host " / " -NoNewline  
    Write-Host "admin" -ForegroundColor Yellow
    
    # Restart OpenMetadata server to reload configuration
    Write-Host "`nRestarting OpenMetadata server..."
    docker restart openmetadata_server | Out-Null
    Write-Host "Done! Wait 30 seconds for OpenMetadata to fully restart." -ForegroundColor Green
} else {
    Write-Host "`nError: Database restore failed!" -ForegroundColor Red
    Write-Host "Check the error messages above." -ForegroundColor Yellow
    exit 1
}

