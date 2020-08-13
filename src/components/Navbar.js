import React, { Component } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap' 
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <div className="navbar-brand">
          <Link to="/">James Fisher</Link>
        </div>

        
          <Link to="/about">About Me</Link>
        
        
          <Link to="/portfolio">Portfolio</Link>
        
       
          <Link to="/contact">Contact</Link>
        
      </Navbar>
    );
  }
}

export default NavBar