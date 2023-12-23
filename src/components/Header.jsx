import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary navbar">
        <Container>
          <Navbar.Brand href="/">Blogs</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link><NavLink to="/blogform">Add Blog</NavLink></Nav.Link>
              <Nav.Link><NavLink to="/blogDetails">Blogs</NavLink></Nav.Link>
            </Nav>
            <Nav>
                <NavDropdown title="User" id="collapsible-nav-dropdown">
                  <NavDropdown.Item><NavLink to="/">signup</NavLink></NavDropdown.Item>
                  <NavDropdown.Item>
                    Account
                  </NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Header