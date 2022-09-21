import React from "react";
import Hours from "./Hours";

import "./Info.css";

export default function Info(props) {
  return (       <ul className="line-list">
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
    
  );
}
