import React from "react";
import Search from "./Search";
import Info from "./Info";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./Styles.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <div class="card card-weather">
          <div class="card-body card-body-weather">
            {" "}
            <Search />
            <div class="card card-main-weather">
              <div class="card-body card-body-main-weather">
                <Info />
              </div>
            </div>
            <Forecast />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
