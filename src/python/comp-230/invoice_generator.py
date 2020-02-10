import invoice_sheet_functions

def invoice_generator(file):
    sheets = invoice_sheet_functions.sheet_reader(file)
    # customers = sheets[0]
    invoices = sheets[1]
    # products = sheets[2]
    # line_items = sheets[3]
    return invoices[101]

