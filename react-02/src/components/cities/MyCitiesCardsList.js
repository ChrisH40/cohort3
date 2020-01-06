import React from 'react';
import CityCard from "./MyCitiesCard.js";

class CityCardsList extends React.Component {

    render() {
        const cityList = this.props.cities.map((city, i) => {
            return <CityCard
                cities={this.props.cities}
                city={city}
                index={i}
                handleDelete={this.props.handleDelete}
                cityChecker={this.props.cityChecker}
                cityInfoSelector={this.props.cityInfoSelector}
                selectedCity={this.props.selectedCity}
            />
        })

        return (
            <div className="city-display">
                {cityList}
            </div>
        )
    }
}

export default CityCardsList;