"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../lib/formatters";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [grams, setGrams] = useState(1000);
  const [added, setAdded] = useState(false);

  function addToCart() {
    addItem(product, grams);
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <article className="product">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.ingredients}</p>
      <strong>1 kg — {formatPrice(product.prices[1000])}</strong>
      <strong>1/2 kg — {formatPrice(product.prices[500])}</strong>
      <div className="product-order">
        <label>
          <span>Pakovanje</span>
          <select
            value={grams}
            onChange={(event) => setGrams(Number(event.target.value))}
          >
            <option value="500">500 g</option>
            <option value="1000">1 kg</option>
          </select>
        </label>
        <button
          className={`add-to-cart ${added ? "is-added" : ""}`}
          type="button"
          onClick={addToCart}
          aria-label={`Dodaj proizvod ${product.name} u korpu`}
          title="Dodaj u korpu"
        >
          {added ? "✓" : "+"}
        </button>
      </div>
    </article>
  );
}
