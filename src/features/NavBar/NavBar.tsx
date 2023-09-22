import React from "react";
import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

import './NavBar.scss';

export default function NavBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="centered-topbar">
          <Navbar.Brand href="/" className="resistance-band-title">
            <Image
              src="/images/Icon-removed-background.png"
              alt="Logo"
              className="resistance-band-logo-image"
            />
            Resistance Bands
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Select by weight" id="basic-nav-dropdown" className="title-components">
                <NavDropdown.Item href="/Bands">
                  <Link to={`bands/1`}>20Kg</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Bands">
                  <Link to={`bands/2`}>40Kg</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Bands">
                  <Link to={`bands/3`}>60Kg</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Bands">
                  <Link to={`bands/4`}>80Kg</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Bands">
                  <Link to={`bands/5`}>100Kg</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="/Bands">
                  <Link to={`bands/6`}>Band Collection</Link>
                </NavDropdown.Item>
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="/How-To-Use">
                  <Link to={`how-to-use`}>How to Use</Link>
                </NavDropdown.Item> */}
              </NavDropdown>
              <Nav.Link href="/basket" className="title-components">Basket</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}