import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import Image from 'react-bootstrap/Image';
import "./testNavBar.scss";

export default function TestNavBar() {
  return (
    <div className="navbar">
      <div className="links">
        <Image
          src="/images/Icon-removed-background.png"
          alt="Logo"
          className="resistance-band-logo-image"
        />
        <Link to="/"> Resistance Bands </Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};