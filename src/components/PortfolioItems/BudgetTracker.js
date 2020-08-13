import React, { Component } from "react";
import budgetTrackerPic from "../../media/budget tracker.png";

export default class BudgetTracker extends Component {
    render() {
        return (
            <div className="card h-100">
                <img
                    src={budgetTrackerPic}
                    className="img img-thumbnail"
                    alt="screenshot of Budget Tracker"
                />
                <div className="card-body">
                    <h4 className="card-title">Budget Tracker</h4>
                    <p className="card-text port-card">
                        A progressive web app to keep an account balance even while offline.</p>
                    <a
                        href="https://glacial-inlet-81056.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark mx-auto"
                    >
                        View Budget Tracker
          </a>
                </div>
            </div>
        );
    }
}