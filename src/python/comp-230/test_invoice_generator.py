import pytest
import invoice_generator
from openpyxl import load_workbook
import datetime


def test_invoice_generator():
    assert invoice_generator.invoice_generator(
        '/code/cohort3/src/python/comp-230/test_invoice_data.xlsx') == {'INV_ID': 101, 'CUST_ID': 101, 'INV_DATE': datetime.datetime(2019, 1, 1, 0, 0), 'INV_DESC': 'Some test tested some stuff'}
