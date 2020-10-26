import React from "react";
import Search from "./Search";
import Info from "./Info";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="card card-weather">
          <div className="card-body card-body-weather">
            {" "}
            <Search />
            <div className="card card-main-weather">
              <div className="card-body card-body-main-weather">
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
