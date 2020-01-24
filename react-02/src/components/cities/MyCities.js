import React from 'react';
import { AppContext } from '../app-context.js';
import CityCreateDisplay from './MyCitiesCreateDisplay.js';
import CityCardsList from './MyCitiesCardsList.js';
import CityInfoDisplay from './MyCitiesInfoDisplay.js';
import syncFunctions from './scripts/cities-api-functions.js';
import './cities-index.css';

class Cities extends React.Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    componentDidMount = async () => {
        try {
            if (this.context.state.dataLoad === false) {
                await syncFunctions.dataSync(this.context.cities.cities);
                this.context.handleStateChange([
                    { state: "dataLoad", newState: true },
                    { state: "serverStatus", newState: true }
                ]);
                this.counterSync(this.context.cities);
                this.cityChecker(this.context.cities.cities);
            }
            else return;
        }
        catch (error) {
            this.context.handleStateChange([{ state: "serverStatus", newState: false }]);
        }
    };

    counterSync = (controller) => {
        let arrayKeys = controller.cities.map(city => city.key);
        if (arrayKeys.length > 0) {
            let highestKey = Math.max(...arrayKeys);
            controller.counter = highestKey;
        }
        else controller.counter = 0;
    };

    createCitySync = async (city) => {
        try {
            await syncFunctions.createCitySync(city);
            this.context.handleStateChange([{ state: "serverStatus", newState: true }]);
        }
        catch (error) {
            this.context.handleStateChange([{ state: "serverStatus", newState: false }]);
        };
    };

    handleSubmit = (event) => {
        if (this.context.state.cityName === "") {
            this.context.handleStateChange([{ state: "cityWarningSuccess", newState: false }]);
            this.handleWarning("cityfail", this.context.state.cityName);
        }
        else if (this.context.state.latitude < -90 || this.context.state.latitude > 90) {
            this.context.handleStateChange([{ state: "cityWarningSuccess", newState: false }]);
            this.handleWarning("latfail", this.context.state.cityName);
        }
        else if (this.context.state.longitude < -180 || this.context.state.longitude > 180) {
            this.context.handleStateChange([{ state: "cityWarningSuccess", newState: false }]);
            this.handleWarning("longfail", this.context.state.cityName);
        }
        else if (this.context.state.population < 0) {
            this.context.handleStateChange([{ state: "cityWarningSuccess", newState: false }]);
            this.handleWarning("popfail", this.context.state.cityName);
        }
        else {
            const newCity = this.context.cities.createCity(this.context.state.cityName, this.context.state.latitude, this.context.state.longitude, this.context.state.population);
            this.createCitySync(newCity);
            this.context.handleStateChange([{ state: "cityWarningSuccess", newState: true }]);
            this.handleWarning("citysuccess", this.context.state.cityName);
        };
        this.context.handleStateChange([
            { state: "cityName", newState: "" },
            { state: "latitude", newState: "" },
            { state: "longitude", newState: "" },
            { state: "population", newState: "" },

        ]);
        this.cityChecker(this.context.cities.cities);
        event.preventDefault();
    };

    handleWarning = (alert, name) => {
        if (alert === "citysuccess") {
            this.context.handleStateChange([{ state: "cityWarningMsg", newState: `${name} created!` }]);
            setTimeout(() => {
                this.context.handleStateChange([{ state: "cityWarningMsg", newState: "" }]);
            }, 2000);
        }
        else if (alert === "popsuccess") {
            this.context.handleStateChange([{ state: "cityWarningMsg", newState: `${name} population changed!` }]);
            setTimeout(() => {
                this.context.handleStateChange([{ state: "cityWarningMsg", newState: "" }]);
            }, 2000);
        }
        else if (alert === "popchgfail") {
            this.context.handleStateChange([{ state: "cityWarningMsg", newState: `${name} population not changed:\n Invalid amount.` }]);
            setTimeout(() => {
                this.context.handleStateChange([{ state: "cityWarningMsg", newState: "" }]);
            }, 2000);
        }
        else if (alert === "cityfail") {
            this.context.handleStateChange([{ state: "cityWarningMsg", newState: `${name} not created:\n Invalid name.` }]);
            setTimeout(() => {
                this.context.handleStateChange([{ state: "cityWarningMsg", newState: "" }]);
            }, 2000);
        }
        else if (alert === "latfail") {
            this.context.handleStateChange([{ state: "cityWarningMsg", newState: `${name} not created:\n Invalid latitude.` }]);
            setTimeout(() => {
                this.context.handleStateChange([{ state: "cityWarningMsg", newState: "" }]);
            }, 2000);
        }
        else if (alert === "longfail") {
            this.context.handleStateChange([{ state: "cityWarningMsg", newState: `${name} not created:\n Invalid longitude.` }]);
            setTimeout(() => {
                this.context.handleStateChange([{ state: "cityWarningMsg", newState: "" }]);
            }, 2000);
        }
        else if (alert === "popfail") {
            this.context.handleStateChange([{ state: "cityWarningMsg", newState: `${name} not created:\n Invalid population.` }]);
            setTimeout(() => {
                this.context.handleStateChange([{ state: "cityWarningMsg", newState: "" }]);
            }, 2000);
        }
        else if (alert === "delsuccess") {
            this.context.handleStateChange([{ state: "cityWarningMsg", newState: `${name} deleted!` }]);
            setTimeout(() => {
                this.context.handleStateChange([{ state: "cityWarningMsg", newState: "" }]);
            }, 2000);
        }
    };

    deleteCitySync = async (city) => {
        try {
            await syncFunctions.deleteCitySync(city);
            this.context.handleStateChange([{ state: "serverStatus", newState: true }]);
        }
        catch (error) {
            this.context.handleStateChange([{ state: "serverStatus", newState: false }]);
        };
    };

    handleDelete = (i) => {
        this.context.handleStateChange([{ state: "cityWarningSuccess", newState: true }]);
        this.handleWarning("delsuccess", this.context.cities.cities[i].name);
        this.deleteCitySync(this.context.cities.cities[i]);
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
        if (event.target.value !== "Delete City"
            & event.target.value !== "Moved In"
            & event.target.value !== "Moved Out"
            & event.target.type !== "number") {
            this.context.handleStateChange([
                { state: "showCity", newState: this.context.cities.cities[i].show() },
                { state: "howBigCity", newState: this.context.cities.cities[i].howBig() },
                { state: "whichSphereCity", newState: this.context.cities.whichSphere(this.context.cities.cities[i]) },
            ]);
            if (this.context.cities.cities[i] !== this.context.state.selectedCity
                & event.target.value !== "Moved In"
                & event.target.value !== "Moved Out"
                & event.target.type !== "number") {
                this.context.handleStateChange([{ state: "selectedCity", newState: this.context.cities.cities[i] }]);
            }
            else if (this.context.cities.cities[i] === this.context.state.selectedCity
                & event.target.value !== "Moved In"
                & event.target.value !== "Moved Out"
                & event.target.type !== "number") {
                this.context.handleStateChange([{ state: "selectedCity", newState: null }]);
            }
        }
        else return;
    };

    render() {
        return (
            <div className="city-wrapper" style={{ backgroundColor: this.context.theme[this.context.state.themeValue].background, color: this.context.theme[this.context.state.themeValue].color }}>
                <div className="city-container-left">
                    <span className="city-display-header">Add City</span>
                    <CityCreateDisplay
                        handleSubmit={(event) => { this.handleSubmit(event) }}
                    />
                </div>
                <div className="city-container-middle">
                    <div className="city-container-middle-top">
                        <div className="city-cards-display-headers">
                            <span className="city-headers">City</span>
                            <span className="city-headers">Lat.</span>
                            <span className="city-headers">Long.</span>
                            <span className="city-headers">Pop.</span>
                            <span className="city-facts-header">Click a city for more information</span>
                        </div>
                        <div>
                            <CityCardsList
                                handleDelete={this.handleDelete}
                                handleWarning={this.handleWarning}
                                cityChecker={this.cityChecker}
                                cityInfoSelector={this.cityInfoSelector}
                            />
                        </div>
                    </div>
                </div>
                <div className="city-container-right">
                    <CityInfoDisplay />
                </div>
            </div>
        )
    };
}

export default Cities;