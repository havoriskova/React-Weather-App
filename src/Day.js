import React from "react";


export default function Day(props) {
    
let time = new Date(props.timestamp*1000);
let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let day= days[time.getDay()];

    return <span>{day}</span>;
}