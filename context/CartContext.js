"use client";

import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(product) {
    setItems((currentItems) => {
      const itemQuantity = product.quantity ?? 1;
      const existingItem = currentItems.find((item) => item.id === product.id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + itemQuantity,
                totalPrice: item.totalPrice + product.price * itemQuantity,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: itemQuantity,
          totalPrice: product.price * itemQuantity,
        },
      ];
    });
  }

  function removeItem(productId) {
    setItems((currentItems) => currentItems.filter((item) => item.id !== productId));
  }

  function clearCart() {
    setItems([]);
  }

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      clearCart,
      itemCount: items.reduce((total, item) => total + item.quantity, 0),
      totalPrice: items.reduce((total, item) => total + item.totalPrice, 0),
    }),
    [items]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart mora biti korišćen unutar CartProvider-a.");
  return context;
}
