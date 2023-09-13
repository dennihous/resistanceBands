import React from 'react';
import Button from 'react-bootstrap/Button';
import './ResistanceBand.scss';

type ResistanceBandProps = {
  name: string;
  imageUrl: string;
  price: string
}

export default function ResistanceBand({ name, imageUrl, price }: ResistanceBandProps) {
  return (
    <div className='product'>
      <img src={imageUrl} alt={name} className="resistance-band-image" />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p>£{price}</p>
      </div>
      <Button className='add-to-cart-button'>Add to Cart</Button>
    </div>
  )
}