import React from 'react';

const LifoStackDisplay = (props) => {

    const lifoList = props.lifoStack.list.map((item, i) => {
        return (
            <div className={`lifo-card ` + ((item === props.nextLifoRemove) ? "next-lifo-card-remove" : null)} key={i}>
                <span className="lifo-card-text">{item}</span>
            </div>
        )
    })

    return (
        <div className="lifo-display">
            {lifoList}
        </div>
    )
}


export default LifoStackDisplay;