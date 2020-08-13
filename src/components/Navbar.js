import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="navbar-brand">
              <Link to="/">James Fisher</Link>
            </div>
            
              <Link to="/about">About Me</Link>
            
            
              <Link to="/portfolio">Portfolio</Link>
            
              <Link to="/contact">Contact</Link>
              
          </nav>
        );
    }
}

export default Navbar