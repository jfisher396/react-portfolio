import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

class Navbar extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link to="/">James Fisher</Link>
            <div className="collapse navbar-collapse">
              
                  <Link to="/about">About Me</Link>
                
                  <Link to="/portfolio">Portfolio</Link>
                
                  <Link to="/contact">Contact</Link>
                
            </div>
          </nav>
        );
    }
}

export default Navbar