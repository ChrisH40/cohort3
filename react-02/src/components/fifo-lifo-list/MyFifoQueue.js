import React from 'react';
import { AppContext } from '../app-context.js';

const FifoQueueDisplay = (props) => {
    const context = React.useContext(AppContext);

    const fifoList = context.fifoQueue.list.map((item, i) => {
        return (
            <div className={`fifo-card ` + ((item === props.nextFifoRemove) ? "next-fifo-card-remove" : null)} key={i}>
                <span className="fifo-card-text">{item}</span>
            </div>
        )
    })

    return (
        <div className="fifo-display">
            {fifoList}
        </div>
    )
};

export default FifoQueueDisplay