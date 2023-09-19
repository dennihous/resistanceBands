import React from 'react';
import Button from 'react-bootstrap/Button';
import './ResistanceBand.scss';
import { Link } from 'react-router-dom'

type ResistanceBandProps = {
  id: number;
  name: string;
  imageUrl: string;
  price: string
}

export default function ResistanceBand({ name, imageUrl, price, id }: ResistanceBandProps) {
  return (
    <div className='product'>
      <Link to={`bands/${id}`}>
        <img src={imageUrl} alt={name} className="resistance-band-image" />
        <div className="description">
          <p>
            <b>{name}</b>
          </p>
          <p>£{price}</p>
        </div>
        <Button className='add-to-cart-button'>Add to Cart</Button>
      </Link>
    </div>
  )
}