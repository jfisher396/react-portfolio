import React, { Component } from "react";
import weatherDbPic from "../../media/Weather Dashboard.png";

export default class WeatherDashboard extends Component {
  render() {
    return (
      <div className="card h-100">
        <img
          src={weatherDbPic}
          className="img img-thumbnail"
          alt="screenshot of Weather Dashboard"
        />
        <div className="card-body">
          <h4 className="card-title">Weather Dashboard</h4>
          <p className="card-text port-card">
            A portal for checking the current weather of a city, as well as the 5-day forecast.
          </p>
          <a
            href="https://jfisher396.github.io/weather-dashboard/"
            target="_blank"
            className="btn btn-dark mx-auto"
          >
            View Weather Dashboard
          </a>
        </div>
      </div>
    );
  }
}
