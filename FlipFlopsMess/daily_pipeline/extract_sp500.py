import pandas as pd
import requests
import io


def extract_sp500_components():
    """
    Extracts the S&P 500 component stocks table from Wikipedia
    and saves it to a CSV file.
    """
    # URL of the Wikipedia page
    url = "https://en.wikipedia.org/wiki/List_of_S%26P_500_companies"

    # Set a user-agent header to mimic a browser
    headers = {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"
    }

    try:
        # Fetch the HTML content using requests
        response = requests.get(url, headers=headers)
        response.raise_for_status()  # Raise an exception for bad status codes

        # Use pandas.read_html to find the table with id="constituents"
        tables = pd.read_html(
            io.StringIO(response.text), attrs={"id": "constituents"}, flavor="lxml"
        )

        if not tables:
            print("Could not find the table with id='constituents'.")
            return

        sp500_table = tables[0]

        sp500_table["Symbol"] = sp500_table["Symbol"].str.replace(".", "-", regex=False)

        # Define the output CSV file name
        csv_file_name = "sp500_components.csv"

        # Save the DataFrame to a CSV file
        sp500_table.to_csv(csv_file_name, index=False)

        print(f"Successfully extracted S&P 500 components to '{csv_file_name}'")

    except Exception as e:
        print(f"An error occurred: {e}")


if __name__ == "__main__":
    extract_sp500_components()
