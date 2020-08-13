import React, { Component } from "react";
import PortfolioItems from "../../components/PortfolioItems"

class Portfolio extends Component {
    render() {
      return (
        <div className="container">
          <h1 className="portTitle">Portfolio</h1>
          <PortfolioItems />
        </div>
      );
    }
}

export default Portfolio;