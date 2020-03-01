from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import sys
sys.path.append('/code/cohort3/src/python/comp-230/')
from invoice_sheet_functions import sheet_reader

import datetime


app = Flask(__name__)
CORS(app, supports_credentials=True)

sheet_data = sheet_reader('/code/cohort3/src/python/comp-230/invoice_data.xlsx')


@app.route('/')
def home():
    try:
        return render_template('index.html'), 200
    except:
        return jsonify({'message': 'Error - please try again.'}), 404


@app.route('/raw')
def data_dump():
    try:
        return jsonify(sheet_data), 200
    except:
        return jsonify({'message': 'Error - please try again.'}), 404


@app.route('/loop')
def data_loop():
    try:
        return render_template('loop.html', data=sheet_data), 200
    except:
        return jsonify({'message': 'Error - please try again.'}), 404


@app.route('/all', methods=['POST','GET'])
def get_all():
    try:
        return jsonify(sheet_data), 200
    except:
        return jsonify({'message': 'Error - please try again.'}), 404


@app.route('/<string:sheet>', methods=['POST', 'GET'])
def get_sheet(sheet):
    try:
        for key, value in sheet_data.items():
            if sheet == key or sheet.lower() == key.lower():
                return jsonify(value), 200
        return jsonify({'message': 'Error - sheet not found.'}), 400
    except:
        return jsonify({'message': 'Error - please try again.'}), 404


@app.route('/<string:sheet>/<int:item>', methods=['POST','GET'])
def get_item(sheet, item):
    try:
        for key, value in sheet_data.items():
            if sheet == key or sheet.lower() == key.lower():
                x_sheet = value 
                for key, value in x_sheet.items():
                    if str(item) == str(key):
                        return jsonify(value), 200
        return jsonify({'message': 'Error - sheet or item not found.'}), 400
    except:
        return jsonify({'message': 'Error - please try again.'}), 404


@app.route('/<string:sheet>/add', methods=['POST'])
def add_item(sheet):
    try:
        request_data = request.get_json()

        if sheet not in sheet_data.keys():
            return jsonify({'message': 'Error - sheet not found.'}), 400    
 
        if sheet == 'Customers':
            if 'CUST_ID' not in request_data or 'F_NAME' not in request_data or 'L_NAME' not in request_data or 'APT_NUM' not in request_data or 'ST_NUM' not in request_data or 'ST_NAME' not in request_data or 'CITY' not in request_data or 'PROV' not in request_data or 'CTRY' not in request_data or 'P_CODE' not in request_data or 'PHONE' not in request_data or 'EMAIL' not in request_data:
                return jsonify({'message': 'Error - missing required key.'}), 400
            else:
                key = request_data['CUST_ID']
        elif sheet == 'Invoices':
            if 'INV_ID' not in request_data or 'CUST_ID' not in request_data or 'INV_DATE' not in request_data or 'INV_DESC' not in request_data:
                return jsonify({'message': 'Error - missing required key.'}), 400
            elif request_data['CUST_ID'] not in sheet_data['Customers']:
                return  jsonify({'message': 'Error - referenced CUST_ID does not exist.'}), 400
            else:
                key = request_data['INV_ID']
        elif sheet == 'Products':
            if 'PROD_ID' not in request_data or 'PROD_NAME' not in request_data or 'PROD_DESC' not in request_data or 'SKU' not in request_data or 'UNIT_PRICE' not in request_data:
                return jsonify({'message': 'Error - missing required key.'}), 400
            else:
                key = request_data['PROD_ID']
        elif sheet == 'Line Items':
            if 'LINE_ID' not in request_data or 'INV_ID' not in request_data or 'PROD_ID' not in request_data or 'QTY'not in request_data:
                return jsonify({'message': 'Error - missing required key.'}), 400
            elif request_data['INV_ID'] not in sheet_data['Invoices'] or request_data['PROD_ID'] not in sheet_data['Products']:
                return  jsonify({'message': 'Error - referenced INV_ID or PROD_ID does not exist.'}), 400
            else:
                key = request_data['LINE_ID']

        if key in sheet_data[sheet]:
            return jsonify({'message': f'Error - ID {key} already exists.'}), 400
        else:
            sheet_data[sheet][key] = request_data
            return jsonify({'message': f'Item {key} successfully added to {sheet}.'}), 200
         
    except:   
        return jsonify({'message': 'Error - please try again.'}), 404                


app.run(port=5000, debug=True)
