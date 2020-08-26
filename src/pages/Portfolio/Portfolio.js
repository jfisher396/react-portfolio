import React, { Component } from "react";

import WineKey from "../../components/PortfolioItems/WineKey"
import Covidosity from "../../components/PortfolioItems/Covidosity"
import WeatherDashboard from "../../components/PortfolioItems/WeatherDashboard"
import WorkdayScheduler from "../../components/PortfolioItems/WorkdayScheduler"
import EmployeeDirectory from "../../components/PortfolioItems/EmployeeDirectory"
import BudgetTracker from "../../components/PortfolioItems/BudgetTracker"
import GoogleBooks from "../../components/PortfolioItems/GoogleBooks"
import MeetingNeeds from "../../components/PortfolioItems/MeetingNeeds"

class Portfolio extends Component {
    render() {
      return (
        <div className="container">
          <h1 className="portTitle">Portfolio</h1>
          <div className="row">
            <div className="col-md-6 mt-5">
              <MeetingNeeds />
            </div>
            <div className="col-md-6 mt-5">
              <WineKey />
            </div>
            <div className="col-md-6 mt-5">
              <Covidosity />
            </div>
            <div className="col-md-6 mt-5">
              <GoogleBooks />
            </div>
            <div className="col-md-6 mt-5">
              <EmployeeDirectory />
            </div>
            <div className="col-md-6 mt-5">
              <BudgetTracker />
            </div>
            <div className="col-md-6 mt-5">
              <WeatherDashboard />
            </div>
            <div className="col-md-6 mt-5">
              <WorkdayScheduler />
            </div>
          </div>
        </div>
      );
    }
}

export default Portfolio;