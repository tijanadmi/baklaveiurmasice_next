"use client";

import { useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../lib/formatters";

export default function CartCheckout() {
  const { items, itemCount, totalPrice, removeItem, clearCart } = useCart();
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
  const successMessageRef = useRef(null);
  const requiredFieldProps = {
    required: true,
    title: "Popuni ovo polje.",
    onInvalid: (event) => {
      if (event.currentTarget.validity.valueMissing) {
        event.currentTarget.setCustomValidity("Popuni ovo polje.");
      }
    },
    onInput: (event) => event.currentTarget.setCustomValidity(""),
  };

  useEffect(() => {
    if (status !== "success" || !window.matchMedia("(max-width: 760px)").matches) return;

    successMessageRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [status]);

  async function submitOrder(event) {
    event.preventDefault();
    if (!items.length) return;
    const form = event.currentTarget;
    setStatus("sending");
    setError("");
    const customer = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch("/api/order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ customer, items, totalPrice }),
      });
      const result = await response.json();
      if (!response.ok)
        throw new Error(result.error || "Porudžbinu nije moguće poslati.");

      clearCart();
      form.reset();
      setStatus("success");
    } catch (requestError) {
      setError(requestError.message);
      setStatus("idle");
    }
  }

  return (
    <section id="cart" className="section cart-section">
      <div className="section-heading centered">
        <p className="eyebrow">Korpa</p>
        <h2>Pregled porudžbine</h2>
        <p>Izaberite proizvode i pošaljite nam detalje za dostavu.</p>
      </div>
      {status === "success" && (
        <div className="order-success" ref={successMessageRef}>
          <span>✓</span>
          <h3>
            Porudžbina je stigla do nas. <span aria-hidden="true">❤️</span>
          </h3>
          <p>
            Sada je red na nas da zasukamo rukave i napravimo vaše baklave i urmašice.
          </p>
          <a href="#menu" className="button" onClick={() => setStatus("idle")}>
            Započni novu porudžbinu
          </a>
        </div>
      )}
      <div className="cart-layout">
        <div className="cart-items">
          {items.length === 0 ? (
            <div className="empty-cart">
              <span>🧁</span>
              <h3>Korpa je prazna</h3>
              <p>
                Izaberite proizvode iz menija i ovde će se pojaviti pregled porudžbine.
              </p>
              <a href="#menu" className="text-link" onClick={() => setStatus("idle")}>
                Idi na meni →
              </a>
            </div>
          ) : (
            <>
              <div className="cart-lines">
                {items.map((item) => (
                  <div className="cart-line" key={item.id}>
                    <div>
                      <h3>{item.name}</h3>
                      <span>
                        {item.amountLabel} · {item.quantity}{" "}
                        {item.quantity === 1 ? "pakovanje" : "pakovanja"}
                        {item.occasionLabel && <small>Povod: {item.occasionLabel}</small>}
                      </span>
                    </div>
                    <strong>{formatPrice(item.totalPrice)}</strong>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      aria-label={`Ukloni ${item.name}`}
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart-total">
                <span>Ukupno proizvoda ({itemCount})</span>
                <strong>{formatPrice(totalPrice)}</strong>
                <button type="button" onClick={clearCart}>
                  Isprazni korpu
                </button>
              </div>
            </>
          )}
        </div>
        <form className="checkout-form" onSubmit={submitOrder}>
          <h3>Podaci za poručivanje</h3>
          <label>
            Ime i prezime
            <input name="name" {...requiredFieldProps} />
          </label>
          <label>
            Kontakt telefon
            <input name="phone" type="tel" {...requiredFieldProps} />
          </label>
          <label>
            E-mail za potvrdu porudžbine
            <input name="email" type="email" {...requiredFieldProps} />
          </label>
          <label>
            Adresa za isporuku
            <input name="address" {...requiredFieldProps} />
          </label>
          <label>
            Željeni datum isporuke
            <input name="deliveryDate" type="date" {...requiredFieldProps} />
          </label>
          <label>
            Napomena <small>(opciono)</small>
            <textarea
              name="note"
              rows="3"
              placeholder="Na primer: želim pakovanje u šarene papirne korpice"
            />
          </label>
          <button
            className="button"
            type="submit"
            disabled={!items.length || status === "sending"}
          >
            {status === "sending" ? "Šaljemo..." : "Pošalji porudžbinu"}
          </button>
          {error && <p className="form-error">{error}</p>}
        </form>
      </div>
    </section>
  );
}
