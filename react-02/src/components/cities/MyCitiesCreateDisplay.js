import React from 'react';
import { AppContext } from '../app-context.js';

class CityCreateDisplay extends React.Component {
    static contextType = AppContext;

    render() {
        return (
            <div className="create-city-display">
                <form onSubmit={this.props.handleSubmit}>
                    <label>City Name:</label>
                    <input
                        type="text"
                        name="cityName"
                        className="create-city-input"
                        placeholder="name"
                        value={this.context.state.cityName}
                        onChange={this.context.handleOnChange} />
                    <label>Latitude:</label>
                    <input
                        type="number"
                        name="latitude"
                        className="create-city-input"
                        placeholder="lat."
                        value={this.context.state.latitude}
                        onChange={this.context.handleOnChange} />
                    <label>Longitude:</label>
                    <input
                        type="number"
                        name="longitude"
                        className="create-city-input"
                        placeholder="long."
                        value={this.context.state.longitude}
                        onChange={this.context.handleOnChange} />
                    <label>Population:</label>
                    <input
                        type="number"
                        name="population"
                        className="create-city-input"
                        placeholder="pop."
                        value={this.context.state.population}
                        onChange={this.context.handleOnChange} />
                    <input
                        type="submit"
                        value="Submit"
                        className="create-city-button city-button" />
                </form>
            </div>
        )
    }
}

export default CityCreateDisplay;