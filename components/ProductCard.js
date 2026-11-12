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
  const [photoIndex, setPhotoIndex] = useState(0);
  const selectedVariant = product.variants.find((variant) =>
    Object.entries(variant.options).every(([key, value]) => selection[key] === value)
  );
  const hasImageFrame = ["slava", "svaki-dan", "pokloni", "klijenti"].includes(
    occasion.id
  );
  const rotateImage = selectedVariant?.imageRotation === 90;
  const activeImages = selectedVariant?.images ?? product.images;

  function choiceIsAvailable(groupId, choiceValue) {
    return product.variants.some(
      (variant) =>
        variant.options[groupId] === choiceValue &&
        Object.entries(variant.options).every(
          ([key, value]) => key === groupId || selection[key] === value
        )
    );
  }

  function showPreviousPhoto() {
    setPhotoIndex((currentIndex) =>
      currentIndex === 0 ? activeImages.length - 1 : currentIndex - 1
    );
  }

  function showNextPhoto() {
    setPhotoIndex((currentIndex) => (currentIndex + 1) % activeImages.length);
  }

  const hasCustomQuantity = Boolean(product.customQuantity);
  const finalQuantity = hasCustomQuantity ? quantity : 1;
  const finalAmountLabel = hasCustomQuantity
    ? `${finalQuantity} komada`
    : selectedVariant?.amountLabel;
  const finalPrice = selectedVariant ? selectedVariant.price * finalQuantity : 0;

  const selectedOptionSummary = product.optionGroups
    .filter((group) =>
      selectedVariant
        ? Object.prototype.hasOwnProperty.call(selectedVariant.options, group.id)
        : true
    )
    .map((group) => {
      const selectedChoice = group.choices.find(
        (choice) => choice.value === selection[group.id]
      );
      return selectedChoice ? selectedChoice.label : null;
    })
    .filter(Boolean);

  const selectedTypeLabel = product.optionGroups[0]?.choices.find(
    (choice) => choice.value === selection[product.optionGroups[0].id]
  )?.label;
  const priceSelectionLabel =
    selectedVariant?.selectionLabel ||
    [selectedTypeLabel, finalAmountLabel].filter(Boolean).join(" · ");

  const selectedProductName =
    selectedVariant?.name && selectedOptionSummary.length
      ? `${selectedVariant.name} · ${selectedOptionSummary.join(" · ")}`
      : selectedVariant?.name || product.name;

  function addToCart() {
    if (!selectedVariant) return;

    addItem({
      id: `${product.id}-${selectedVariant.id}-${occasion.id}`,
      name: selectedProductName,
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
      <div
        className={
          hasImageFrame
            ? `product-package-frame${activeImages?.length > 1 ? " product-package-frame-gallery" : ""}`
            : undefined
        }
      >
        <div
          className={
            hasImageFrame
              ? `product-package-photo${activeImages?.length > 1 ? " product-package-photo-gallery" : ""}${rotateImage ? " product-package-photo-rotated" : ""}`
              : undefined
          }
        >
          <img
            className={product.imageLayout === "portrait" ? "product-image-portrait" : ""}
            src={activeImages?.[photoIndex] ?? selectedVariant?.image ?? product.image}
            alt={`${product.name}${selectedVariant?.amountLabel ? ` — ${selectedVariant.amountLabel}` : ""}`}
            loading="lazy"
            style={{
              objectFit: selectedVariant?.imageFit,
              objectPosition: selectedVariant?.imagePosition,
            }}
          />
          {activeImages?.length > 1 && (
            <>
              <button
                className="product-photo-arrow product-photo-arrow-previous"
                type="button"
                onClick={showPreviousPhoto}
                aria-label="Prethodna fotografija"
              >
                <span aria-hidden="true">❮</span>
              </button>
              <span className="product-photo-count" aria-live="polite">
                {photoIndex + 1} / {activeImages.length}
              </span>
              <button
                className="product-photo-arrow product-photo-arrow-next"
                type="button"
                onClick={showNextPhoto}
                aria-label="Sledeća fotografija"
              >
                <span aria-hidden="true">❯</span>
              </button>
            </>
          )}
        </div>
      </div>
      <div className="product-content">
        <h3>{product.name}</h3>

        <div className="product-options">
          {product.optionGroups.map((group) =>
            group.showWhen &&
            selection[group.showWhen.groupId] !== group.showWhen.value ? null : (
              <div
                key={group.id}
                className={`product-option-group ${group.column ? `option-column-${group.column}` : ""}`}
                style={{ "--choice-count": group.choices.length }}
              >
                <span className="group-label">{group.label}</span>
                <div className="group-choices" role="group" aria-label={group.label}>
                  {group.choices.map((choice) => {
                    const isSelected = selection[group.id] === choice.value;
                    const isDisabled = !choiceIsAvailable(group.id, choice.value);

                    return (
                      <button
                        key={choice.value}
                        type="button"
                        className={`choice-pill ${isSelected ? "selected" : ""}`}
                        disabled={isDisabled}
                        aria-pressed={isSelected}
                        onClick={() => {
                          setSelection((currentSelection) => ({
                            ...currentSelection,
                            [group.id]: choice.value,
                          }));
                          setPhotoIndex(0);
                        }}
                      >
                        {choice.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )
          )}

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
            <strong>{formatPrice(finalPrice)}</strong>
            {priceSelectionLabel && <span>{priceSelectionLabel}</span>}
          </div>
          <button
            className={`add-to-cart ${added ? "is-added" : ""}`}
            type="button"
            onClick={addToCart}
            aria-label={`Dodaj proizvod ${selectedVariant.name} u korpu`}
            title="Dodaj u korpu"
          >
            {added ? "Dodato ✓" : "Dodaj u korpu"}
          </button>
        </div>
      )}
    </article>
  );
}
