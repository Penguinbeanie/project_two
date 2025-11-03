import yfinance as yf
import pandas as pd
from datetime import date
from datetime import timedelta
import sys
import os

# Extracting current date and determining the correct start date
today_date_obj = date.today()
weekday = today_date_obj.weekday()

if weekday == 0:
    start_date_obj = today_date_obj - timedelta(days=3)
elif weekday == 6:
    start_date_obj = today_date_obj - timedelta(days=2)
else:
    start_date_obj = today_date_obj - timedelta(days=1)

end_date_obj = start_date_obj + timedelta(days=1)

# Define the date strings
start_date_str = start_date_obj.strftime("%Y-%m-%d")
end_date_str = end_date_obj.strftime("%Y-%m-%d")

# Define the file name
data_date_file_str = start_date_obj.strftime("%Y_%m_%d")

# Extracting Tickers
df_500 = pd.read_csv(
    os.path.join(os.getenv("DATA_DIR", "../../data"), "daily", "sp500_components.csv")
)
df_600 = pd.read_csv(
    os.path.join(os.getenv("DATA_DIR", "../../data"), "daily", "sp600_components.csv")
)

df_comb = pd.concat([df_500.iloc[:, 0], df_600.iloc[:, 0]])

# --- Configuration ---
TICKERS = df_comb.tolist()
START_DATE = start_date_str
END_DATE = end_date_str
OUTPUT_FILE = os.path.join(
    os.getenv("DATA_DIR", "../../data"),
    "daily",
    f"{data_date_file_str}_daily_stock_data.csv",
)

print(f"Fetching daily data for {TICKERS}...")

# 1. Fetch data for all tickers.
wide_data = yf.download(TICKERS, start=START_DATE, end=END_DATE)

if wide_data.empty:
    print("Download failed, no data was returned. Exiting.")
    sys.exit(1)

# 2. Convert from wide to long format.
long_data = wide_data.stack(level=1).rename_axis(["Date", "Ticker"])

# 3. Turn the Date and Ticker index into regular columns.
final_df = long_data.reset_index()

# 4. Save the tidy DataFrame to a single CSV file.
final_df.to_csv(OUTPUT_FILE, index=False)

print(f"Created '{OUTPUT_FILE}'")
