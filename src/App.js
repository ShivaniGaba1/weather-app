import React from 'react';
import ReactDOM from 'react-dom';
import Titles from './components/Titles';
import Form from './components/Form';
import Weather from './components/Weather'
import './App.css';

const API_KEY='a4d4a3b3f2b8ce37c1c2668e495ec0d2';

const MOCK = false

function unix_time_convert(unix) {
    var dateObj = new Date(unix * 1000);
    dateObj.setHours( dateObj.getHours() + 5,30 )
    var utcString = dateObj.toUTCString();
    var time = utcString.slice(-11, -4);
    return time +" IST"

}

function formatDate(date) {
  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return day + ' ' + monthNames[monthIndex] + ' ' + year;
}


class App extends React.Component{

    state={
        maxtemp:"",
        mintemp:"",
	    place:"",
        temperature:"",
        wind:"",
        humidity:"",
        description:"",
        country:"",
        city:"",
        sunshine:"",
        sunset:"",
        geo:"",
        error:"",
	    mintemp:"",
	   maxtemp:"",
    }

    weather_icon_map ={
        2: "11d",
        3: "09d",
        5: "10d",
        7: "50d",
        8: "01d",
    }

    getWeather= async(e)=>{
        e.preventDefault();
        const END_POINT = e.target.endpoint.value;
        //const END_POINT = "api.openweathermap.org/data/2.5/";
        const city= e.target.city.value;
        var weather_image = document.getElementById("title-image");
        var weather_text = document.getElementById("weather-title");
        var title_date = document.getElementById("title-date");
        weather_image.src = "http://www.changiairport.com/etc.clientlibs/cag/clientlibs/cag-maps/resources/images/loading.gif"
        weather_text.innerText = "Please wait data is loading..."
        if(city){
            const api_call= await fetch(`http://${END_POINT}weather?q=${city}&appid=${API_KEY}&units=metrics`);
            const data=await api_call.json();
            if (data.cod == "200") {

                const weather_code = data.weather[0].id
                var weather_im = String(weather_code).charAt(0)
                var weather_id = this.weather_icon_map[weather_im]
                var weather_image = document.getElementById("title-image");
                var weather_text = document.getElementById("weather-title");
                var title_date = document.getElementById("title-date");
                title_date.innerText = formatDate(new Date())
                if (weather_code>800){
                    weather_id = "03d"
                }
                var icon_url = `http://openweathermap.org/img/wn/${weather_id}@2x.png`;
                weather_image.src = icon_url
                const tempCelcius = parseFloat(data.main.temp - 273.15).toFixed(2);
                weather_text.innerText = tempCelcius+"°C, "+data.weather[0].description;
                this.setState({
		            place: data.sys.country,
                    wind: data.wind.speed+"m/sec",
                    mintemp: parseFloat( data.main.temp_min- 273.15).toFixed(2),
                    maxtemp: parseFloat( data.main.temp_max- 273.15).toFixed(2),
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    country: data.sys.country,
                    city: data.name,
                    sunshine: unix_time_convert(data.sys.sunrise),
                    sunset: unix_time_convert(data.sys.sunset),
                    geo: data.coord.lon +",  "+ data.coord.lat,
                    error: "",
		    temperature:"",
                });
            }

            if (data.cod == "404") {
                weather_image.src = 'https://media0.giphy.com/media/nYiHd4Mh3w6fS/giphy.gif'
                weather_text.innerText = "Welcome to weather webapp"
		
		title_date.innerText = ""
                this.setState({
                    place: "",
                    temperature:"",
                    humidity:"",
                    description:"",
                    country:"",
                    city:"",
                    sunshine: "",
                    sunset: "",
                    wind:"",
                    geo:"",
		    mintemp:"",
		    maxtemp:"",
                    error: "Sorry we cannot find the entered city"
            })

            }

            if (data.cod == "400") {
		weather_image.src = 'https://media0.giphy.com/media/nYiHd4Mh3w6fS/giphy.gif'
		weather_text.innerText = "Welcome to weather webapp"
		title_date.innerText = ""
                this.setState({
                    wind:"",
                    geo:"",
                    place: "",
                    temperature:"",
                    humidity:"",
                    description:"",
                    country:"",
                    sunshine: "",
                    sunset: "",
                    mintemp:"",
		    maxtemp:"",
                    city:"",
                    error: "Sorry you didn’t enter any city."
            })

            }
            if(data.cod == "204"){
		weather_image.src = 'https://media0.giphy.com/media/nYiHd4Mh3w6fS/giphy.gif'
		weather_text.innerText = "Welcome to weather webapp"
		title_date.innerText = ""
                this.setState({
                    wind:"",
                    geo:"",
                    place: "",
                    temperature:"",
                    humidity:"",
                    description:"",
                    country:"",
                    sunshine: "",
                    sunset: "",
		    mintemp:"",
		    maxtemp:"",
                    city:"",
                    error: "Sorry, data is currently unavailable. Please try again."
            })

            }

            if(data.cod == "500"){
		//weather_image.src = 'https://media0.giphy.com/media/nYiHd4Mh3w6fS/giphy.gif'
		weather_text.innerText = "Welcome to weather webapp"
		title_date.innerText = ""
                this.setState({
                    wind:"",
                    geo:"",
                    place: "",
                    temperature:"",
                    humidity:"",
                    description:"",
                    country:"",
                    sunshine: "",
		    mintemp:"",
		    maxtemp:"",
                    sunset: "",
                    city:"",
                    error: "Sorry something went wrong, please try again later"
            })

            }

        }
        else{
		weather_image.src = 'https://media0.giphy.com/media/nYiHd4Mh3w6fS/giphy.gif'
		weather_text.innerText = "Welcome to weather webapp"
		title_date.innerText = "" 
           this.setState({
               wind:"",
               geo:"",
               place:"",
               temperature:"",
               humidity:"",
               description:"",
               country:"",
               sunshine: "",
	       mintemp:"",
	       maxtemp:"",
               sunset: "",
               city:"",
               error:"Sorry something went wrong, please try again later"
            });
        }

    }
    render(){
        return(

            <div className="container-fluid main">
                <div className="col-md-2"></div>
                <div className="col-md-3 titleColumn">
                    <Titles/>
                </div>
                <div className="col-md-5 inputColumn">
                     <Form getWeather={this.getWeather}/>
                     <Weather
                         wind={this.state.wind}
                         temperature={this.state.temperature}
                         place={this.state.place}
                         humidity={this.state.humidity}
                         description={this.state.description}
                         country={this.state.country}
                         city={this.state.city}
                         sunshine={this.state.sunshine}
                         sunset={this.state.sunset}
                         geo={this.state.geo}
                         error={this.state.error}
                         mintemp={this.state.mintemp}
                         maxtemp={this.state.maxtemp}
                     />
                </div>
                <div className="col-md-2"></div>
            </div>





        );
    }
}

export default App;
