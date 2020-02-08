from openpyxl import load_workbook

def sheet_reader(file):
    workbook = load_workbook(file)
    worksheets = workbook.sheetnames
    index = 0
    for worksheet in workbook.sheetnames:
        read_worksheet = workbook[worksheet]
        worksheets[index] = sheet_to_dict(read_worksheet)
        index += 1
    return worksheets

def sheet_to_dict(sheet):
    headers = sheet[1]
    sheet_dict = dict()
    for row in sheet:
        if row != headers:
            row_dict = dict()
            index = 0
            for cell in row:
                row_dict[headers[index].value] = cell.value
                index += 1
            sheet_dict[row[0].value] = row_dict
    return sheet_dict
