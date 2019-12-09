import React from 'react';

class CityInfoDisplay extends React.Component {

    render() {
        return (
            <div>
                <div className="city-calculations-display">
                    <span className="city-container-right-header city-display-header">Total Population:</span>
                    <p className="container-right-info">{this.props.totalPopulation}</p>
                </div>
                <div className="city-calculations-display">
                    <span className="city-container-right-header city-display-header">Most Northern City:</span>
                    <p className="container-right-info">{this.props.mostNorthern}</p>
                </div>
                <div className="city-calculations-display">
                    <span className="city-container-right-header city-display-header">Most Southern City:</span>
                    <p className="container-right-info">{this.props.mostSouthern}</p>
                </div>
            </div>

        )
    }
}

export default CityInfoDisplay;