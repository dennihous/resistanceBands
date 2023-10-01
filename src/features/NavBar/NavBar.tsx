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
                <NavDropdown.Item>
                  <Link to={`bands/1`}>20Kg</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={`bands/2`}>40Kg</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={`bands/3`}>60Kg</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={`bands/4`}>80Kg</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to={`bands/5`}>100Kg</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link href="/bands/6" className="title-components">Band Collection</Nav.Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/cart" className="title-components">Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

// import React from "react";
// import { Link } from "react-router-dom";
// import { ShoppingCart } from "phosphor-react";
// import "./navbar.css";

// export default function Navbar() {
//   return (
//     <div className="navbar">
//       <div className="links">
//         <Link to="/"> Shop </Link>
//         <Link to="/contact"> Contact </Link>
//         <Link to="/cart">
//           <ShoppingCart size={32} />
//         </Link>
//       </div>
//     </div>
//   );
// };
