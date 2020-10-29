import React from "react";
import Day from "./Day";
import Hours from "./Hours";
import Icon from "./Icon";
import Temperature from "./Temperature";

import "./Info.css";

export default function Info(props) {
  return (<div className="Info">
    <div className="card card-main-weather">
      <div className="row">
        <div className="col-6">
          <div className="city"> {props.data.city} </div>
          <div>
            <Temperature celsius={props.data.temperature}/>
            
          </div>
          <em id="description" className="text-capitalize">{props.data.description}</em>
          <div id="heading-with-date"> Last update: <Day timestamp={props.data.timestamp}/>, <Hours timestamp={props.data.timestamp}/> </div>
        </div>
        <div className="col-6 image-weather">
             <Icon icon={props.data.iconCode} />
        </div>
      </div>

      <ul className="line-list">
        <li className="list">
          {" "}
          <span className="sun-sunrise"> </span>
                  <span id="sunrise"><Hours timestamp={props.data.sunrise}/></span>
        </li>
        <li className="list">
          {" "}
           <span className="sun-sunset"> </span>
                  <span id="sunset"><Hours timestamp={props.data.sunset}/></span>
        </li>
        <li className="list">
          <span className="rain">
            {" "}
            <i className="fas fa-umbrella"></i> {props.data.humidity} %
          </span>
        </li>
        <li className="list">
          <span className="wind">
            {" "}
            <i className="fas fa-wind"></i> {props.data.wind} km/h
          </span>
        </li>
      </ul>
    </div>
</div>
    
  );
}
