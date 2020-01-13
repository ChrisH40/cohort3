import React from 'react';
import { AppContext } from '../app-context.js';
import CityCreateDisplay from './MyCitiesCreateDisplay.js';
import CityCardsList from './MyCitiesCardsList.js';
import CityFactsDisplay from './MyCitiesFactsDisplay.js';
import CityInfoDisplay from './MyCitiesInfoDisplay.js';
import syncFunctions from './cities-api-functions.js';
import './cities-index.css';

class Cities extends React.Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = async () => {
        if (this.context.state.dataLoad === false) {
            await syncFunctions.dataSync(this.context.cities.cities);
            this.context.handleStateChange([{ state: "dataLoad", newState: true }]);
            this.counterSync(this.context.cities);
            this.cityChecker(this.context.cities.cities);
        }
        else return;
    };

    counterSync = (controller) => {
        let arrayKeys = controller.cities.map(city => city.key);
        if (arrayKeys.length > 0) {
            let highestKey = Math.max(...arrayKeys);
            controller.counter = highestKey;
        }
        else controller.counter = 0;
    };

    handleSubmit = (event) => {
        if (this.context.state.cityName === "") {
            alert("Name required. Please re-enter.");
        }
        else if (this.context.state.latitude < -90 || this.context.state.latitude > 90) {
            alert("Latitude must be between -90 and 90 degrees. Please re-enter.");
        }
        else if (this.context.state.longitude < -180 || this.context.state.longitude > 180) {
            alert("Longitude must be between -180 and 180 degrees. Please re-enter.");
        }
        else if (this.context.state.population < 0) {
            alert("Population must be greater than or equal to 0. Please re-enter.");
        }
        else {
            const newCity = this.context.cities.createCity(this.context.state.cityName, this.context.state.latitude, this.context.state.longitude, this.context.state.population);
            syncFunctions.createCitySync(newCity);
        }
        this.context.handleStateChange([
            { state: "cityName", newState: "" },
            { state: "latitude", newState: "" },
            { state: "longitude", newState: "" },
            { state: "population", newState: "" },

        ]);
        this.cityChecker(this.context.cities.cities);
        event.preventDefault();
    };

    handleDelete = (i) => {
        syncFunctions.deleteCitySync(this.context.cities.cities[i]);
        this.context.cities.deleteCity(this.context.cities.cities, i);
        this.cityChecker(this.context.cities.cities);
        this.context.handleStateChange([
            { state: "selectedCity", newState: "" },
            { state: "showCity", newState: "" },
            { state: "howBigCity", newState: "" },
            { state: "whichSphereCity", newState: "" },
        ]);
    };

    cityChecker = (array) => {
        if (array.length > 0) {
            this.context.handleStateChange([
                { state: "mostNorthern", newState: this.context.cities.getMostNorthern(array) },
                { state: "mostSouthern", newState: this.context.cities.getMostSouthern(array) },
                { state: "totalPopulation", newState: this.context.cities.getPopulation(array) },
            ]);
        }
        else {
            this.context.handleStateChange([
                { state: "mostNorthern", newState: "" },
                { state: "mostSouthern", newState: "" },
                { state: "totalPopulation", newState: "" },
            ]);
        }
    };

    cityInfoSelector = (event, i) => {
        if (event.target.value !== "Delete City") {
            this.context.handleStateChange([
                { state: "selectedCity", newState: this.context.cities.cities[i] },
                { state: "showCity", newState: this.context.cities.cities[i].show() },
                { state: "howBigCity", newState: this.context.cities.cities[i].howBig() },
                { state: "whichSphereCity", newState: this.context.cities.whichSphere(this.context.cities.cities[i]) },
            ]);
        }
        else return;
    };

    render() {
        return (
            <div className="city-wrapper" style={{ backgroundColor: this.context.theme[this.context.state.themeValue].background, color: this.context.theme[this.context.state.themeValue].color }}>
                <div className="city-container-left">
                    <span className="city-display-header">Add City</span>
                    <CityCreateDisplay
                        handleSubmit={this.handleSubmit}
                    />
                </div>
                <div className="city-container-middle-top">
                    <div className="city-cards-display-headers">
                        <span className="city-headers">City</span>
                        <span className="city-headers">Lat.</span>
                        <span className="city-headers">Long.</span>
                        <span className="city-headers">Pop.</span>
                    </div>
                    <div>
                        <CityCardsList
                            handleDelete={this.handleDelete}
                            cityChecker={this.cityChecker}
                            cityInfoSelector={this.cityInfoSelector}
                        />
                    </div>
                </div>
                <div className="city-container-middle-bottom">
                    <CityFactsDisplay />
                </div>
                <div className="city-container-right">
                    <CityInfoDisplay />
                </div>
            </div>
        );
    }
}

export default Cities;