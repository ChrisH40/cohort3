import React from 'react';
import { AppContext } from '../app-context.js';

class CityInfoDisplay extends React.Component {
    static contextType = AppContext;

    render() {
        return (
            <div>
                <div className="city-calculations-display">
                    <span className="city-container-right-header city-display-header">Total Population:</span>
                    <p className="container-right-info">{this.context.state.totalPopulation}</p>
                </div>
                <div className="city-calculations-display">
                    <span className="city-container-right-header city-display-header">Most Northern City:</span>
                    <p className="container-right-info">{this.context.state.mostNorthern}</p>
                </div>
                <div className="city-calculations-display">
                    <span className="city-container-right-header city-display-header">Most Southern City:</span>
                    <p className="container-right-info">{this.context.state.mostSouthern}</p>
                </div>
            </div>
        )
    }
}

export default CityInfoDisplay;