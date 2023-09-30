import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import './ResistanceBand.scss';
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

type ResistanceBandProps = {
  id: number;
  name: string;
  imageUrl: string;
  price: string
}

export default function ResistanceBand({ name, imageUrl, price, id }: ResistanceBandProps) {
  const { addToCart, cartItems }: any = useContext(ShopContext);
  const cartItemAmount = cartItems[id];

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
      </Link>
      <Button className='add-to-cart-button' onClick={() => addToCart(id)}>
        Add to Cart {cartItemAmount > 0 && <>({cartItemAmount})</>}</Button>
    </div>
  )
}