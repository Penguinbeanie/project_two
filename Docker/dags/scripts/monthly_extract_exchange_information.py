import pandas as pd
import requests
import io
import os
from datetime import date


def extract_exchange_information():
    """
    Extracts the table of major stock exchanges from Wikipedia
    and saves it to a dated CSV file inside /opt/airflow/data/monthly.
    """
    url = "https://en.wikipedia.org/wiki/List_of_major_stock_exchanges"
    headers = {
        "User-Agent": (
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
            "AppleWebKit/537.36 (KHTML, like Gecko) "
            "Chrome/91.0.4472.124 Safari/537.36"
        )
    }

    # --- Paths & setup ---
    DATA_DIR = os.getenv("DATA_DIR", "/opt/airflow/data")
    DAILY_DIR = os.path.join(DATA_DIR, "daily")
    MONTHLY_DIR = os.path.join(DATA_DIR, "monthly")

    os.makedirs(DAILY_DIR, exist_ok=True)
    os.makedirs(MONTHLY_DIR, exist_ok=True)

    today_date = date.today().strftime("%Y_%m_%d")
    output_path = os.path.join(MONTHLY_DIR, f"{today_date}_wikipedia_exchange_information.csv")

    try:
        response = requests.get(url, headers=headers)
        response.raise_for_status()

        tables = pd.read_html(io.StringIO(response.text), attrs={"id": "exchanges_table"})

        if not tables:
            print("Could not find the table with id='exchanges_table'.")
            return

        exchange_table = tables[0]

        # Flatten MultiIndex columns if necessary
        if isinstance(exchange_table.columns, pd.MultiIndex):
            new_columns = []
            for col_l1, col_l2 in exchange_table.columns:
                if col_l1 == col_l2 or "Unnamed" in col_l2:
                    new_columns.append(col_l1)
                else:
                    new_columns.append(f"{col_l1} ({col_l2})")
            exchange_table.columns = new_columns

        # --- Save output ---
        exchange_table.to_csv(output_path, index=False)
        print(f"✅ Successfully saved exchange information to '{output_path}'")

    except Exception as e:
        print(f"❌ An error occurred: {e}")


if __name__ == "__main__":
    extract_exchange_information()