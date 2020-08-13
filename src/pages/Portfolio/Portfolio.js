import React, { Component } from "react";

import WineKey from "../../components/PortfolioItems/WineKey"
import Covidosity from "../../components/PortfolioItems/Covidosity"

class Portfolio extends Component {
    render() {
      return (
        <div className="container">
          <h1 className="portTitle">Portfolio</h1>
          <div className="row">
            <div className="col-md-6">
              <WineKey />
            </div>
            <div className="col-md-6">
              <Covidosity />
            </div>
          </div>
        </div>
      );
    }
}

export default Portfolio;