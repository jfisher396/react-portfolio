import React, { Component } from "react";
import employeeDirPic from "../../media/employee directory.png";

export default class EmployeeDirectory extends Component {
  render() {
    return (
      <div className="card h-100">
        <img
          src={employeeDirPic}
          className="img img-thumbnail"
          alt="screenshot of Employee Directory"
        />
        <div className="card-body">
          <h4 className="card-title">Employee Directory</h4>
          <p className="card-text port-card">
            A directory that can be used to view current employees and their
            contact information. Employees can be searched by first or last name
            and sorted by last name as well. Built using React, Bootstrap and
            the randomuser.me API.
          </p>
          <a
            href="https://polar-harbor-03343.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark mx-auto portBtn"
          >
            View Site
          </a>
          <a
            href="https://github.com/jfisher396/employee-directory"
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
