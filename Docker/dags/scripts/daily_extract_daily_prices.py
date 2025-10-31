import os
import sys
from datetime import date, timedelta

import pandas as pd
import yfinance as yf

# --- Paths ---
DATA_DIR = os.getenv("DATA_DIR", "/opt/airflow/data")
DAILY_DIR = os.path.join(DATA_DIR, "daily")
os.makedirs(DAILY_DIR, exist_ok=True)

sp500_path = os.path.join(DAILY_DIR, "sp500_components.csv")
sp600_path = os.path.join(DAILY_DIR, "sp600_components.csv")

if not os.path.exists(sp500_path):
    raise FileNotFoundError(f"SP500 file missing: {sp500_path}")
if not os.path.exists(sp600_path):
    raise FileNotFoundError(f"SP600 file missing: {sp600_path}")

# --- Dates ---
today = date.today()
yest = today - timedelta(days=1)
START_DATE = yest.strftime("%Y-%m-%d")
END_DATE = today.strftime("%Y-%m-%d")
OUTFILE = os.path.join(DAILY_DIR, f"{today.strftime('%Y_%m_%d')}_daily_stock_data.csv")

# --- Tickers ---
df_500 = pd.read_csv(sp500_path)
df_600 = pd.read_csv(sp600_path)
tickers = (
    pd.concat([df_500.iloc[:, 0], df_600.iloc[:, 0]], ignore_index=True)
    .dropna()
    .astype(str).str.strip().str.upper()
    .unique().tolist()
)

print(f"Fetching daily prices for {len(tickers)} tickers from {START_DATE} to {END_DATE}...")

# --- Download ---
wide_data = yf.download(
    tickers,
    start=START_DATE,
    end=END_DATE,
    group_by="ticker",
    threads=True,
    auto_adjust=False,
)

if wide_data is None or (hasattr(wide_data, "empty") and wide_data.empty):
    print("No data returned from yfinance. Exiting.")
    sys.exit(1)

# --- Normalize to LONG format ---
# Multiple tickers -> MultiIndex columns; single ticker -> plain columns
if isinstance(wide_data.columns, pd.MultiIndex):
    long_data = wide_data.stack(level=1).rename_axis(["Date", "Ticker"])
    final_df = long_data.reset_index()
else:
    # single ticker case
    final_df = wide_data.reset_index()
    final_df.insert(1, "Ticker", tickers[0])  # add ticker column

# unify column names & order
final_df = final_df.rename(columns={"Adj Close": "AdjClose"})
required_cols = ["Date", "Ticker", "Open", "High", "Low", "Close", "AdjClose", "Volume"]
missing = [c for c in required_cols if c not in final_df.columns]
for c in missing:  # if AdjClose/Volume missing from provider, create empty
    final_df[c] = pd.NA
final_df = final_df[required_cols]

# --- Save ---
final_df.to_csv(OUTFILE, index=False)
print(f"Saved {OUTFILE} with {len(final_df)} rows.")
