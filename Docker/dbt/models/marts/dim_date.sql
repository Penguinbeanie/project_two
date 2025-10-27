{{ config(materialized='table') }}

SELECT
    toYYYYMMDD(date) AS date_id,
    date             AS full_date,
    toYear(date)     AS year,
    formatDateTime(date, '%b') AS month,
    toDayOfMonth(date) AS day,
    formatDateTime(date, '%a') AS day_of_week,
    toQuarter(date) AS quarter
FROM (
    SELECT toDate('2000-01-01') + number AS date
    FROM system.numbers
    LIMIT 10000
)