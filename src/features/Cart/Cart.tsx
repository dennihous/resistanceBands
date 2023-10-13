import React, { useContext } from 'react';
import bands from '../../../bandsData.json';
import { ShopContext } from '../context/ShopContext';
import CartItem from './CartItem';
import { useNavigate } from "react-router-dom";
import './Cart.scss';

export default function Cart() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();

  return (
    <div className="cart">
      <div className='heading'>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {bands.bands.map((product) => {
          if ((cartItems as any)[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>

      {totalAmount > 0 ? (
        <div className="checkoutContainer">
          <div className="subtotal">
            <p> Subtotal: £{totalAmount.toFixed(2)} </p>
          </div>
          <button onClick={() => navigate("/")} className='checkoutButton'> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
            className='checkoutButton'
          >
          Checkout
          </button>
        </div>
      ) : (
        <h1 className='emptyCart'> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
};