import React from 'react';

class CityFactsDisplay extends React.Component {

    render() {
        return (
            <div className="city-facts-display">
                City Information (click a city for more information):
                <p className="city-facts-text">{this.props.showCity}</p>
                <p className="city-facts-text">{this.props.howBigCity}</p>
                <p className="city-facts-text" >{this.props.whichSphereCity}</p>
            </div>
        )
    }
}

export default CityFactsDisplay;