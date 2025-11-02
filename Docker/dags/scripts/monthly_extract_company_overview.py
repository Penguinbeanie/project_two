import os
import time
from datetime import date
import pandas as pd
import yfinance as yf

# --- Paths & setup ---
DATA_DIR = os.getenv("DATA_DIR", "/opt/airflow/data")
DAILY_DIR = os.path.join(DATA_DIR, "daily")
MONTHLY_DIR = os.path.join(DATA_DIR, "monthly")

# ensure folders exist
os.makedirs(DAILY_DIR, exist_ok=True)
os.makedirs(MONTHLY_DIR, exist_ok=True)

today_date = date.today().strftime("%Y_%m_%d")
OUTPUT_FILE = os.path.join(MONTHLY_DIR, f"{today_date}_company_overview_data.csv")

sp500_path = os.path.join(DAILY_DIR, "sp500_components.csv")
sp600_path = os.path.join(DAILY_DIR, "sp600_components.csv")

# --- Inputs ---
if not os.path.exists(sp500_path):
    raise FileNotFoundError(f"SP500 file missing: {sp500_path}")
if not os.path.exists(sp600_path):
    raise FileNotFoundError(f"SP600 file missing: {sp600_path}")

df_500 = pd.read_csv(sp500_path)
df_600 = pd.read_csv(sp600_path)

# first column assumed tickers
tickers = pd.concat([df_500.iloc[:, 0], df_600.iloc[:, 0]], ignore_index=True)
tickers = tickers.dropna().astype(str).str.strip().str.upper().unique().tolist()

print(f"Fetching dimensional data for {len(tickers)} tickers...")
all_rows = []


def get_info_safe(ticker_symbol: str, retries: int = 3, backoff: float = 1.0):
    """Fetch yfinance info with small retries/backoff; supports both .info and .get_info()."""
    last_err = None
    for attempt in range(1, retries + 1):
        try:
            t = yf.Ticker(ticker_symbol)
            # yfinance 0.2+ recommends get_info(); fall back to .info for older versions
            info = getattr(t, "get_info", None)
            info = info() if callable(info) else t.info
            if isinstance(info, dict) and info:
                return info
            raise RuntimeError("Empty info dict")
        except Exception as e:
            last_err = e
            time.sleep(backoff * attempt)
    raise last_err


for i, sym in enumerate(tickers, start=1):
    try:
        print(f"[{i}/{len(tickers)}] {sym}")
        info = get_info_safe(sym)

        row = {
            # DimTicker
            "Symbol": info.get("symbol"),
            "CompanyName": info.get("longName") or info.get("shortName"),
            "Sector": info.get("sector"),
            "Industry": info.get("industry"),
            "HeadquartersCountry": info.get("country"),
            "CurrencyCode": info.get("currency"),
            "CompanySummary": info.get("longBusinessSummary"),
            "EmployeeCount": info.get("fullTimeEmployees"),
            "WebsiteURL": info.get("website"),
            # DimExchange
            "ExchangeCode": info.get("exchange"),
            "ExchangeTimezone": info.get("exchangeTimezoneName"),
        }
        all_rows.append(row)
    except Exception as e:
        print(f"  -> ERROR {sym}: {e}")

# --- Output ---
if all_rows:
    final_df = pd.DataFrame(all_rows)
    replace_exchange_names_dict = {
        "NYQ": "New York Stock Exchange",
        "NGM": "Nasdaq (US)",
        "NMS": "Nasdaq (US)",
        "NCM": "Nasdaq (US)",
        "ASE": "New York Stock Exchange",
    }
    final_df["ExchangeCode"].replace(replace_exchange_names_dict, inplace=True)
    final_df.to_csv(OUTPUT_FILE, index=False)
    print(f"Successfully created '{OUTPUT_FILE}' with {len(final_df)} rows.")
    try:
        print("Preview:")
        print(final_df.head().to_string(index=False))
    except Exception:
        pass
else:
    print("No data was fetched. Output file not created.")
