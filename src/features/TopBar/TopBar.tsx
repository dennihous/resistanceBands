import React from "react";
import { Outlet } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Image from 'react-bootstrap/Image';

import './TopBar.scss';

export default function TopBar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container className="centered-topbar">
          <Navbar.Brand href="/home" className="resistance-band-title">
            <Image
              src="/images/Icon.jpeg" // Replace with the actual path to your image
              alt="Logo" // Provide an alt text for accessibility
              className="resistance-band-logo-image" // Apply any styling class you need
            />
            Resistance Bands
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
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
      <Outlet />
    </>
  );
}