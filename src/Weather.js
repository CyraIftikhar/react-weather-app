import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>

          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>London</h1>
      <ul className="current-description">
        <li> 00:03 Thursday 10th November</li>
        <li>Mostly Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="description">Sunny</div>
          <img
            src="https://i.etsystatic.com/13434992/r/il/b012c5/3306704673/il_1588xN.3306704673_hepv.jpg"
            alt="Sunny"
            width="50px"
          ></img>
        </div>
        <div className="col-6">
          <h2>12°</h2>
          <ul>
            <li>Feels Like: 12°c</li>
            <li>Humidity: 92%</li>
            <li>Wind: 1 mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
