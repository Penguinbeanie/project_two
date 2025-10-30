INSERT INTO sp600_stocks.before202510_stock_data (date, ticker, close, high, low, open, volume, ingestion_date)
SELECT 
    toDate(Date), toString(Ticker), toFloat64(Close), toFloat64(High),
    toFloat64(Low), toFloat64(Open), toUInt64(Volume), now()
FROM file('historic/historic_daily_stock_data.csv', 'CSVWithNames');