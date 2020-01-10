import React, { useState } from 'react';
import { AppContext } from '../app-context.js';
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
    const context = React.useContext(AppContext);

    let [nextAdd, setNextAdd] = useState(listGenerator.nextToAdd());
    let [nextFifoRemove, setNextFifoRemove] = useState(fifoQueue.nextToRemove());
    let [nextLifoRemove, setNextLifoRemove] = useState(lifoStack.nextToRemove());

    const handlePutIn = () => {
        fifoQueue.add(nextAdd);
        lifoStack.add(nextAdd);
        listGenerator.removeMasterList(nextAdd);
        setNextAdd(nextAdd = listGenerator.nextToAdd());
        setNextFifoRemove(nextFifoRemove = fifoQueue.nextToRemove());
        setNextLifoRemove(nextLifoRemove = lifoStack.nextToRemove());
    }

    const handleTakeOut = () => {
        fifoQueue.remove(nextFifoRemove);
        lifoStack.remove(nextLifoRemove);
        listGenerator.addMasterList(nextFifoRemove);
        listGenerator.addMasterList(nextLifoRemove);
        context.handleStateChange([{ state: "lastFifoRemoved", newState: nextFifoRemove }, { state: "lastLifoRemoved", newState: nextLifoRemove }]);
        setNextFifoRemove(nextFifoRemove = fifoQueue.nextToRemove());
        setNextLifoRemove(nextLifoRemove = lifoStack.nextToRemove());
    }

    return (
        <div className="fifolifo-wrapper" style={{ backgroundColor: context.theme[context.state.themeValue].background, color: context.theme[context.state.themeValue].color }}>
            <span className="fifolifo-main-header">I've Been Everywhere, Man, I've Been Everywhere. I've Been To...</span>
            <div className="fifolifo-next-item">
                Next Item To Put In Both Lists:   <span className="fifolifo-next-text">{nextAdd}</span>
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
                    <span className="fifolifo-header">First In First Out (FIFO) Queue </span>
                    <div className="fifo-deleted-item">
                        Last Item Taken Out: <span className="fifolifo-removed-text">{context.state.lastFifoRemoved}</span>
                    </div>
                    < FifoQueueDisplay
                        fifoQueue={fifoQueue}
                        nextFifoRemove={nextFifoRemove} />
                </div>
                <div className="lifo-wrapper">
                    <span className="fifolifo-header">Last In First Out (LIFO) Stack </span>
                    <div className="lifo-deleted-item">
                        Last Item Taken Out:   <span className="fifolifo-removed-text">{context.state.lastLifoRemoved}</span>
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