import React from 'react';
import syncFunctions from './scripts/cities-api-functions.js';
import { AppContext } from '../app-context.js';

class CityCard extends React.Component {
    static contextType = AppContext;

    constructor(props) {
        super(props);
        this.state = {
            changePopulation: "",
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    popSync = async (city) => {
        try {
            await syncFunctions.populationSync(city);
        }
        catch (error) {
            alert("ALERT: API server not detected!\n\n" + city.name + " population not synced with server.");
        };
    }

    handleMovedIn = (i) => {
        if (this.state.changePopulation < 0) {
            alert("Please enter a number greater than zero.");
        }
        else {
            this.context.cities.cities[i].movedIn(Number(this.state.changePopulation));
            this.popSync(this.context.cities.cities[i]);
        };
        this.setState({
            changePopulation: "",
        })
        this.props.cityChecker(this.context.cities.cities);
    }

    handleMovedOut = (i) => {
        if (this.state.changePopulation < 0 || this.state.changePopulation > this.props.city.population) {
            alert("Please enter a number greater than zero or less than/equal to current population.");
        }
        else {
            this.context.cities.cities[i].movedOut(Number(this.state.changePopulation));
            this.popSync(this.context.cities.cities[i]);
        }
        this.setState({
            changePopulation: "",
        })
        this.props.cityChecker(this.context.cities.cities);
    }

    render() {
        return (
            <div className={`city-card ` + (this.context.state.selectedCity === this.context.cities.cities[this.props.index] ? "active-city-card" : null)} onClick={(event) => this.props.cityInfoSelector(event, this.props.index)}>
                <label className="city-name city-card-elements">{this.props.city.name}</label>
                <label className="city-latitude city-card-elements">{(this.props.city.latitude).toFixed(2)}</label>
                <label className="city-longitude city-card-elements">{(this.props.city.longitude).toFixed(2)}</label>
                <label className="city-population city-card-elements">{(this.props.city.population).toFixed(0)}</label>
                <input
                    type="number"
                    name="changePopulation"
                    placeholder="pop."
                    value={this.state.changePopulation}
                    className="city-population-input city-card-elements"
                    onChange={this.handleOnChange} />
                <input
                    type="button"
                    value="Moved In"
                    className="city-button city-card-elements"
                    onClick={() => this.handleMovedIn(this.props.index)} />
                <input
                    type="button"
                    value="Moved Out"
                    className="city-button city-card-elements"
                    onClick={() => this.handleMovedOut(this.props.index)} />
                <input
                    type="button"
                    value="Delete City"
                    className="city-button city-card-elements"
                    onClick={() => this.props.handleDelete(this.props.index)} />
            </div>
        )
    }
}

export default CityCard;