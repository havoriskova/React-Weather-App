import React, { useState } from "react";
import axios from "axios";
import Info from "./Info";



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
      timestamp: response.data.dt,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      iconSrc:  `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
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

  let form = (<div className="WeatherApp">
     <form id="search-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="type a city" autoFocus="on" id="input-city-form" 
          onChange={updateCity}/>
        <input type="submit" id="search-submit" value="🔍 Search" />
      </form>
      <button id="button">Current location  </button></div>
  );

  if (weather.loaded) {
    return ( <div className="WeatherApp">    
                <div className="card card-weather">
                   <div className="card-body card-body-weather">
                      {form}

                     <Info data={weather} /> 


                     {/* <Forecast /> props ! */}
                  </div>
                </div>
             </div>
    );
  } else {
  
    search();
    return "Loading..";
  }
}