import React, { useState } from "react";
import axios from "axios";
import Date from "./Date";


import "./WeatherApp.css";


export default function WeatherApp(props) {
  
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({loaded: false}); {/*state as an object with one default key - loaded boolean */}

  function displayWeather(response) {
    console.log(response.data);
    
    setWeather({ 
      loaded: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      city: response.data.name,
      iconSrc:  `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
function handleSubmit(event) {
    event.preventDefault();
    const apiKey = "094780c710fa4efd669f0df8c3991927";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(displayWeather);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  let form = (<div className="WeatherApp">
     <form id="search-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="type a city" autoFocus="on" id="input-city-form" onChange={updateCity}/>
        <input type="submit" id="search-submit" value="🔍 Search" />
      </form>
      <button id="button">🚩 Current location</button></div>
  );

  if (weather.loaded) {
    return ( <div className="WeatherApp">    
<div className="card card-weather">
          <div className="card-body card-body-weather">
           {form}
            <div className="card card-main-weather">
      <div className="Info">
      <div className="row">
        <div className="col-6">
          <div className="city"> {weather.city} </div>
          <div>
            {" "}
            <span id="number"> {Math.round(weather.temperature)} </span>
            <span className="units">
              <button  id="celsius">
                {" "}
                °C{" "}
              </button>
              |{" "}
              <button  id="farenheit">
                °F{" "}
              </button>
            </span>{" "}
          </div>
          <em id="description" className="text-capitalize">{weather.description}</em>
          <Date /> 
        </div>
        <div className="col-6 image-weather">
                 <img src={weather.iconSrc} alt={weather.description} />
        </div>
      </div>

      <ul className="line-list">
        <li className="list">
          {" "}
          <span class="sun-sunrise"> </span>
                  <span id="sunrise">sunrise time</span>
        </li>
        <li className="list">
          {" "}
           <span class="sun-sunset"> </span>
                  <span id="sunset">sunset time</span>
        </li>
        <li className="list">
          <span className="rain">
            {" "}
            <i className="fas fa-umbrella"></i> {weather.humidity} %
          </span>
        </li>
        <li className="list">
          <span className="wind">
            {" "}
            <i className="fas fa-wind"></i> {weather.wind} km/h
          </span>
        </li>
      </ul>
    </div>

              <div className="card-body card-body-main-weather">
                {/* <Info /> prosps !*/}
              </div>
            </div>
            {/* <Forecast /> props ! */}
          </div>
        </div>
        </div>
    );
  } else {
  
    return form;
  }
}