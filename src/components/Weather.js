import React from 'react';


class Weather extends React.Component{
    render(){
        return(
            <div className="resultDiv">
<style>
@import url('https://fonts.googleapis.com/css?family=Rubik+Mono+One&display=swap');
</style>
                {this.props.place && <h1 className="results-head">Weather in {this.props.city}, {this.props.country}</h1>}
                {this.props.maxtemp && this.props.mintemp && <p className="results">Temperature: <mark style={{'background-color': "#efad4e", "color":"white"}}>{this.props.maxtemp}°C</mark>  <mark style={{'background-color': "#999999", "color":"white"}}>{this.props.mintemp}°C</mark></p>}
                {this.props.wind && <p className="results">Wind Speed: {this.props.wind}</p>}
                {this.props.humidity && <p className="results">Humidity: {this.props.humidity}%</p>}
                {this.props.sunshine && <p className="results">Sunshine: {this.props.sunshine}</p>}
                {this.props.sunset && <p className="results">Sunset: {this.props.sunset}</p>}
                {this.props.description && <p className="results">Description: {this.props.description}</p>}
                {this.props.geo && <p className="results">Geo-coords: {this.props.geo}</p>}
                {this.props.error && <p className="results-error">{this.props.error}</p>}
            </div>
        );
    }
}


export default Weather;
