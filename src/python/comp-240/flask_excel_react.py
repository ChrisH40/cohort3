from flask import Flask, jsonify
import sys
sys.path.append('/code/cohort3/src/python/comp-230/')
from invoice_sheet_functions import sheet_reader

app = Flask(__name__)

sht_data = sheet_reader('/code/cohort3/src/python/comp-230/invoice_data.xlsx')


@app.route('/')
def home():
    try:
        return jsonify(sheet_data)
    except:
        return jsonify({'message': 'Error. Please try again.'})


app.run(port=5000)
