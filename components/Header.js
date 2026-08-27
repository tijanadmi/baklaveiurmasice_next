"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

const navigationItems = [
  ["#hero", "Dobro došli"],
  ["#menu", "Izvolite, birajte"],
  ["#cart", "Korpa"],
  ["#about", "Zašto baklave i urmašice?"],
  ["#about-story", "Malo o nama"],
  ["#contact", "Kontaktirajte nas"],
];

export default function Header() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="brand" href="#hero" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark">B&amp;U</span>
      </a>
      <button
        className="menu-toggle"
        aria-label="Otvori meni"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>
      <nav className={menuOpen ? "open" : ""}>
        {navigationItems.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setMenuOpen(false)}>
            {label === "Korpa" ? `Korpa (${itemCount})` : label}
          </a>
        ))}
      </nav>
      <a
        className="header-order cart-button"
        href="#cart"
        aria-label={`Korpa, ${itemCount} artikala`}
        title="Otvori korpu"
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 3h2l2.2 11.2a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L21 7H7" />
          <circle cx="10" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
        </svg>
        <span className="cart-badge">{itemCount}</span>
      </a>
    </header>
  );
}
