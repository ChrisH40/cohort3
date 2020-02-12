import pytest
import invoice_sheet_functions
from openpyxl import load_workbook
import datetime


def test_sheet_reader_sheet_to_dict():
    test_workbook = invoice_sheet_functions.sheet_reader(
        '/code/cohort3/src/python/comp-230/test_invoice_data.xlsx')
    assert test_workbook['Customers'] == {101: {'CUST_ID': 101, 'F_NAME': 'Test1', 'L_NAME': 'McTesterson', 'APT_NUM': 3, 'ST_NUM': 14, 'ST_NAME': 'Test Ave', 'CITY': 'Testton', 'PROV': 'Test Prov', 'CTRY': 'Testada', 'P_CODE': 'T3ST3R', 'PHONE': 1000000123, 'EMAIL': 'test1@test.com'}, 102: {
        'CUST_ID': 102, 'F_NAME': 'Test2', 'L_NAME': 'McTest2erson', 'APT_NUM': None, 'ST_NUM': 3, 'ST_NAME': 'Test Street', 'CITY': 'Testville', 'PROV': 'Test2 Prov', 'CTRY': 'Testico', 'P_CODE': 'T3ST5S', 'PHONE': 1000000234, 'EMAIL': 'test2@test2.com'}}
    assert test_workbook['Invoices'] == {1101: {'INV_ID': 1101, 'CUST_ID': 101, 'INV_DATE': datetime.datetime(2019, 1, 1, 0, 0), 'INV_DESC': 'Some test tested some stuff'}, 1102: {
        'INV_ID': 1102, 'CUST_ID': 102, 'INV_DATE': datetime.datetime(2019, 2, 1, 0, 0), 'INV_DESC': 'Some test tested some stuff'}}
    assert test_workbook['Products'] == {101: {'PROD_ID': 101, 'PROD_NAME': 'Test Item 1', 'PROD_DESC': 'Test Item 1 description', 'SKU': 1000000001, 'UNIT_PRICE': 1.99}, 102: {
        'PROD_ID': 102, 'PROD_NAME': 'Test Item 2', 'PROD_DESC': 'Test Item 2 description', 'SKU': 1000000002, 'UNIT_PRICE': 199.99}}
    assert test_workbook['Line Items'] == {101: {'LINE_ID': 101, 'INV_ID': 1101, 'PROD_ID': 101, 'QTY': 2}, 102: {'LINE_ID': 102, 'INV_ID': 1101, 'PROD_ID': 102, 'QTY': 1}, 103: {
        'LINE_ID': 103, 'INV_ID': 1102, 'PROD_ID': 101, 'QTY': 4}, 104: {'LINE_ID': 104, 'INV_ID': 1102, 'PROD_ID': 102, 'QTY': 10}}


def test_invoice_to_dict():
    test_workbook = invoice_sheet_functions.sheet_reader(
        '/code/cohort3/src/python/comp-230/test_invoice_data.xlsx')
    test_invoice_dict = invoice_sheet_functions.invoice_to_dict(1101, test_workbook)
    assert test_invoice_dict['invoice'] == {'INV_ID': 1101, 'CUST_ID': 101, 'INV_DATE': datetime.datetime(
        2019, 1, 1, 0, 0), 'INV_DESC': 'Some test tested some stuff'}
    assert test_invoice_dict['customer'] == {'CUST_ID': 101, 'F_NAME': 'Test1', 'L_NAME': 'McTesterson', 'APT_NUM': 3, 'ST_NUM': 14,
        'ST_NAME': 'Test Ave', 'CITY': 'Testton', 'PROV': 'Test Prov', 'CTRY': 'Testada', 'P_CODE': 'T3ST3R', 'PHONE': 1000000123, 'EMAIL': 'test1@test.com'}
    assert test_invoice_dict['products'] == [{'product': 'Test Item 1', 'desc': 'Test Item 1 description', 'cost': 1.99, 'quantity': 2}, {
        'product': 'Test Item 2', 'desc': 'Test Item 2 description', 'cost': 199.99, 'quantity': 1}]
    test_invoice_dict = invoice_sheet_functions.invoice_to_dict(1102, test_workbook)
    assert test_invoice_dict == {'invoice': {'INV_ID': 1102, 'CUST_ID': 102, 'INV_DATE': datetime.datetime(2019, 2, 1, 0, 0), 'INV_DESC': 'Some test tested some stuff'}, 
        'customer': {'CUST_ID': 102, 'F_NAME': 'Test2', 'L_NAME': 'McTest2erson', 'APT_NUM': None, 'ST_NUM': 3, 'ST_NAME': 'Test Street', 'CITY': 'Testville', 'PROV': 'Test2 Prov', 
        'CTRY': 'Testico', 'P_CODE': 'T3ST5S', 'PHONE': 1000000234, 'EMAIL': 'test2@test2.com'}, 'products': [{'product': 'Test Item 1', 'desc': 'Test Item 1 description', 'cost': 1.99, 'quantity': 4}, 
        {'product': 'Test Item 2', 'desc': 'Test Item 2 description', 'cost': 199.99, 'quantity': 10}]}

