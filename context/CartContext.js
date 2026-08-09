"use client";

import { createContext, useContext, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]);

  function addItem(product, grams) {
    const packagePrice = product.prices[grams];
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);
      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                grams: item.grams + grams,
                totalPrice: item.totalPrice + packagePrice,
              }
            : item
        );
      }
      return [
        ...currentItems,
        {
          id: product.id,
          name: product.name,
          grams,
          totalPrice: packagePrice,
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
      itemCount: items.length,
      totalGrams: items.reduce((total, item) => total + item.grams, 0),
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
