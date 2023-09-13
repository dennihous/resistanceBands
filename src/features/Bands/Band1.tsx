import React from 'react';
import Button from 'react-bootstrap/Button';
import './Band1.scss'

export default function Band1() {
  return (
    <div className="band-page">
      <div className="band-details">
        <img src={'/images/BlackBand.png'} alt="Resistance Band" className="resistance-band-image-page" />
        <div className="details">
          <h2>20Kg Resistance Band</h2>
          <p>
            Write some details about the resistance band here.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla ac justo vel urna cursus dictum in ac ex.
          </p>
        </div>
      </div>
      <div className="add-to-cart-button">
        <Button>Add to Cart</Button>
      </div>
    </div>
  );
}