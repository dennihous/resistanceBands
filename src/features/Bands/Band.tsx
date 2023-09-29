import React from 'react';
import Button from 'react-bootstrap/Button';
import './Band.scss'
import bandsData from '../../../bandsData.json'

export default function Band({index}: any) {
  return (
    <div className="band-page">
      <div className="left-column">
        <img
          src={bandsData.bands[index].imageUrl}
          alt="Resistance Band"
          className="resistance-band-image-page"
        />
      </div>
      <div className="right-column">
        <div className="band-details">
          <h2>{bandsData.bands[index].name}</h2>
          <p>
            Write some details about the {bandsData.bands[index].name} here.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nulla ac justo vel urna cursus dictum in ac ex.
          </p>
        </div>
        <div className="add-to-cart-button">
          <Button>Add to Cart</Button>
        </div>
      </div>  
    </div>
  );
}