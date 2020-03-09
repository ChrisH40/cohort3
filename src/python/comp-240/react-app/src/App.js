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

  const itemDecon = (item) => {
    let items = Object.keys(item);
    return items.map(key => {
      let value = item[key];
      return (
        <td key={key}>{value}</td>
      )
    });
  };

  const displayHeader = (data) => {
    if (data.length > 0) {
      let header = Object.keys(data[0])
      return header.map((key, i) => {
        return <th key={i}>{key}</th>
      })
    }
    else return null;
  };

  const displaySheet = (data) => {
    if (data.length > 0) {
      return data.map((item, i) => {
        return (
          <tr key={i}>
            {itemDecon(item)}
          </tr>
        )
      })
    };
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
};

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
};


