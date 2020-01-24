import React from 'react';
import CityCard from "./MyCitiesCard.js";
import { AppContext } from '../app-context.js';

class CityCardsList extends React.Component {
    static contextType = AppContext;

    render() {
        const cityList = this.context.cities.cities.map((city, i) => {
            return <CityCard
                key={i}
                city={city}
                index={i}
                handleDelete={this.props.handleDelete}
                handleWarning={this.props.handleWarning}
                cityChecker={this.props.cityChecker}
                cityInfoSelector={this.props.cityInfoSelector}
            />
        })

        return (
            <div className="city-display">
                {cityList}
            </div>
        )
    };
}

export default CityCardsList;