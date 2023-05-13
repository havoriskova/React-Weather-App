import React, { useState } from "react";
import axios from "axios";
import Info from "./Info";
import Forecast from "./Forecast";
import Day from "./Day";
import Icon from "./Icon";
// import Temperature from "./Temperature";

import Hours from "./Hours";
import "./Temperature.css";


import "./WeatherApp.css";
import "./Info.css";

export default function WeatherApp(props) {
  
  const [city, setCity] = useState(props.defaultCity);
  const [weather, setWeather] = useState({loaded: false});
  const [unit, setUnit] = useState("celsius");

  function convertToFarenheit(event) {
  event.preventDefault();
  setUnit("farenhreit");
  }

  function backToCelsius(event) {
  event.preventDefault();
  setUnit("celsius");
  }



  function displayWeather(response) {
    console.log(response.data);
    
    setWeather({ 
      loaded: true,
      temperatureInCelsius: response.data.main.temp,
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
    const apiKey = process.env.WEATHER_API_KEY;
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
        <div className="input-submit-container">
          <div className="input-submit-grid-container">
            <input type="submit" id="search-submit" value="  "/>
              <svg className="no-display-svg">
                <symbol id='glass'>
                  <path d="M10,18c1.9,0,3.6-0.6,4.9-1.7l4.4,4.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3c0.4-0.4,0.4-1,0-1.4l-4.4-4.4   c1-1.4,1.7-3,1.7-4.9c0-4.4-3.6-8-8-8s-8,3.6-8,8S5.6,18,10,18z M10,4c3.3,0,6,2.7,6,6s-2.7,6-6,6s-6-2.7-6-6S6.7,4,10,4z"/>
                </symbol>
              </svg>
              <svg className='display-svg display-glass'  viewBox='-3 -3 24 24' width='30' height='30'>
                <use href="#glass"/>
              </svg>
          </div>
        </div>
       </form>
     </div> 
  );

  if (weather.loaded) {
    return ( <div className="WeatherApp">    
                <div className="card card-weather">
                   <div className="card-body card-body-weather">
                      {form}
                      <button id="current-button" onClick={handleCurrent}>
                        <svg className="no-display-svg">
                          <symbol id='place'>
                            <path d="M16,2A10,10,0,0,0,6,12c0,5.15,8.26,16.34,9.2,17.6a1,1,0,0,0,1.6,0C17.74,28.34,26,17.15,26,12A10,10,0,0,0,16,2Zm0,25.3C13.2,23.39,8,15.43,8,12a8,8,0,0,1,16,0C24,15.43,18.8,23.39,16,27.3Z"/><path d="M16,7a5,5,0,1,0,5,5A5,5,0,0,0,16,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,16,15Z"/>
                          </symbol>
                        </svg>
                        <svg className='display-svg' viewBox='4 3 32 32' width='29' height='34'>
                          <use href="#place"/>
                        </svg>
                      </button>

                     <div className="Info">
                        <div className="card card-main-weather">
                      
                              <div className="city"> {weather.city}, {weather.country} </div>
                              <div id="heading-with-date"> Last update: <Day timestamp={weather.timestamp}/>, <Hours timestamp={weather.timestamp}/> </div>
                            
                            <div className="row center-of-info">
                              <div className="col-7">
                              <span className="image-weather">
                                <Icon icon={weather.iconCode} />   </span>
                                <span> 
                              {/*    <Temperature celsius={weather.temperature}/>*/} 
                                {(unit === "celsius") ? 

                                      <span className="Temperature">
                                          <span id="number"> {Math.round(weather.temperatureInCelsius)} </span>
                                                <span className="units">
                                                  <button  id="celsius" className="inactive">
                                                    {" "}
                                                    °C{" "}
                                                  </button>
                                                  |{" "}
                                                  <button  id="farenheit" className="active" onClick={convertToFarenheit}>
                                                    °F{" "}
                                                  </button>
                                                </span>{" "}
                                                </span>
                                  
                                    : 
                                      <span className="Temperature">
                                          <span id="number"> {Math.round(weather.temperatureInCelsius*(9/5)+32)} </span>
                                                <span className="units">
                                                  <button  id="celsius" className="active" onClick={backToCelsius}>
                                                    {" "}
                                                    °C{" "}
                                                  </button>
                                                  |{" "}
                                                  <button  id="farenheit" className="inactive">
                                                    °F{" "}
                                                  </button>
                                                </span>{" "}
                                                </span>
                                      }
                                
                                
                                
                                </span></div>
                            <div className="col-5">
                              <div id="description" className="text-capitalize">{weather.description}</div>
                            <div id="humidity"> Humidity: {weather.humidity} %</div>
                            
                          </div></div>

                           <Info data={weather} /> 
                        </div>
                    </div>



                     <Forecast dataCity={weather.city} unit={unit}/> 
                 
                  </div>
                </div>
             </div>
    );
  } else {
  
    search();
    return "Loading..";
  }
}