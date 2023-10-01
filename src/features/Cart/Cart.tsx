import React, { useContext } from 'react';
import bandData from '../../../bandsData.json';
import { ShopContext } from '../context/ShopContext';
import CartItem from './CartItem';

export default function Cart() {
  const { cartItems }: any = useContext(ShopContext)
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cartItems">
        {bandData.bands.map((band) => {
          // if (cartItems[band.id] !== 0) {
            return <CartItem band={band} />
          // }
        })}
      </div>
    </div>
  )
}
