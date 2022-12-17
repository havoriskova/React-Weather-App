import React from "react";
import Icon from "./Icon";

export default function ForecastInfo(props){

    function formatHours() {
let date=new Date(props.forecast.list[props.index].dt * 1000);
    let hour = date.getHours();
    return `${hour}:00`
    }

function formatTemperature() { 
let temperatureInCelsius = Math.round(props.forecast.list[props.index].main.temp);

if (props.unit === "celsius") {
return <span><b>{temperatureInCelsius}</b> ° C </span>}
else {
return <span><b>{Math.round(temperatureInCelsius*(9/5)+32)}</b> ° F </span>} 
}

    return (
        <div className="ForecastInfo col">

      {formatHours()}
      <Icon icon= {props.forecast.list[props.index].weather[0].icon} />
      {formatTemperature()}
      
      </div>

    )
}