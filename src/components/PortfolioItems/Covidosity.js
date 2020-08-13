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
            numbers based on population.
          </p>
          <a
            href="https://maria-helbling.github.io/travel-risk-2020/"
            target="_blank"
            className="btn btn-dark mx-auto"
          >
            Visit Covidosity
          </a>
        </div>
      </div>
    );
  }
}
