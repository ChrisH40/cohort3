from openpyxl import load_workbook


def sheet_reader(file):
    workbook = load_workbook(file)
    worksheets = workbook.sheetnames
    sheets = dict()
    for worksheet in worksheets:
        read_worksheet = workbook[worksheet]
        sheets[worksheet] = sheet_to_dict(read_worksheet)
    return sheets


def sheet_to_dict(sheet):
    headers = sheet[1]
    sheet_dict = dict()
    for row in sheet:
        if row != headers:
            row_dict = dict()
            index = 0
            for cell in row:
                if headers[index].value != None:
                    row_dict[headers[index].value] = cell.value
                    index += 1
            sheet_dict[row[0].value] = row_dict
    return sheet_dict


def invoice_to_dict(inv, sheets):
    customers = sheets['Customers']
    invoices = sheets['Invoices']
    products = sheets['Products']
    line_items = sheets['Line Items']
    invoice = dict()
    invoice['invoice'] = invoices[inv]
    invoice['customer'] = customers[invoices[inv]['CUST_ID']]
    item_list = []
    product_list = []
    for key, value in line_items.items():
        if inv == value['INV_ID']:
            item_list = dict_lists(item_list, value)
            prod_ID = value['PROD_ID']
            product = products[prod_ID]
            product_list = dict_lists(product_list, product)
            invoice['line_items'] = item_list
            invoice['products'] = product_list
    return invoice


def dict_lists(xlist, value):
    xlist.append(value)
    return xlist
