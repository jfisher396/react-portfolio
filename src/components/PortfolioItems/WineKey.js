import React, { Component } from "react";
import winekeygif from "../../media/Wine Key animation.gif";

export default class WineKey extends Component {
  render() {
    return (
      <div className="card h-100">
        <img
          src={winekeygif}
          className="img img-thumbnail"
          alt="screenshot of Wine Key"
        />
        <div className="card-body">
          <h4 className="card-title">Wine Key</h4>
          <p className="card-text port-card">
            Wine Key is an interactive wine inventory tool for a small restaurant chain. Easily add, modify
            or delete items in a location's wine inventory, as well as
            search for bottles that may exist elsewhere within
            the company. This was a group project.
          </p>
          <p>
            To login to page, simply enter a fake name and email address to
            "sign up".
          </p>
          <div className="portBtnDiv">
          <a
            href="https://fv-winekey.herokuapp.com/auth/login"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark mx-auto portBtn"
          >
            Visit Site
          </a>
          <a
            href="https://github.com/arielbs1991/Wine-Key"
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
