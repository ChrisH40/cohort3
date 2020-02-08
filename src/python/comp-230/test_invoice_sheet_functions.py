import pytest
import invoice_sheet_functions
from openpyxl import load_workbook
import datetime


def test_sheet_reader_sheet_to_dict():
    test_workbook = invoice_sheet_functions.sheet_reader(
        '/code/cohort3/src/python/comp-230/test_invoice_data.xlsx')
    assert test_workbook[0] == {101: {'CUST_ID': 101, 'F_NAME': 'Test1', 'L_NAME': 'McTesterson', 'APT_NUM': 3, 'ST_NUM': 14, 'ST_NAME': 'Test Ave', 'CITY': 'Testton', 'PROV': 'Test Prov', 'CTRY': 'Testada', 'P_CODE': 'T3ST3R', 'PHONE': 1000000123, 'EMAIL': 'test1@test.com'}, 102: {
        'CUST_ID': 102, 'F_NAME': 'Test2', 'L_NAME': 'McTest2erson', 'APT_NUM': None, 'ST_NUM': 3, 'ST_NAME': 'Test Street', 'CITY': 'Testville', 'PROV': 'Test2 Prov', 'CTRY': 'Testico', 'P_CODE': 'T3ST5S', 'PHONE': 1000000234, 'EMAIL': 'test2@test2.com'}}
    assert test_workbook[1] == {101: {'INV_ID': 101, 'CUST_ID': 101, 'INV_DATE': datetime.datetime(2019, 1, 1, 0, 0), 'INV_DESC': 'Some test tested some stuff'}, 102: {
        'INV_ID': 102, 'CUST_ID': 102, 'INV_DATE': datetime.datetime(2019, 2, 1, 0, 0), 'INV_DESC': 'Some test tested some stuff'}}
    assert test_workbook[2] == {101: {'PROD_ID': 101, 'PROD_NAME': 'Test Item 1', 'PROD_DESC': 'Test Item 1 description', 'SKU': 1000000001, 'UNIT_PRICE': 1.99}, 102: {
        'PROD_ID': 102, 'PROD_NAME': 'Test Item 2', 'PROD_DESC': 'Test Item 2 description', 'SKU': 1000000002, 'UNIT_PRICE': 199.99}}
    assert test_workbook[3] == {101: {'INV_ID': 101, 'PROD_ID': 102, 'QTY': 1}, 102: {
        'INV_ID': 102, 'PROD_ID': 102, 'QTY': 10}}