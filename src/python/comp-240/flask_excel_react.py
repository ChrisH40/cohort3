from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
import sys
sys.path.append('/code/cohort3/src/python/comp-230/')
from invoice_sheet_functions import sheet_reader
import datetime


app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False
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
        sheet_list = list()
        for key, value in sheet_data.items():
            if sheet == key or sheet.lower() == key.lower():
                x_sheet = value
                for key, value in x_sheet.items():
                    sheet_list.append(value)
                return jsonify(sheet_list), 200
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

        cust_keys = ['CUST_ID', 'F_NAME', 'L_NAME', 'APT_NUM', 'ST_NUM', 'ST_NAME', 'CITY', 'PROV', 'CTRY', 'P_CODE', 'PHONE', 'EMAIL']
        inv_keys = ['INV_ID', 'CUST_ID', 'INV_DATE', 'INV_DESC'] 
        prod_keys = ['PROD_ID', 'PROD_NAME', 'PROD_DESC', 'SKU', 'UNIT_PRICE']
        line_keys = ['LINE_ID', 'INV_ID', 'PROD_ID', 'QTY']  
 
        if sheet == 'Customers':
            if any(key not in request_data for key in cust_keys):
                return jsonify({'message': 'Error - missing required key or invalid key.'}), 400
            else:
                key = request_data['CUST_ID']
        elif sheet == 'Invoices':
            if any(key not in request_data for key in inv_keys):
                return jsonify({'message': 'Error - missing required key or invalid key.'}), 400
            if request_data['CUST_ID'] not in sheet_data['Customers']:
                return  jsonify({'message': 'Error - referenced CUST_ID does not exist.'}), 400
            else:
                key = request_data['INV_ID']
        elif sheet == 'Products':
            if any(key not in request_data for key in prod_keys):
                return jsonify({'message': 'Error - missing required key or invalid key.'}), 400
            else:
                key = request_data['PROD_ID']
        elif sheet == 'Line Items':
            if any(key not in request_data for key in line_keys):
                return jsonify({'message': 'Error - missing required key or invalid key.'}), 400
            elif request_data['INV_ID'] not in sheet_data['Invoices'] or request_data['PROD_ID'] not in sheet_data['Products']:
                return  jsonify({'message': 'Error - referenced INV_ID or PROD_ID does not exist.'}), 400
            else:
                key = request_data['LINE_ID']

        if key in sheet_data[sheet]:
            return jsonify({'message': f'Error - ID {key} already exists.'}), 400
        else:
            sheet_data[sheet][key] = request_data
            return jsonify({
                'message': f'Item {key} successfully added to {sheet}.', 'item': request_data}), 200
         
    except:   
        return jsonify({'message': 'Error - please try again.'}), 404     


@app.route('/<string:sheet>/<int:item>/delete', methods=['DELETE'])
def delete_item(sheet, item):
    try:
        for key, value in sheet_data.items():
            if sheet == key or sheet.lower() == key.lower():
                x_sheet = value 
                for key, value in x_sheet.items():
                    if str(item) == str(key):
                        del x_sheet[item]
                        return jsonify({'message': 'Item successfully deleted!'}), 200
        return jsonify({'message': 'Error - sheet or item not found.'}), 400
    except:
        return jsonify({'message': 'Error - please try again.'}), 404           


app.run(port=5000, debug=True)
