import invoice_sheet_functions


def invoice_number():
    while True:
        try:
            invoice_id = int(input("Please enter your invoice ID number: "))
        except ValueError:
            print("Not a valid number. Please re-enter.")
            continue
        else:
            return invoice_id


def invoice_generator(file):
    sheets = invoice_sheet_functions.sheet_reader(file)
    while True:
        try:
            invoice_ID = invoice_number()
            invoice = invoice_sheet_functions.invoice_to_dict(invoice_ID, sheets)
        except:
            print("Invoice not found.")
        else:
            return invoice
