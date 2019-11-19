import React from 'react';

class Icons extends React.Component {

    render() {
        return (
            <div className="navbar">
                {this.props.navIconMapper()}
            </div>
        );
    }
}

export default Icons;