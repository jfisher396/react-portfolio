import React, { Component } from "react";
import googleBooksPic from "../../media/googlebooks.png";

export default class GoogleBooks extends Component {
  render() {
    return (
      <div className="card h-100">
        <img
          src={googleBooksPic}
          className="img img-thumbnail"
          alt="screenshot of google books"
        />
        <div className="card-body">
          <h4 className="card-title">Google Books Search</h4>
          <p className="card-text port-card">
            A portal for searching and saving books found in Google Books. Built
            using React.js, Bootstrap and the Google Books API.
          </p>
          <a
            href="https://serene-plains-62944.herokuapp.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark mx-auto portBtn"
          >
            Visit Site
          </a>
          <a
            href="https://github.com/jfisher396/google-books-search"
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
