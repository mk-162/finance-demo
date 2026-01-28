from openpyxl import load_workbook

def check_cells(file_path):
    wb = load_workbook(file_path, data_only=True)
    
    print("--- Assumptions Sheet ---")
    ws_asm = wb['Assumptions']
    # C9 is Organic Growth for GTSE.co.uk
    print(f"Cell C9 (Organic Growth GTSE): {ws_asm['C9'].value}")
    print(f"Cell C11 (Paid Growth GTSE): {ws_asm['C11'].value}")
    print(f"Cell C32 (CPC Trend GTSE): {ws_asm['C32'].value}")
    
    print("\n--- GTSE.co.uk Sheet ---")
    ws_gtse = wb['GTSE.co.uk']
    # C9 is Organic Growth
    print(f"Cell C9 (Organic Growth): {ws_gtse['C9'].value}")
    print(f"Cell C11 (Paid Growth): {ws_gtse['C11'].value}")

if __name__ == "__main__":
    check_cells(r'c:\AI_Project\GTSE\Finance Demo\Ecommerce_Budget_Tracker.xlsx')
