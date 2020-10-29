import React from "react";


export default function Hours(props) {
    let time = new Date(props.timestamp*1000);


    let hours = time.getHours();
    let minutes = time.getMinutes();


    if (hours <10) {hours = `0${hours}`;}

    if (minutes < 10) {minutes = `0${minutes}`;} 


    return (<span>{hours}:{minutes}</span>)
}