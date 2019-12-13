
// --- Subject to Change ---

import React, { useState, useEffect } from 'react';
import { LinkedList } from './linked-list';
import './MyLinkedList.css';

const linkedList = new LinkedList();

const LinkedListDisplay = () => {
    const [subject, setSubject] = useState("");
    const [amount, setAmount] = useState("");

    const handleInsert = (event) => {
        const newListNode = linkedList.insertListNodeHead(subject, amount);
        setSubject("");
        setAmount("");
        console.log(newListNode);
        event.preventDefault();
    }

    return (
        <div className="list-wrapper">
            <div className="create-listNode-display">
                <form onSubmit={handleInsert}>
                    <label className="create-listNode-text">Subject:</label>
                    <input
                        type="text"
                        name="nodeSubject"
                        placeholder="subj."
                        className="create-listNode-subject-input"
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)} />
                    <label className="create-listNode-text">Amount:</label>
                    <input
                        type="number"
                        name="nodeAmount"
                        placeholder="amt."
                        className="create-listNode-amount-input"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)} />
                    <input
                        type="submit"
                        value="Submit"
                        className="list-button create-listNode-button" />
                </form>
            </div>
        </div>
    )
}

export default LinkedListDisplay;