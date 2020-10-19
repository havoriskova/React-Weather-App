import React from "react";

import "./Info.css";

export default function App() {
  return (
    <div className="Info">
      <div className="row">
        <div className="col-6">
          <h1 id="heading-with-city"> Prag </h1>
          <h2>
            {" "}
            <span id="number"> 19 </span>
            <sup>
              <a href="#" id="celsius">
                {" "}
                °C{" "}
              </a>
              |{" "}
              <a href="#" id="farenheit">
                °F{" "}
              </a>
            </sup>{" "}
          </h2>
          <h3>partly cloudy</h3>
          <h4 className="heading-with-date"> date </h4>
        </div>
        <div className="col-6">
          <h5 className="image-weather">
            {" "}
            <i className="fas fa-cloud-sun"></i>{" "}
          </h5>
        </div>
      </div>

      <div className="row">
        <div className="col-3">
          {" "}
          <span className="high-temperature">
            {" "}
            <i className="fas fa-temperature-high"></i> 21°C{" "}
          </span>{" "}
        </div>
        <div className="col-3">
          {" "}
          <span className="low-temperature">
            {" "}
            <i className="fas fa-temperature-low"></i> 15°C{" "}
          </span>
        </div>
        <div className="col-3">
          <span className="rain">
            {" "}
            <i className="fas fa-umbrella"></i> 20 %
          </span>
        </div>
        <div className="col-3">
          <span className="wind">
            {" "}
            <i className="fas fa-wind"></i> 50 km/h
          </span>
        </div>
      </div>
    </div>
  );
}
