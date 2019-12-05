import React from 'react';
import syncFunctions from './cities-api-functions.js'

class CityCard extends React.Component {

    constructor() {
        super();
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleMovedIn = this.handleMovedIn.bind(this);
        this.handleMovedOut = this.handleMovedOut.bind(this);
        this.state = {
            changePopulation: "",
        }
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleMovedIn(i) {
        if (this.state.changePopulation < 0) {
            alert("Please enter a number greater than zero.");
        }
        else {
            this.props.cities[i].movedIn(Number(this.state.changePopulation));
            syncFunctions.populationSync(this.props.cities[i]);
        }
        this.setState({
            changePopulation: "",
        })
        this.props.cityChecker(this.props.cities);
    }

    handleMovedOut(i) {
        if (this.state.changePopulation < 0 || this.state.changePopulation >= this.props.population) {
            alert("Please enter a number greater than zero or less than current population.");
        }
        else {
            this.props.cities[i].movedOut(Number(this.state.changePopulation));
            syncFunctions.populationSync(this.props.cities[i]);
        }
        this.setState({
            changePopulation: "",
        })
        this.props.cityChecker(this.props.cities);
    }

    render() {
        return (
            <div className={`city-card ` + (this.props.selectedCity === this.props.cities[this.props.index] ? "active-city-card" : null)} onClick={(event) => this.props.cityInfoSelector(event, this.props.index)}>
                <label className="city-name city-card-elements">
                    {this.props.name}
                </label>
                <label className="city-latitude city-card-elements">
                    {(this.props.latitude).toFixed(2)}
                </label>
                <label className="city-longitude city-card-elements">
                    {(this.props.longitude).toFixed(2)}
                </label>
                <label className="city-population city-card-elements">
                    {(this.props.population).toFixed(0)}
                </label>
                <input type="number" name="changePopulation" value={this.state.changePopulation} className="city-population-input city-card-elements" onChange={this.handleOnChange} />
                <input type="button" value="Moved In" className="movedin-button city-button city-card-elements" onClick={() => this.handleMovedIn(this.props.index)} />
                <input type="button" value="Moved Out" className="movedout-button city-button city-card-elements" onClick={() => this.handleMovedOut(this.props.index)} />
                <input type="button" value="Delete City" className="delete-button city-button city-card-elements" onClick={() => this.props.handleDelete(this.props.index)} />
            </div>
        )
    }
}

export default CityCard;