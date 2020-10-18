import React, { useState } from "react";

import axios from "axios";


export default function Axiostest() {
  let [inputCity, setInputCity] = useState(null);
  let [weatherInfo, setWeatherInfo] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(inputCity);
    // alert(`Searching for ${inputCity}`);

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${inputCity}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function showWeather(response) {
    console.log(response.data);
    let iconSrc = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

    setWeatherInfo(
      <div>
        <ul>
          <li>Temperature: {Math.round(response.data.main.temp)}°C</li>
          <li>
            Description: <i>{response.data.weather[0].description}</i>
          </li>
          <li>Humidity: {response.data.main.humidity}%</li>
          <li>Wind: {response.data.wind.speed}km/h </li>
          <li>
            {" "}
            <img src={iconSrc} alt={response.data.weather[0].description} />
          </li>
        </ul>
      </div>
    );
  }

  function saveInput(event) {
    setInputCity(event.target.value);
  }

  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="Enter a city..."
          onChange={saveInput}
        />
        <input type="submit" value="Search" />
      </form>
      {weatherInfo}
    </div>
  );
}
