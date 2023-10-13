import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Image from 'react-bootstrap/Image';
import "./TestNavBar.scss";

export default function TestNavBar() {
  return (
    <div className="navbar">
      <Link to="/">
        <Image
          src="/images/Icon-removed-background.png"
          alt="Logo"
          className="resistance-band-logo-image"
        />
      </Link>
      <div className="links">
        <Link to="/"> Resistance Bands </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};