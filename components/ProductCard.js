"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../lib/formatters";

export default function ProductCard({ product, occasion }) {
  const { addItem } = useCart();
  const [selection, setSelection] = useState(() =>
    Object.fromEntries(
      product.optionGroups.map((group) => [group.id, group.choices[0].value])
    )
  );
  const [quantity, setQuantity] = useState(product.defaultQuantity ?? 1);
  const [added, setAdded] = useState(false);
  const selectedVariant = product.variants.find((variant) =>
    Object.entries(variant.options).every(([key, value]) => selection[key] === value)
  );

  function choiceIsAvailable(groupId, choiceValue) {
    return product.variants.some(
      (variant) =>
        variant.options[groupId] === choiceValue &&
        Object.entries(variant.options).every(
          ([key, value]) => key === groupId || selection[key] === value
        )
    );
  }

  const hasCustomQuantity = Boolean(product.customQuantity);
  const finalQuantity = hasCustomQuantity ? quantity : 1;
  const finalAmountLabel = hasCustomQuantity
    ? `${finalQuantity} komada`
    : selectedVariant?.amountLabel;
  const finalPrice = selectedVariant ? selectedVariant.price * finalQuantity : 0;

  function addToCart() {
    if (!selectedVariant) return;

    addItem({
      id: `${product.id}-${selectedVariant.id}-${occasion.id}`,
      name: selectedVariant.name,
      amountLabel: finalAmountLabel,
      occasionLabel: occasion.label,
      price: selectedVariant.price,
      quantity: finalQuantity,
    });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  }

  return (
    <article className="product">
      <img src={product.image} alt={product.name} />
      <div className="product-content">
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <div className="product-options">
          {product.optionGroups.map((group) => (
            <label key={group.id}>
              <span>{group.label}</span>
              <select
                value={selection[group.id]}
                onChange={(event) =>
                  setSelection((currentSelection) => ({
                    ...currentSelection,
                    [group.id]: event.target.value,
                  }))
                }
              >
                {group.choices.map((choice) => (
                  <option
                    key={choice.value}
                    value={choice.value}
                    disabled={!choiceIsAvailable(group.id, choice.value)}
                  >
                    {choice.label}
                    {!choiceIsAvailable(group.id, choice.value) &&
                      " (trenutno nije dostupno)"}
                  </option>
                ))}
              </select>
            </label>
          ))}

          {hasCustomQuantity && (
            <label className="quantity-field">
              <span>Broj komada</span>
              <input
                type="number"
                min={10}
                max={100}
                step={1}
                value={quantity}
                onChange={(event) => setQuantity(Number(event.target.value) || 10)}
              />
            </label>
          )}
        </div>
      </div>
      {selectedVariant && (
        <div className="product-order">
          <div className="product-price">
            <span>{finalAmountLabel}</span>
            <strong>{formatPrice(finalPrice)}</strong>
          </div>
          <button
            className={`add-to-cart ${added ? "is-added" : ""}`}
            type="button"
            onClick={addToCart}
            aria-label={`Dodaj proizvod ${selectedVariant.name} u korpu`}
            title="Dodaj u korpu"
          >
            {added ? "✓" : "+"}
          </button>
        </div>
      )}
    </article>
  );
}
