import React from 'react';
import { AppContext } from '../app-context.js';

class CityFactsDisplay extends React.Component {
    static contextType = AppContext;

    render() {
        return (
            <div className="city-facts-display">
                City Information (click a city for more information):
                <p className="city-facts-text">{this.context.state.showCity}</p>
                <p className="city-facts-text">{this.context.state.howBigCity}</p>
                <p className="city-facts-text" >{this.context.state.whichSphereCity}</p>
            </div>
        )
    }
}

export default CityFactsDisplay;