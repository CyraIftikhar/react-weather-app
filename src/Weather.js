import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    setTemperature(response.daily.temperature);
    setReady(true);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on"
              />
            </div>

            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>London</h1>
        <ul className="current-description">
          <li> 00:03 Thursday 10th November</li>
          <li>Mostly Cloudy</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <div className="description">Sunny</div>
              <img
                src="https://i.etsystatic.com/13434992/r/il/b012c5/3306704673/il_1588xN.3306704673_hepv.jpg"
                alt="Sunny"
                width="50px"
                className="float-left"
              ></img>
            </div>
            <div className="col-6 float-left">
              <span className="temperature">{temperature}</span>
              <span className="units">°C</span>
            </div>
            <ul>
              <li>Feels Like: 12°c</li>
              <li>Humidity: 92%</li>
              <li>Wind: 1 mph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "08o0558e3e9fc6bt6ff6f508603a7424";
    let units = "metric";
    let city = "London";
    let apiURL = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiURL).then(handleResponse);

    return "Loading..";
  }
}
