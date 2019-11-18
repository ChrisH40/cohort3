import React from 'react';

class EvenComp extends React.Component {
    render() {
        return (
            <h1>The counter {this.props.appCounter} is an even number.</h1>
        )
    }
}

export default EvenComp;