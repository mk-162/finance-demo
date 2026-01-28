import pandas as pd
import sys

def save_sheets_as_csv(file_path):
    try:
        xl = pd.ExcelFile(file_path)
        for sheet_name in xl.sheet_names:
            print(f"Saving sheet: {sheet_name}")
            df = xl.parse(sheet_name)
            safe_name = sheet_name.replace(" ", "_")
            df.to_csv(f"{safe_name}.csv", index=False)
    except Exception as e:
        print(f"Error processing Excel file: {e}")
        sys.exit(1)

if __name__ == "__main__":
    save_sheets_as_csv(r'c:\AI_Project\GTSE\Finance Demo\Ecommerce_Budget_Tracker.xlsx')
