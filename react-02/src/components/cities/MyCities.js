import React from 'react';
// import CityCreateDisplay from './MyCitiesCreateDisplay.js';
import CityCardsList from './MyCitiesCardsList.js';
// import CityStatsDisplay from './MyCitiesFactsDisplay.js';
// import CityInfoDisplay from './MyCitiesInfoDisplay.js';
import { Community } from './cities.js';
import syncFunctions from './cities-api-functions.js';
import './cities-index.css';

class Cities extends React.Component {

    constructor(props) {
        super(props);
        this.citiesList = new Community('test');
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.cityInfoSelector = this.cityInfoSelector.bind(this)
        this.componentDidMount = this.componentDidMount.bind(this);
        this.state = {
            dataLoad: false,
            cityName: "",
            latitude: "",
            longitude: "",
            population: "",
            mostNorthern: "",
            mostSouthern: "",
            totalPopulation: "",
            selectedCity: "",
            showCity: "",
            howBigCity: "",
            whichSphereCity: "",
        };
    }

    componentDidMount = async () => {
        await syncFunctions.dataSync(this.citiesList); 
        this.setState({
            dataLoad: true,
        });
        this.cityChecker(this.citiesList.cities);
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        if (this.state.latitude < -90 || this.state.latitude > 90 || this.state.longitude < -180 || this.state.longitude > 180 || this.state.population < 0) {
            alert("Latitude -90 to 90 degrees. Longitude -180 to 180 degrees. Population equal to or greater than 0. Please re-enter.");
        }
        else {
            const newCity = this.citiesList.createCity(this.state.cityName, this.state.latitude, this.state.longitude, this.state.population);
            syncFunctions.createCitySync(newCity);
        }
        this.setState({
            cityName: "",
            latitude: "",
            longitude: "",
            population: "",
        })
        this.cityChecker(this.citiesList.cities);
        event.preventDefault();
    }

    handleDelete = (i) => {
        syncFunctions.deleteCitySync(this.citiesList.cities[i].key);
        this.citiesList.cities.splice(i, 1);
        this.cityChecker(this.citiesList.cities);
        this.setState({
            selectedCity: "",
            showCity: "",
            howBigCity: "",
            whichSphereCity: "",
        })
    }

    cityChecker = (array) => {
        if (this.citiesList.cities.length > 0) {
            this.setState({
                mostNorthern: this.citiesList.getMostNorthern(array),
                mostSouthern: this.citiesList.getMostSouthern(array),
                totalPopulation: this.citiesList.getPopulation(array),
            });
        }
        else {
            this.setState({
                mostNorthern: "",
                mostSouthern: "",
                totalPopulation: "",
            });
        }
    }

    cityInfoSelector = (event, i) => {
        if (event.target.value !== "Delete City") {
            this.setState({
                showCity: this.citiesList.cities[i].show(),
                howBigCity: this.citiesList.cities[i].howBig(),
                whichSphereCity: this.citiesList.whichSphere(this.citiesList.cities[i]),
            })
        }
    }

    render() {
        return (
            <div className="city-wrapper">
                <div className="city-container-left">
                    <span className="container-left-header city-display-header">
                        Add City
                    </span>
                    <div className="create-city-display">
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                City Name:
                            </label>
                            <input type="text" name="cityName" className="create-city-input" value={this.state.cityName} onChange={this.handleOnChange} />
                            <label>
                                Latitude:
                            </label>
                            <input type="number" name="latitude" className="create-city-input" value={this.state.latitude} onChange={this.handleOnChange} />
                            <label>
                                Longitude:
                            </label>
                            <input type="number" name="longitude" className="create-city-input" value={this.state.longitude} onChange={this.handleOnChange} />
                            <label>
                                Population:
                            </label>
                            <input type="number" name="population" className="create-city-input" value={this.state.population} onChange={this.handleOnChange} />
                            <input type="submit" value="Add City" className="create-city-button" />
                        </form>
                    </div>
                </div>
                <div className="city-container-middle-top">
                    <div className="city-display-headers">
                        <span className="city-headers">City</span><span className="city-headers">Latitude</span>
                        <span className="city-headers">Longitude</span><span className="city-headers">Population</span>
                    </div>
                    <div>
                        <CityCardsList
                            cities={this.citiesList.cities}
                            handleDelete={this.handleDelete}
                            cityChecker={this.cityChecker}
                            cityInfoSelector={this.cityInfoSelector}
                            selectedCity={this.state.selectedCity}
                        />
                    </div>
                </div>
                <div className="city-container-middle-bottom">
                    <div className="city-facts-display">
                        <p className="city-facts-text">
                            {this.state.showCity}
                        </p>
                        <p className="city-facts-text">
                            {this.state.howBigCity}
                        </p>
                        <p className="city-facts-text" >
                            {this.state.whichSphereCity}
                        </p>
                    </div>
                </div>
                <div className="city-container-right">
                    <div className="city-calculations-display">
                        <span className="city-container-right-header city-display-header">
                            Total Population:
                        </span>
                        <p className="container-right-info">{this.state.totalPopulation}</p>
                    </div>
                    <div className="city-calculations-display">
                        <span className="container-right-header city-display-header">
                            Most Northern City:
                        </span>
                        <p className="container-right-info">{this.state.mostNorthern}</p>
                    </div>
                    <div className="city-calculations-display">
                        <span className="container-right-header city-display-header">
                            Most Southern City:
                        </span>
                        <p className="container-right-info">{this.state.mostSouthern}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Cities;