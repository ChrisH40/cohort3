import React from 'react';
import { AppContext } from '../app-context.js';
import CityCreateDisplay from './MyCitiesCreateDisplay.js';
import CityCardsList from './MyCitiesCardsList.js';
import CityFactsDisplay from './MyCitiesFactsDisplay.js';
import CityInfoDisplay from './MyCitiesInfoDisplay.js';
import { cities } from '../app-context.js';
import syncFunctions from './cities-api-functions.js';
import './cities-index.css';

class Cities extends React.Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.citiesList = cities;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount = async () => {
        try {
            if (this.context.state.dataLoad === false) {
                await syncFunctions.dataSync(this.citiesList.cities);
                this.context.handleStateChange([{ state: "dataLoad", newState: true }]);
                this.counterSync(this.citiesList);
                this.cityChecker(this.citiesList.cities);
            }
            else return;
        }
        catch (error) {
            if (this.context.state.apiAlert === false) {
                alert("ALERT: API server not detected!\n \nAPI server not required but recommended for maximum functionality of Cities component.");
                this.context.handleStateChange([{ state: "apiAlert", newState: true }]);
            }
            else return;
        }
    };

    counterSync = (controller) => {
        let arrayKeys = controller.cities.map(city => city.key);
        if (arrayKeys.length > 0) {
            let highestKey = Math.max(...arrayKeys);
            controller.counter = highestKey;
        }
        else controller.counter = 0;
    }

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
            const newCity = this.citiesList.createCity(this.context.state.cityName, this.context.state.latitude, this.context.state.longitude, this.context.state.population);
            syncFunctions.createCitySync(newCity);
        }
        this.context.handleStateChange([
            { state: "cityName", newState: "" },
            { state: "latitude", newState: "" },
            { state: "longitude", newState: "" },
            { state: "population", newState: "" },

        ]);
        this.cityChecker(this.citiesList.cities);
        event.preventDefault();
    }

    handleDelete = (i) => {
        syncFunctions.deleteCitySync(this.citiesList.cities[i]);
        this.citiesList.deleteCity(this.citiesList.cities, i);
        this.cityChecker(this.citiesList.cities);
        this.context.handleStateChange([
            { state: "selectedCity", newState: "" },
            { state: "showCity", newState: "" },
            { state: "howBigCity", newState: "" },
            { state: "whichSphereCity", newState: "" },

        ]);
    }

    cityChecker = (array) => {
        if (array.length > 0) {
            this.context.handleStateChange([
                { state: "mostNorthern", newState: this.citiesList.getMostNorthern(array) },
                { state: "mostSouthern", newState: this.citiesList.getMostSouthern(array) },
                { state: "totalPopulation", newState: this.citiesList.getPopulation(array) },
            ]);
        }
        else {
            this.context.handleStateChange([
                { state: "mostNorthern", newState: "" },
                { state: "mostSouthern", newState: "" },
                { state: "totalPopulation", newState: "" },
            ]);
        }
    }

    cityInfoSelector = (event, i) => {
        if (event.target.value !== "Delete City") {
            this.context.handleStateChange([
                { state: "selectedCity", newState: this.citiesList.cities[i] },
                { state: "showCity", newState: this.citiesList.cities[i].show() },
                { state: "howBigCity", newState: this.citiesList.cities[i].howBig() },
                { state: "whichSphereCity", newState: this.citiesList.whichSphere(this.citiesList.cities[i]) },
            ]);
        }
        else return;
    }

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
                            cities={this.citiesList.cities}
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