import React from 'react';

class OddComp extends React.Component {
    render() {
        return (
            <h1>The counter {this.props.appCounter} is an odd number.</h1>
        )
    }
}

export default OddComp;