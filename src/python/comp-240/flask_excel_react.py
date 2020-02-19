from flask import Flask, jsonify, render_template
import sys
sys.path.append('/code/cohort3/src/python/comp-230/')
from invoice_sheet_functions import sheet_reader

app = Flask(__name__)

sheet_data = sheet_reader(
    '/code/cohort3/src/python/comp-230/invoice_data.xlsx')


@app.route('/')
def home():
    try:
        return jsonify({'message': 'Use url extension raw or loop to display data.'})
    except:
        return jsonify({'message': 'Error. Please try again.'})


@app.route('/raw')
def data_dump():
    try:
        return jsonify(sheet_data)
    except:
        return jsonify({'message': 'Error. Please try again.'})


@app.route('/loop')
def data_loop():
    try:
        return render_template('index.html', data=sheet_data)
    except:
        return jsonify({'message': 'Error. Please try again.'})


app.run(port=5000, debug=True)
