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
      <div className="section-heading section-heading-left">
        <p className="eyebrow">Korpa</p>
        <h2>Pregled porudžbine</h2>
        <p>Izaberite proizvode i pošaljite nam detalje za dostavu.</p>
      </div>
      {status === "success" && items.length === 0 && (
        <div className="order-success" ref={successMessageRef} role="status">
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
      {(items.length > 0 || status !== "success") && (
        <div className={`cart-layout${items.length === 0 ? " cart-layout-empty" : ""}`}>
          <div className="cart-items">
            {items.length === 0 ? (
              <div className="empty-cart">
                <svg
                  viewBox="0 0 64 64"
                  className="empty-cart-baklava"
                  aria-hidden="true"
                  focusable="false"
                  fill="none"
                  stroke="#99602f"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="m5 32 5-7 6 3 6-5 7 4 7-4 7 5 6-3 10 8-7 18c-10 8-30 9-41 0Z"
                    fill="#fff3dc"
                    stroke="#d5b98e"
                  />
                  <path d="m14 22 25-7 12 9-1 19-26 8-11-10Z" fill="#d99a49" />
                  <path d="m24 29 27-5-1 19-26 8Z" fill="#efc77b" />
                  <path d="m14 30 10 7 26-7v5l-26 8-10-7Z" fill="#9f6333" stroke="none" />
                  <path
                    d="m15 26 9 7 25-7M15 29l9 7 25-7M15 38l9 7 25-7M16 41l8 7 24-7"
                    stroke="#ffe2a2"
                    strokeWidth="1.8"
                  />
                  <path
                    d="m13 22 3-3 6-1 6-3 6 1 5-2 5 3 4 2 4 5-5 1-5 3-6 1-6 2-6-1-4-3-4-1Z"
                    fill="#eab45e"
                  />
                  <path
                    d="m19 21 6-2 5 1m7-2 5 3 4 1m-22 4 5 1 7-2"
                    stroke="#ffe2a2"
                    strokeWidth="2"
                  />
                  <path
                    d="M29 18c-4-3-8 2-5 5 1 3 5 3 7 1 3 2 7-1 6-4 0-4-5-5-8-2Z"
                    fill="#b67c42"
                  />
                  <path d="m29 18 1 3-1 3m-4-4 3 1m4-2 2 2-2 2" stroke="#f5d096" />
                  <path
                    d="m5 32 7 7 5-2 6 6 7-2 7 3 7-5 6 1 9-7-7 18c-10 8-30 9-41 0Z"
                    fill="#fff7e8"
                    stroke="#d5b98e"
                  />
                  <path
                    d="m12 39 5 13m0-15 5 17m1-11 3 13m4-15 1 15m6-12-1 12m8-17-4 16m10-15-5 13m10-14-6 12"
                    stroke="#dfc8a5"
                  />
                </svg>
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
                          {item.occasionLabel && (
                            <small>Povod: {item.occasionLabel}</small>
                          )}
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
          {items.length > 0 && (
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
          )}
        </div>
      )}
    </section>
  );
}
