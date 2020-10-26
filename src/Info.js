import React from "react";

import "./Info.css";

export default function App() {
  return (
    <div className="Info">
      <div className="row">
        <div className="col-6">
          <div id="heading-with-city"> Prag </div>
          <div>
            {" "}
            <span id="number"> 19 </span>
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
          <em id="description">partly cloudy</em>
          <div id="heading-with-date"> date </div>
        </div>
        <div className="col-6 image-weather">
          
            
            <i className="fas fa-cloud-sun"></i>
          
        </div>
      </div>

      <div className="row line-list">
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
