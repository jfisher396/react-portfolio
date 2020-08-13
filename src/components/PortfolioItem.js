import React, { Component } from 'react'

export default class PortfolioItem extends Component {
    render() {
        return (
          <div className="container">
            <div className="col-md-6">
              <div className="card h-100">
                <img
                  src="./media/winekeydesktop.jpg"
                  className="img img-thumbnail"
                  alt="screenshot of Wine Key"
                />
                <div className="card-body">
                  <h4 className="card-title">Wine Key</h4>
                  <p className="card-text port-card">
                    Wine Key is an interactive wine inventory tool for Fire &
                    Vine Hospitality. With Wine Key, a manager is able to easily
                    add, modify or delete items in their own location's wine
                    inventory, as well as search for bottles that they need that
                    may exist elsewhere within the company.
                  </p>
                  <a
                    href="https://fv-winekey.herokuapp.com/auth/login"
                    className="btn btn-dark mx-auto"
                  >Visit Wine Key</a>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

