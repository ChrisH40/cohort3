import React from 'react';
import { AppContext } from '../app-context.js';

class CityCreateDisplay extends React.Component {
    static contextType = AppContext;

    render() {
        return (
            <div>
                <div className="create-city-display">
                    <form onSubmit={this.props.handleSubmit}>
                        <div>City Name:</div>
                        <input
                            type="text"
                            name="cityName"
                            className="create-city-input"
                            placeholder="name"
                            value={this.context.state.cityName}
                            onChange={this.context.handleOnChange} />
                        <div>Latitude:</div>
                        <input
                            type="number"
                            name="latitude"
                            className="create-city-input"
                            placeholder="lat."
                            value={this.context.state.latitude}
                            onChange={this.context.handleOnChange} />
                        <div>Longitude:</div>
                        <input
                            type="number"
                            name="longitude"
                            className="create-city-input"
                            placeholder="long."
                            value={this.context.state.longitude}
                            onChange={this.context.handleOnChange} />
                        <div>Population:</div>
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
                <div className="city-warning-display">
                    <span className="city-warning-text" style={this.context.state.cityWarningSuccess === true ? { color: "#09d3ac" } : { color: "red" }}>{this.context.state.cityWarningMsg}</span>
                </div>
                <div className="city-server-display" style={this.context.state.serverStatus === true ? { backgroundColor: "#09d3ac" } : { backgroundColor: "red" }}>
                    Server Status
                </div>
            </div>
        )
    };
}

export default CityCreateDisplay;