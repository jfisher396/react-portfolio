import React, { Component } from "react";
import workdaySchedulerPic from "../../media/Workday Scheduler.png";

export default class WorkdayScheduler extends Component {
  render() {
    return (
      <div className="card h-100 lastCard">
        <img
          src={workdaySchedulerPic}
          className="img img-thumbnail"
          alt="screenshot of Workday Scheduler"
        />
        <div className="card-body">
          <h4 className="card-title">Workday Scheduler</h4>
          <p className="card-text port-card">
            A single-day planner that saves text inputs and color codes by the
            hour depending on if the planner event is in the past, present or
            future as indicated by the colors: grey, red and green. Built using
            Bootstrap, jQuery and Moment.js.
          </p>
          <a
            href="https://jfisher396.github.io/workday-scheduler/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark mx-auto portBtn"
          >
            View App
          </a>
          <a
            href="https://github.com/jfisher396/workday-scheduler"
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
