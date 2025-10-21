import yfinance as yf
import pandas as pd
from datetime import date

# Extracting current date
today_date = date.today().strftime("%Y_%m_%d")

# Extracting Tickers
df_500 = pd.read_csv("../../data/daily/sp500_components.csv")
df_600 = pd.read_csv("../../data/daily/sp600_components.csv")

df_comb = pd.concat([df_500.iloc[:, 0], df_600.iloc[:, 0]])


# --- Configuration ---
TICKERS = df_comb.tolist()
OUTPUT_FILE = f"../../data/monthly/{today_date}_company_overview_data.csv"

# This list will hold the dictionary for each ticker's dimensions
all_dimensions_data = []

print(f"Fetching dimensional data for {len(TICKERS)} tickers...")

# 1. Loop through each ticker symbol to make an individual API request
n = 0
for ticker_symbol in TICKERS:
    try:
        n = n + 1
        print(f"Processing {ticker_symbol} [{n}]...")
        ticker = yf.Ticker(ticker_symbol)

        # The .info attribute contains all the required dimensional data
        info = ticker.info

        # 2. Extract data for DimTicker and DimExchange from the info dictionary
        ticker_data = {
            # DimTicker Attributes
            "Symbol": info.get("symbol"),
            "CompanyName": info.get("longName"),
            "Sector": info.get("sector"),
            "Industry": info.get("industry"),
            "HeadquartersCountry": info.get("country"),
            "CurrencyCode": info.get("currency"),
            "CompanySummary": info.get("longBusinessSummary"),
            "EmployeeCount": info.get("fullTimeEmployees"),
            "WebsiteURL": info.get("website"),
            # DimExchange Attributes
            "ExchangeCode": info.get("exchange"),
            "ExchangeTimezone": info.get("exchangeTimezoneName"),
        }

        all_dimensions_data.append(ticker_data)

    except Exception as e:
        # Handle cases where a ticker might fail (e.g., delisted, invalid)
        print(f"  -> ERROR: Could not fetch data for {ticker_symbol}. Reason: {e}")

# 3. Convert the list of dictionaries into a pandas DataFrame
if all_dimensions_data:
    final_df = pd.DataFrame(all_dimensions_data)

    # 4. Save the DataFrame to a single CSV file
    final_df.to_csv(OUTPUT_FILE, index=False)
    print(f"\n✅ Successfully created '{OUTPUT_FILE}' with {len(final_df)} rows.")
    print("The first few rows of the output file look like this:")
    print(final_df.head())
else:
    print("\n❌ No data was fetched. Output file not created.")
