"use client";

import { useState } from "react";

export default function ContactSection() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");
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

  async function submitContact(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);
    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Poruku nije moguće poslati.");

      form.reset();
      setStatus("success");
    } catch (requestError) {
      setError(requestError.message);
      setStatus("idle");
    }
  }

  return (
    <section id="contact" className="section contact" data-reveal>
      <div className="section-heading centered">
        <p className="eyebrow">Kontaktirajte nas</p>
        <h2>Imate pitanje? Pišite nam.</h2>
        <p className="contact-intro">
          Odgovor stiže, a vaši slatki zalogaji su <a href="#menu">ovde</a>.
        </p>
      </div>
      <div className="contact-grid">
        <aside className="contact-details">
          <p>Tu smo za sva vaša pitanja i dogovor oko porudžbine.</p>
          <a
            className="contact-channel"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noreferrer"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" className="icon-dot" />
            </svg>
            <span>
              <b>Instagram</b>
              <small>Pošaljite nam DM</small>
            </span>
          </a>
          <a className="contact-channel" href="mailto:info@example.com">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="5" width="18" height="14" rx="2" />
              <path d="m4 7 8 6 8-6" />
            </svg>
            <span>
              <b>E-mail</b>
              <small>info@example.com</small>
            </span>
          </a>
          <a className="contact-channel contact-phone" href="tel:+38164123456">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6.6 3.5 9 3c.8-.2 1.6.3 1.9 1l1 3c.2.7 0 1.4-.6 1.8l-1.6 1.1a14 14 0 0 0 4.5 4.5l1.1-1.6c.4-.6 1.1-.8 1.8-.6l3 1c.7.3 1.2 1.1 1 1.9l-.5 2.4c-.2.9-1 1.5-1.9 1.5C10.4 19.5 4.5 13.6 4.5 5.4c0-.9.6-1.7 1.5-1.9Z" />
            </svg>
            <span>
              <b>Telefon</b>
              <small>+381 64 123 456</small>
            </span>
          </a>
          <div className="contact-note">
            Dostava je dostupna na teritoriji Beograda, uz dogovor za preuzimanje.
          </div>
        </aside>
        <form onSubmit={submitContact}>
          <input name="name" placeholder="Tvoje ime" {...requiredFieldProps} />
          <input
            type="email"
            name="email"
            placeholder="Tvoj mejl"
            {...requiredFieldProps}
          />
          <input name="subject" placeholder="Predmet" {...requiredFieldProps} />
          <textarea
            name="message"
            placeholder="Poruka"
            rows="6"
            {...requiredFieldProps}
          />
          <button className="button" type="submit" disabled={status === "sending"}>
            {status === "sending" ? "Šaljemo..." : "Pošalji poruku"}
          </button>
          {status === "success" && (
            <p className="form-success">
              <strong>
                Vaša poruka je upravo stigla na pravo mesto.{" "}
                <span aria-hidden="true">❤️</span>
              </strong>
              <span>Javljamo vam se čim izvučemo prste iz testa.</span>
            </p>
          )}
          {error && <p className="form-error">{error}</p>}
        </form>
      </div>
    </section>
  );
}
