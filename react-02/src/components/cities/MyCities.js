import React from 'react';
import CityCreateDisplay from './MyCitiesCreateDisplay.js';
import CityCardsList from './MyCitiesCardsList.js';
import CityFactsDisplay from './MyCitiesFactsDisplay.js';
import CityInfoDisplay from './MyCitiesInfoDisplay.js';
import { Community } from './cities.js';
import syncFunctions from './cities-api-functions.js';
import './cities-index.css';

class Cities extends React.Component {

    constructor(props) {
        super(props);
        this.citiesList = new Community('Cities Controller');
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            dataLoad: false,
            cityName: "",
            latitude: "",
            longitude: "",
            population: "",
            mostNorthern: "",
            mostSouthern: "",
            totalPopulation: "",
            showCity: "",
            howBigCity: "",
            whichSphereCity: "",
            selectedCity: "",
        };
    }

    componentDidMount = async () => {
        if (this.state.dataLoad === false) {
            await syncFunctions.dataSync(this.citiesList.cities);
            this.setState({
                dataLoad: true,
            });
            this.counterSync(this.citiesList);
            this.cityChecker(this.citiesList.cities);
        }
        else return;
    }

    counterSync = (controller) => {
            let arrayKeys = controller.cities.map(city => city.key);
            if (arrayKeys.length > 0) {
                let highestKey = Math.max(...arrayKeys);
                controller.counter = highestKey;
            } else controller.counter = 0;
    } 

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        if (this.state.cityName === "") {
            alert("Name required. Please re-enter.");
        }
        else if (this.state.latitude < -90 || this.state.latitude > 90) {
            alert("Latitude must be between -90 and 90 degrees. Please re-enter.");
        }
        else if (this.state.longitude < -180 || this.state.longitude > 180) {
            alert("Longitude must be between -180 and 180 degrees. Please re-enter.");
        }
        else if (this.state.population < 0) {
            alert("Population must be greater than or equal to 0. Please re-enter.");
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
        syncFunctions.deleteCitySync(this.citiesList.cities[i]);
        this.citiesList.deleteCity(this.citiesList.cities, i);
        this.cityChecker(this.citiesList.cities);
        this.setState({
            selectedCity: "",
            showCity: "",
            howBigCity: "",
            whichSphereCity: "",
        })
    }

    cityChecker = (array) => {
        if (array.length > 0) {
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
                selectedCity: this.citiesList.cities[i],
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
                    <span className="container-left-header city-display-header">Add City</span>
                    <CityCreateDisplay
                        handleSubmit={this.handleSubmit}
                        handleOnChange={this.handleOnChange}
                        cityName={this.state.cityName}
                        latitude={this.state.latitude}
                        longitude={this.state.longitude}
                        population={this.state.population}
                    />
                </div>
                <div className="city-container-middle-top">
                    <div className="city-display-headers">
                        <span className="city-headers">City</span>
                        <span className="city-headers">Latitude</span>
                        <span className="city-headers">Longitude</span>
                        <span className="city-headers">Population</span>
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
                    <CityFactsDisplay
                        showCity={this.state.showCity}
                        howBigCity={this.state.howBigCity}
                        whichSphereCity={this.state.whichSphereCity}
                    />
                </div>
                <div className="city-container-right">
                    <CityInfoDisplay 
                        mostNorthern={this.state.mostNorthern}
                        mostSouthern={this.state.mostSouthern}
                        totalPopulation={this.state.totalPopulation}
                    />
                </div>
            </div>
        );
    }
}

export default Cities;