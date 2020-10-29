import React from "react";
import ReactAnimatedWeather from "react-animated-weather";

export default function Icon(props) {
const codeMapping ={

    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG"
  };


    return (<span> 
        <ReactAnimatedWeather
        icon={codeMapping[props.icon]}
        color="#5C8BD1"
        size={90}
        animate={true} /> 
        </span>);
}