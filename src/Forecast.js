import React from "react";

import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="Forecast">
      <ul>
        <li>
          {" "}
          <div class="row">
            {" "}
            <div class="col-3">Mon </div>{" "}
            <div class="col-3">
              <i class="fas fa-cloud-showers-heavy"></i>{" "}
            </div>
            <div class="col-3">
              {" "}
              <i class="fas fa-umbrella"></i> 5%{" "}
            </div>
            <div class="col-3"> 20°C | 15°C </div>
          </div>{" "}
        </li>

        <li>
          {" "}
          <div class="row">
            {" "}
            <div class="col-3">Tue </div>{" "}
            <div class="col-3">
              {" "}
              <i class="fas fa-sun"></i>
            </div>{" "}
            <div class="col-3">
              {" "}
              <i class="fas fa-umbrella"></i> 10%{" "}
            </div>{" "}
            <div class="col-3"> 21°C | 17°C </div>
          </div>{" "}
        </li>

        <li>
          {" "}
          <div class="row">
            {" "}
            <div class="col-3">Wed </div>{" "}
            <div class="col-3">
              {" "}
              <i class="fas fa-cloud-sun"></i>
            </div>{" "}
            <div class="col-3">
              {" "}
              <i class="fas fa-umbrella"></i> 5%{" "}
            </div>{" "}
            <div class="col-3"> 23°C | 18°C </div>
          </div>
        </li>

        <li>
          {" "}
          <div class="row">
            {" "}
            <div class="col-3">Thu </div>{" "}
            <div class="col-3">
              {" "}
              <i class="fas fa-sun"></i>{" "}
            </div>{" "}
            <div class="col-3">
              {" "}
              <i class="fas fa-umbrella"></i> 7%{" "}
            </div>
            <div class="col-3"> 19°C | 15°C </div>
          </div>
        </li>

        <li>
          {" "}
          <div class="row">
            {" "}
            <div class="col-3">Fri </div>{" "}
            <div class="col-3">
              {" "}
              <i class="fas fa-cloud"></i>{" "}
            </div>{" "}
            <div class="col-3">
              {" "}
              <i class="fas fa-umbrella"></i> 8%{" "}
            </div>
            <div class="col-3"> 18°C | 14°C </div>
          </div>
        </li>
      </ul>
    </div>
  );
}
