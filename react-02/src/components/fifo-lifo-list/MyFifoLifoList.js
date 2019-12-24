import React, { useState, useEffect } from 'react';
import { ThemeContext } from '../theme-context.js';
import LifoStackDisplay from './MyLifoStack.js';
import FifoQueueDisplay from './MyFifoQueue.js';
import { ListGenerator } from './fifo-lifo.js';
import { FifoQueue } from './fifo-queue.js';
import { LifoStack } from './lifo-stack.js';
import "./MyFifoLifoList.css";

const listGenerator = new ListGenerator();
const fifoQueue = new FifoQueue();
const lifoStack = new LifoStack();

const FifoLifoListDisplay = () => {
    let [nextAdd, setNextAdd] = useState(listGenerator.nextToAdd());
    let [nextFifoRemove, setNextFifoRemove] = useState(fifoQueue.nextToRemove());
    let [nextLifoRemove, setNextLifoRemove] = useState(lifoStack.nextToRemove());
    let [fifoRemoved, setFifoRemoved] = useState("");
    let [lifoRemoved, setLifoRemoved] = useState("");

    const theme = React.useContext(ThemeContext);

    const handlePutIn = () => {
        fifoQueue.add(nextAdd);
        lifoStack.add(nextAdd);
        listGenerator.remove(nextAdd);
        setNextAdd(nextAdd = listGenerator.nextToAdd());
        setNextFifoRemove(nextFifoRemove = fifoQueue.nextToRemove());
        setNextLifoRemove(nextLifoRemove = lifoStack.nextToRemove());
    }

    const handleTakeOut = () => {
        fifoQueue.remove(nextFifoRemove);
        lifoStack.remove(nextLifoRemove);
        listGenerator.add(nextFifoRemove);
        listGenerator.add(nextLifoRemove);
        setFifoRemoved(fifoRemoved = nextFifoRemove);
        setLifoRemoved(lifoRemoved = nextLifoRemove);
        setNextFifoRemove(nextFifoRemove = fifoQueue.nextToRemove());
        setNextLifoRemove(nextLifoRemove = lifoStack.nextToRemove());
    }

    return (
        <div className="fifolifo-wrapper" style={{ backgroundColor: theme.background, color: theme.color }}>
            <span className="fifolifo-main-header">I've Been Everywhere, Man, I've Been Everywhere. I've Been To...</span>
            <div className="fifolifo-next-item">
                Next Item To Put In Both Lists: <span className="fifolifo-important-text">{nextAdd}</span>
            </div>
            <div className="fifolifo-navbar">
                <input
                    type="submit"
                    value="Put In"
                    className="fifolifo-button"
                    onClick={() => handlePutIn()}
                />
                <input
                    type="submit"
                    value="Take Out"
                    className="fifolifo-button"
                    onClick={() => handleTakeOut()}
                />
            </div>
            <div className="fifolifo-display">
                <div className="fifo-wrapper">
                    <span className="fifolifo-header">FIFO Queue - First In First Out</span>
                    <div className="fifo-deleted-item">
                        Last Item Taken Out: <span className="fifolifo-important-text">{fifoRemoved}</span>
                    </div>
                    < FifoQueueDisplay
                        fifoQueue={fifoQueue}
                        nextFifoRemove={nextFifoRemove} />
                </div>
                <div className="lifo-wrapper">
                    <span className="fifolifo-header">LIFO Stack - Last In First Out</span>
                    <div className="lifo-deleted-item">
                        Last Item Taken Out: <span className="fifolifo-important-text">{lifoRemoved}</span>
                    </div>
                    < LifoStackDisplay
                        lifoStack={lifoStack}
                        nextLifoRemove={nextLifoRemove} />
                </div>
            </div>
        </div>
    )
}

export default FifoLifoListDisplay;