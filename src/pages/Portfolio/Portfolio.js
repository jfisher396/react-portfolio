import React, { Component } from "react";
import PortfolioItem from "../../components/PortfolioItem"

class Portfolio extends Component {
    render() {
      return (
        <div>
          <h1>This is the portfolio page</h1>
          <PortfolioItem />
        </div>
      );
    }
}

export default Portfolio;