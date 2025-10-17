import yfinance as yf
import pandas as pd
from datetime import date
from datetime import timedelta

# Extracting current date
today_date_obj = date.today()
yesterday_date_obj = today_date_obj - timedelta(days=1)
today_str = today_date_obj.strftime("%Y-%m-%d")
yesterday_str = yesterday_date_obj.strftime("%Y-%m-%d")
today_file = today_date_obj.strftime("%Y_%m_%d")

# Extracting Tickers
df = pd.read_csv("sp500_components.csv")

# --- Configuration ---
TICKERS = df.iloc[:, 0].tolist()
START_DATE = "2024-01-01"
END_DATE = "2025-10-18"  # The current date, to get the latest data
OUTPUT_FILE = f"{today_file}_batch_daily_stock_data_long_format.csv"

print(f"Fetching daily data for {TICKERS}...")

# 1. Fetch data for all tickers.
# yfinance returns a wide DataFrame with multi-level columns.
wide_data = yf.download(TICKERS, start=START_DATE, end=END_DATE)

# 2. Convert from wide to long format.
long_data = wide_data.stack(level=1).rename_axis(["Date", "Ticker"])

# 3. Turn the Date and Ticker index into regular columns.
final_df = long_data.reset_index()

# 4. Save the tidy DataFrame to a single CSV file.
final_df.to_csv(OUTPUT_FILE, index=False)

print(f"Created '{OUTPUT_FILE}'")
