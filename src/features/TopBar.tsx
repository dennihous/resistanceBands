import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './TopBar.scss';

export default function TopBar() {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="centered-topbar">
        <Navbar.Brand href="/" className="resistance-band-title">Resistance Bands</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" className="title-components">Home</Nav.Link>
            <Nav.Link href="/Bands" className="title-components">Bands</Nav.Link>
            <NavDropdown title="Select by weight" id="basic-nav-dropdown" className="title-components">
              <NavDropdown.Item href="/20Kg">
                20Kg
              </NavDropdown.Item>
              <NavDropdown.Item href="/40Kg">
                40Kg
              </NavDropdown.Item>
              <NavDropdown.Item href="/60Kg">
                60Kg
              </NavDropdown.Item>
              <NavDropdown.Item href="/80Kg">
                80Kg
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/How-To-Use">
                How to use
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/Contact" className="title-components">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}