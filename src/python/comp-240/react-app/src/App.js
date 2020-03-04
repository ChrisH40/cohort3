import React, { useState, useEffect } from 'react';
import './App.css';

const App = () => {

  const [sheetData, setSheetData] = useState([]);
  const [sheetSubmit, setSheetSubmit] = useState("");
  const [sheet, setSheet] = useState("Customers");

  useEffect(() => {
    let fetched = false;

    const fetchData = async () => {
      const data = await postData(url + sheet);
      if (!fetched) setSheetData(data);
    };

    fetchData();
    return () => { fetched = true; }
  }, [sheet]);


  const handleSubmit = (event) => {
    if (sheetSubmit === "Customers"
      || sheetSubmit === "Invoices"
      || sheetSubmit === "Products"
      || sheetSubmit === "Line Items") {
      setSheet(sheetSubmit);
      setSheetSubmit("");
    }
    else {
      alert("Please enter 'Customers', 'Invoices', 'Products' or 'Line Items'.");
      setSheetSubmit("");
    }
    event.preventDefault();
  };

  const displayHeader = (data) => {
    if (data.length > 0) {
      let header = Object.keys(data[0])
      return header.map((key, i) => {
        return <th key={i}>{key}</th>
      })
    }
    else return null;
  }

  // Re-factor to eliminate if/else statements (map with in a map?)...
  const displaySheet = (data) => {
    if (data.length > 0) {
      if (sheet === 'Customers') {
        return data.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item['CUST_ID']}</td>
              <td>{item['F_NAME']}</td>
              <td>{item['L_NAME']}</td>
              <td>{item['APT_NUM']}</td>
              <td>{item['ST_NUM']}</td>
              <td>{item['ST_NAME']}</td>
              <td>{item['CITY']}</td>
              <td>{item['PROV']}</td>
              <td>{item['CTRY']}</td>
              <td>{item['P_CODE']}</td>
              <td>{item['PHONE']}</td>
              <td>{item['EMAIL']}</td>
            </tr>
          )
        })
      }
      else if (sheet === 'Invoices') {
        return data.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item['INV_ID']}</td>
              <td>{item['CUST_ID']}</td>
              <td>{item['INV_DATE']}</td>
              <td>{item['INV_DESC']}</td>
            </tr>
          )
        })
      }
      else if (sheet === 'Products') {
        return data.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item['PROD_ID']}</td>
              <td>{item['PROD_NAME']}</td>
              <td>{item['PROD_DESC']}</td>
              <td>{item['SKU']}</td>
              <td>{item['UNIT_PRICE']}</td>
            </tr>
          )
        })
      }
      else if (sheet === 'Line Items') {
        return data.map((item, i) => {
          return (
            <tr key={i}>
              <td>{item['LINE_ID']}</td>
              <td>{item['INV_ID']}</td>
              <td>{item['PROD_ID']}</td>
              <td>{item['QTY']}</td>
            </tr>
          )
        })
      }
    }
    else return (
      <tr key={1}>
        <td>Please Activate Server...</td>
      </tr>
    )
  };

  return (
    <div className="App">
      <header className="App-header">
        <form onSubmit={(event) => handleSubmit(event)} className="sheet-form">
          <label className="sheet-text">Sheet Name:</label>
          <input
            type="text"
            name="sheet"
            placeholder="sheet"
            className="sheet-input"
            value={sheetSubmit}
            onChange={(event) => setSheetSubmit(event.target.value)} />
          <input
            type="submit"
            value="Submit"
            className="sheet-button"
          />
        </form>
        <div className="sheet-display">
          <table>
            <thead>
              <tr className="table-header" >{displayHeader(sheetData)}</tr>
            </thead>
            <tbody>
              {displaySheet(sheetData)}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;

const url = 'http://localhost:5000/';

const postData = async (url = '', data = {}) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json'
    },
    redirect: 'follow',
    referrer: 'no-referrer',
    body: JSON.stringify(data)
  });
  const json = await response.json();
  json.status = response.status;
  json.statusText = response.statusText;
  return json;
}


