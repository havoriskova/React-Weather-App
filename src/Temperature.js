import React, {useState} from "react";

import "./Temperature.css";

export default function Temperature(props){
let [unit, setUnit] = useState("celsius");

function convertToFarenheit(event) {
event.preventDefault();
setUnit("farenhreit");
}

function backToCelsius(event) {
event.preventDefault();
setUnit("celsius");
}

if (unit === "celsius") {

    return (<span className="Temperature">
      <span id="number"> {Math.round(props.celsius)} </span>
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
            </span>);
}
else {
  return (
  <span className="Temperature">
      <span id="number"> {Math.round(props.celsius*(9/5)+32)} </span>
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
            </span>);
}
}