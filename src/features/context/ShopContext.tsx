import React, { createContext, useState } from "react";
import bandsData from '../../../bandsData.json'

type itemInfoType = {
    id: number;
    name: string;
    imageUrl: string;
    price: number;
} | undefined

export const ShopContext = createContext({
  cartItems: {},
  addToCart: (itemId: number) => {},
  updateCartItemCount: (newAmount: any, itemId: number) => {},
  removeFromCart: (itemId: number) => {},
  getTotalCartAmount: () => 0 as number,
  checkout: () => {},
});

const getDefaultCart = () => {
  let cart: any = {};
  for (let i = 1; i < bandsData.bands.length + 1; i++) {
    cart[i] = 0;
  }
  return cart;
};

export const ShopContextProvider = (props: any) => {
  const [cartItems, setCartItems] = useState<Record<number, number>>(getDefaultCart());

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo: itemInfoType = bandsData.bands.find((product: any) => product.id === Number(item))!;
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };

  const removeFromCart = (itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const updateCartItemCount = (newAmount: any, itemId: number) => {
    setCartItems((prev: any) => ({ ...prev, [itemId]: newAmount }));
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
