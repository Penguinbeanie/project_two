import pandas as pd
import requests
import io
import os


def extract_exchange_information():
    """
    Extracts the table of major stock exchanges from Wikipedia
    and saves it to a CSV file.
    """
    # URL of the Wikipedia page
    url = "https://en.wikipedia.org/wiki/List_of_major_stock_exchanges"

    # Set a user-agent header to mimic a browser
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }

    try:
        # Fetch the HTML content using requests
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Raise an exception for bad status codes

        # Use pandas.read_html to find the table with id="exchanges_table"
        tables = pd.read_html(
            io.StringIO(response.text), attrs={"id": "exchanges_table"}
        )

        if not tables:
            print("Could not find the table with id='exchanges_table'.")
            return

        exchange_table = tables[0]

        # The header is read as a MultiIndex, so we need to flatten it.
        new_columns = []
        for col_l1, col_l2 in exchange_table.columns:
            if col_l1 == col_l2 or "Unnamed" in col_l2:
                new_columns.append(col_l1)
            else:
                new_columns.append(f"{col_l1} ({col_l2})")

        exchange_table.columns = new_columns

        # Define the output CSV file name
        csv_file_name = os.path.join(
            os.getenv("DATA_DIR", "../../data"),
            "monthly",
            "wikipedia_exchange_information.csv",
        )

        # Save the DataFrame to a CSV file
        exchange_table.to_csv(csv_file_name, index=False)

        print(f"Successfully extracted exchange information to '{csv_file_name}'")

    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    extract_exchange_information()
