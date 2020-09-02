import React, {Component} from 'react'
import covidosityPic from "../../media/Covidosity.png";

export default class Covidosity extends Component {
  render() {
    return (
      <div className="card h-100">
        <img
          src={covidosityPic}
          className="img img-thumbnail"
          alt="screenshot of Covidosity"
        />
        <div className="card-body">
          <h4 className="card-title">Covidosity</h4>
          <p className="card-text port-card">
            This is a site showing a quick overview of current COVID-19
            conditions in potential travel destinations, condensed into 4 key
            numbers based on population. This was a group project.
          </p>
          <a
            href="https://maria-helbling.github.io/travel-risk-2020/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark mx-auto portBtn"
          >
            Visit Site
          </a>
          <a
            href="https://github.com/maria-helbling/travel-risk-2020"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-light mx-auto portBtn"
          >
            View Repo
          </a>
        </div>
      </div>
    );
  }
}
