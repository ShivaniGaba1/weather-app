import React from 'react';

class Titles extends React.Component{
    render(){
        return(
            <div>
                <img id="title-image"className="gifImg" src="https://media0.giphy.com/media/nYiHd4Mh3w6fS/giphy.gif"/>
                <h3 id="weather-title" className="titleweather">Welcome to weather webapp</h3>
                <h3 id="title-date" className="titleweather"></h3>
                <div className="titles">
                    <h2>Weather Finder</h2>
                    <h5>Find Out Weather, Conditions and More.....</h5>
                </div>
            </div>
        );
    }
}

export default Titles;
