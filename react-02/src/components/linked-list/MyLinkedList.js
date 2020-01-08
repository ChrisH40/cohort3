import React, { useState } from 'react';
import { AppContext } from '../app-context.js';
import { LinkedList } from './linked-list';
import './MyLinkedList.css';

const linkedList = new LinkedList();

const LinkedListDisplay = () => {
    const [subject, setSubject] = useState("");
    const [amount, setAmount] = useState("");
    let [current, setCurrent] = useState("");

    const handleInsert = (event) => {
        if (subject === "" || amount === "") {
            alert("Please enter a subject and/or amount!");
            event.preventDefault();
        }
        else {
            setCurrent(current = linkedList.insertListNode(subject, amount));
            setSubject("");
            setAmount("");
            event.preventDefault();
        }
    }

    const displayNodes = (list) => {
        if (!list.head) {
            return null;
        }
        else {
            let currentNode = list.head;
            let displayedNodes = [];
            let counter = 1;
            while (currentNode) {
                displayedNodes.push(
                    < ListCard
                        node={currentNode}
                        key={counter}
                    />
                )
                counter++;
                currentNode = currentNode.next;
            }
            return displayedNodes;
        }
    }

    const ListCard = (props) => (
        <div className={`list-card ` + ((props.node === current) ? "active-list-card" : null)}>
            <span className="list-card-text">Subject: {props.node.subject}</span>
            <span className="list-card-text">Amount: {props.node.amount}</span>
        </div>
    )

    return (
        <AppContext.Consumer>
            {({ state, theme }) => (
                <div className="list-wrapper" style={{ backgroundColor: theme[state.themeValue].background, color: theme[state.themeValue].color }}>
                    <div className="create-node-display">
                        <div className="list-header">
                            CREATE ITEM
                </div>
                        <form onSubmit={(event) => handleInsert(event)}>
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
                    <div className="list-info">
                        <div className="list-current-show">
                            Current Item: {(linkedList.current) ? linkedList.current.show() : null}
                        </div>
                        <div className="list-total-amounts">
                            Total Item Amounts: {linkedList.totalAmounts()}
                        </div>
                    </div>
                    <div className="list-navbar">
                        <input
                            type="submit"
                            value="First Item"
                            className="list-button"
                            onClick={() => setCurrent(current = linkedList.firstNode())}
                        />
                        <input
                            type="submit"
                            value="Previous Item"
                            className="list-button"
                            onClick={() => setCurrent(current = linkedList.prevNode(linkedList.current))}
                        />
                        <input
                            type="submit"
                            value="Delete Current Item"
                            className="list-button delete-button"
                            onClick={() => setCurrent(current = linkedList.deleteListNode(linkedList.current))}
                        />
                        <input
                            type="submit"
                            value="Next Item"
                            className="list-button"
                            onClick={() => setCurrent(current = linkedList.nextNode(linkedList.current))}
                        />
                        <input
                            type="submit"
                            value="Last Item"
                            className="list-button"
                            onClick={() => setCurrent(current = linkedList.lastNode())}
                        />
                    </div>
                    <div className="list-display">
                        {displayNodes(linkedList)}
                    </div>
                </div>
            )}
        </AppContext.Consumer>
    )
}

export default LinkedListDisplay;