import React from "react";
import Icon from "./Icon";

export default function ForecastInfo(props){

    function formatHours() {
let date=new Date(props.forecast.list[props.index].dt * 1000);
    let hour = date.getHours();
    return `${hour}:00`
    }

function formatTemperature() {
let temperature = Math.round(props.forecast.list[props.index].main.temp);

return <span><b>{temperature}</b> ° C </span>
}

    return (
        <div className="ForecastInfo col">

      {formatHours()}
      <Icon icon= {props.forecast.list[props.index].weather[0].icon} />
      {formatTemperature()}
      
      </div>

    )
}