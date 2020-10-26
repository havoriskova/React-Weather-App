import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  const [weather, setWeather] = useState({});

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp
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

  let form = (<div className="Search">
     <form id="search-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="type a city" autoFocus="on" id="input-city-form" onChange={updateCity}/>
        <input type="submit" id="search-submit" value="Search" />
      </form>
      <button id="button">Current location</button></div>
  );

  if (loaded) {
    return (
      <div>
        {form}
        Temperature: {Math.round(weather.temperature)}°C
          
      </div>
    );
  } else {
    return form;
  }
}