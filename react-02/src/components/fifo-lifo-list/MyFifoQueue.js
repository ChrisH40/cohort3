import React from 'react';

const FifoQueueDisplay = (props) => {

    const fifoList = props.fifoQueue.list.map((item, i) => {
          // Need to use 'UseEffect' for special CSS class...
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
}

export default FifoQueueDisplay