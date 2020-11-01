import React from "react";
import Day from "./Day";
import Hours from "./Hours";
import Icon from "./Icon";
import Temperature from "./Temperature";

import "./Info.css";

export default function Info(props) {
  return (<div className="Info">
    <div className="card card-main-weather">
  
          <div className="city"> {props.data.city}, {props.data.country} </div>
           <div id="heading-with-date"> Last update: <Day timestamp={props.data.timestamp}/>, <Hours timestamp={props.data.timestamp}/> </div>
        
        <div className="row">
          <div className="col-7">
          <span className="image-weather">
             <Icon icon={props.data.iconCode} />   </span>
             <span> <Temperature celsius={props.data.temperature}/> </span></div>
        <div className="col-5">
          <div> <em id="description" className="text-capitalize">{props.data.description}</em></div>
         <div id="humidity"> Humidity: {props.data.humidity} %</div>
        
      </div></div>

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
