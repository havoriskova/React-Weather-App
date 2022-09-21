import React, {useState} from "react";
import axios from "axios";
import ForecastInfo from "./ForecastInfo";

import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

function showForecast(response) {
  setForecast(response.data);
  setLoaded(true);
}


 if (loaded && props.dataCity === forecast.city.name) {
    return (
    <div className="Forecast row"> 
    <ForecastInfo index={0} forecast={forecast} unit={props.unit}/>
    <ForecastInfo index={1} forecast={forecast} unit={props.unit}/>
    <ForecastInfo index={2} forecast={forecast} unit={props.unit}/>
    <ForecastInfo index={3} forecast={forecast} unit={props.unit}/>
    <ForecastInfo index={4} forecast={forecast} unit={props.unit}/>
    </div>
  );
} else {

  const apiKey="094780c710fa4efd669f0df8c3991927";
  let units = "metric";
  let apiUrlForecast=`https://api.openweathermap.org/data/2.5/forecast?q=${props.dataCity}&units=${units}&appid=${apiKey}`;
 axios.get(apiUrlForecast).then(showForecast);

return (
     <div>loading..</div> )
}
}
