import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap' 
import { Link } from 'react-router-dom'

class NavBar extends Component {
  render() {
    return (

      <Navbar bg="light" expand="lg">
        <Navbar.Brand><Link to="/">James Fisher</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link><Link to="/about">About Me</Link></Nav.Link>
            <Nav.Link><Link to="/portfolio">Portfolio</Link></Nav.Link>
            <Nav.Link><Link to="/contact">Contact</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Link to="/about">About Me</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/portfolio">Portfolio</Link></NavDropdown.Item>
              <NavDropdown.Item><Link to="/contact">Contact</Link></NavDropdown.Item>
            </NavDropdown>
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