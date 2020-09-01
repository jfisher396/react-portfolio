import React, { Component } from "react";
import meetingNeedsPic from "../../media/meetingneeds animated.gif";

export default class MeetingNeeds extends Component {
  render() {
    return (
      <div className="card h-100">
        <img
          src={meetingNeedsPic}
          className="img img-thumbnail"
          alt="screenshot of google books"
        />
        <div className="card-body">
          <h4 className="card-title">Meeting Your (AV) Needs</h4>
          <p className="card-text port-card">
            A mobile-first portal for quickly ordering audiovisual items for
            your meeting. Built using React.js, MongoDB, Nodemailer and
            Animate.css.
          </p>
          <div className="align-bottom">
            <a
              href="https://james-fisher-project-3.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-dark mx-auto portBtn"
            >
              Visit Site
            </a>
            <a
              href="https://github.com/jfisher396/meeting-your-av-needs"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light mx-auto portBtn"
            >
              View Repo
            </a>
          </div>
        </div>
      </div>
    );
  }
}
