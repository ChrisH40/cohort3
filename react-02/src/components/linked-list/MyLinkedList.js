
// --- Subject to Change ---

import React, { useState, useEffect } from 'react';
import { LinkedList } from './linked-list';
import './MyLinkedList.css';

const LinkedListDisplay = () => {
    let [subject, setSubject] = useState("");
    let [amount, setAmount] = useState("");

    const handleInsert = (event) => {
        console.log("insert");
        console.log(subject, amount);
        setSubject = ("");
        setAmount = ("");
        event.preventDefault();
    } 

    return (
        // change ALL classNames for future CSS
        <div className="create-account-display"> 
            <form onSubmit={handleInsert}>
                <label className="create-account-text">Subject:</label>
                <input
                    type="text"
                    name="acctName"
                    placeholder="subj."
                    className="create-account-name-input"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)} />
                <label className="create-account-text">Amount:</label>
                <input
                    type="number"
                    name="acctBalance"
                    placeholder="amt."
                    className="create-account-balance-input"
                    value={amount}
                    onChange={(event) => setAmount(event.target.value)} />
                <input
                    type="submit"
                    value="Submit"
                    className="account-button create-account-button" />
            </form>
        </div>
    )
}

export default LinkedListDisplay;