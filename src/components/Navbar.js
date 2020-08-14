import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap' 
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (

      <Navbar bg="light" expand="lg" className="fixed-top mt-80 navLinks">
        <Navbar.Brand><Link to="/" className="link siteTitle">James Fisher</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link><Link to="/about" className="link">About Me</Link></Nav.Link>
            <Nav.Link><Link to="/portfolio" className="link">Portfolio</Link></Nav.Link>
            <Nav.Link><Link to="/contact" className="link">Contact</Link></Nav.Link>
            
          </Nav>
        
        </Navbar.Collapse>
      </Navbar>


      // <Navbar bg="dark" expand="lg">
      //   <div className="navbar-brand">
      //     <Link to="/">James Fisher</Link>
      //   </div>

        
      //     <Link to="/about">About Me</Link>
        
        
      //     <Link to="/portfolio">Portfolio</Link>
        
       
      //     <Link to="/contact">Contact</Link>
        
      // </Navbar>
    );
  }
}

export default NavBar