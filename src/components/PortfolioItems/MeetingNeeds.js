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
                        A mobile-first portal for quickly ordering audiovisual items for your meeting. Built using React.js, MongoDB, Nodemailer and Animate.css.</p>
                    <a
                        href="https://james-fisher-project-3.herokuapp.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-dark mx-auto"
                    >
                        Visit Meeting Your (AV) Needs
          </a>
                </div>
            </div>
        );
    }
}