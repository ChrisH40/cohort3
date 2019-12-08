import React from 'react';

class CityCreateDisplay extends React.Component {

    render() {
        return (
            <div className="create-city-display">
            <form onSubmit={this.props.handleSubmit}>
                <label>
                    City Name:
                </label>
                <input type="text" name="cityName" className="create-city-input" placeholder="name" value={this.props.cityName} onChange={this.props.handleOnChange} />
                <label>
                    Latitude:
                </label>
                <input type="number" name="latitude" className="create-city-input" placeholder="lat."value={this.props.latitude} onChange={this.props.handleOnChange} />
                <label>
                    Longitude:
                </label>
                <input type="number" name="longitude" className="create-city-input" placeholder="long." value={this.props.longitude} onChange={this.props.handleOnChange} />
                <label>
                    Population:
                </label>
                <input type="number" name="population" className="create-city-input" placeholder="pop." value={this.props.population} onChange={this.props.handleOnChange} />
                <input type="submit" value="Submit" className="create-city-button city-button" />
            </form>
        </div>
        )
    }
}

export default CityCreateDisplay;