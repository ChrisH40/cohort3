import React, { useState, useEffect } from 'react';
// import ListNode from './MyListNode.js'; --- TBD if this is needed ---
import { LinkedList } from './linked-list';
import './MyLinkedList.css';

const linkedList = new LinkedList();

const LinkedListDisplay = () => {
    const [subject, setSubject] = useState("");
    const [amount, setAmount] = useState("");
    // const [current, setCurrent] = useState("");

    const handleInsert = (event) => {
        const newListNode = linkedList.insertListNodeHead(subject, amount);
        // currentNode(newListNode);
        setSubject("");
        setAmount("");
        event.preventDefault();
    }

    // const currentNode = (node) => {
    //     setCurrent(node);
    // }

    return (
        <div className="list-wrapper">
            <div className="create-node-display">
                <form onSubmit={handleInsert}>
                    <label className="create-node-text">Subject:</label>
                    <input
                        type="text"
                        name="nodeSubject"
                        placeholder="subj."
                        className="create-node-subject-input"
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)} />
                    <label className="create-listNode-text">Amount:</label>
                    <input
                        type="number"
                        name="nodeAmount"
                        placeholder="amt."
                        className="create-node-amount-input"
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)} />
                    <input
                        type="submit"
                        value="Create New Item"
                        className="list-button create-list-button" />
                </form>
            </div>
            <div className="list-navbar">
                <input
                    type="submit"
                    value="First Item"
                    className="list-button"
                    name="firstNode"
                // value={TBD}
                // onClick={TBD} 
                />
                <input
                    type="submit"
                    value="Previous Item"
                    className="list-button"
                    name="prevNode"
                // value={TBD}
                // onClick={TBD} 
                />
                <input
                    type="submit"
                    value="Next Item"
                    className="list-button"
                    name="nextNode"
                // value={TBD}
                // onClick={TBD} 
                />
                <input
                    type="submit"
                    value="Last Item"
                    className="list-button"
                    name="lastNode"
                // value={TBD}
                // onClick={TBD} 
                />
            </div>
            <div className="list-display">
                {linkedList.displayNode()} {/* This output will change */}
                {/* ListNodes go here (delete function?) */}
            </div>
        </div>
    )
}

export default LinkedListDisplay;