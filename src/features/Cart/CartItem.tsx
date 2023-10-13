import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import './CartItem.scss';

export default function  CartItem(props: any) {
  const { id, name, price, imageUrl } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <img src={imageUrl} className="cartItemImage" />
      <div className="description">
        <p>
          <b>{name}</b>
        </p>
        <p> Price: £{price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)} className="cartItemButton"> - </button>
          <input
            value={(cartItems as any)[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            className="cartItemQuantity"
          />
          <button onClick={() => addToCart(id)} className="cartItemButton"> + </button>
        </div>
      </div>
    </div>
  );
};