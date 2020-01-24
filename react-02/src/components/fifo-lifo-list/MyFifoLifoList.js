import React, { useState } from 'react';
import { AppContext } from '../app-context.js';
import LifoStackDisplay from './MyLifoStack.js';
import FifoQueueDisplay from './MyFifoQueue.js';
import "./MyFifoLifoList.css";

const FifoLifoListDisplay = () => {
    const context = React.useContext(AppContext);

    let [nextAdd, setNextAdd] = useState(context.listGenerator.nextToAdd());
    let [nextFifoRemove, setNextFifoRemove] = useState(context.fifoQueue.nextToRemove());
    let [nextLifoRemove, setNextLifoRemove] = useState(context.lifoStack.nextToRemove());

    const handlePutIn = () => {
        context.fifoQueue.add(nextAdd);
        context.lifoStack.add(nextAdd);
        context.listGenerator.removeMasterList(nextAdd);
        setNextAdd(nextAdd = context.listGenerator.nextToAdd());
        setNextFifoRemove(nextFifoRemove = context.fifoQueue.nextToRemove());
        setNextLifoRemove(nextLifoRemove = context.lifoStack.nextToRemove());
    };

    const handleTakeOut = () => {
        context.fifoQueue.remove(nextFifoRemove);
        context.lifoStack.remove(nextLifoRemove);
        context.listGenerator.addMasterList(nextFifoRemove);
        context.listGenerator.addMasterList(nextLifoRemove);
        context.handleStateChange([{ state: "lastFifoRemoved", newState: nextFifoRemove }, { state: "lastLifoRemoved", newState: nextLifoRemove }]);
        setNextFifoRemove(nextFifoRemove = context.fifoQueue.nextToRemove());
        setNextLifoRemove(nextLifoRemove = context.lifoStack.nextToRemove());
    };

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
                        nextFifoRemove={nextFifoRemove} />
                </div>
                <div className="lifo-wrapper">
                    <span className="fifolifo-header">Last In First Out (LIFO) Stack </span>
                    <div className="lifo-deleted-item">
                        Last Item Taken Out:   <span className="fifolifo-removed-text">{context.state.lastLifoRemoved}</span>
                    </div>
                    < LifoStackDisplay
                        nextLifoRemove={nextLifoRemove} />
                </div>
            </div>
        </div>
    )
}

export default FifoLifoListDisplay;