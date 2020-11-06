import React, { useState } from "react";
import axios from "axios";
import Info from "./Info";
import Forecast from "./Forecast";



import "./WeatherApp.css";

export default function WeatherApp(props) {
  
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({loaded: false}); 

  function displayWeather(response) {
    console.log(response.data);
    
    setWeather({ 
      loaded: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
      country: response.data.sys.country,
      timestamp: response.data.dt,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      iconCode: response.data.weather[0].icon,
    });
  }

  function search() {
    const apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }
function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

function handleCurrent(event) {
   event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function searchLocation(position) {
  const apiKey = "6f8eb5e9009796b8d457f007bc62c74f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=${apiKey}`;
  axios.get(apiUrl).then(displayWeather);
}

  let form = (<div className="WeatherApp form">
      <form id="search-form" onSubmit={handleSubmit}>
         <input type="text"  placeholder="type a city" autoFocus="on" id="input-city-form" 
          onChange={updateCity}/>
       <input type="submit" id="search-submit" value="🔍 Search"/>
       </form>
     </div> 
  );

  if (weather.loaded) {
    return ( <div className="WeatherApp">    
                <div className="card card-weather">
                   <div className="card-body card-body-weather">
                      {form}
                      <button id="current-button" onClick={handleCurrent}>Current</button>

                     <Info data={weather} /> 


                     <Forecast dataCity={weather.city}/>
                  </div>
                </div>
             </div>
    );
  } else {
  
    search();
    return "Loading..";
  }
}