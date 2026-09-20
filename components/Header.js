"use client";

import { useEffect, useRef, useState } from "react";
import { useCart } from "../context/CartContext";

const navigationItems = [
  ["#hero", "Dobro došli"],
  ["#about", "Zašto baklave i urmašice?"],
  ["#menu", "Izvolite, birajte"],
  ["#about-story", "Malo o nama"],
  ["#gallery", "Galerija"],
  ["#cart", "Korpa"],
  ["#contact", "Kontaktirajte nas"],
];

export default function Header() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }
    function handlePointerDown(event) {
      if (!headerRef.current?.contains(event.target)) setMenuOpen(false);
    }
    const desktop = window.matchMedia("(min-width: 1321px)");
    function handleResize(event) {
      if (event.matches) setMenuOpen(false);
    }
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handlePointerDown);
    desktop.addEventListener("change", handleResize);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handlePointerDown);
      desktop.removeEventListener("change", handleResize);
    };
  }, [menuOpen]);

  return (
    <header className="site-header" ref={headerRef}>
      <a className="brand" href="#hero" onClick={() => setMenuOpen(false)}>
        <span className="brand-mark">B&amp;U</span>
      </a>
      <nav
        id="main-navigation"
        aria-label="Glavna navigacija"
        className={menuOpen ? "open" : ""}
      >
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
        onClick={() => setMenuOpen(false)}
      >
        <span>Korpa</span>
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M3 3h2l2.2 11.2a2 2 0 0 0 2 1.6h8.7a2 2 0 0 0 2-1.6L21 7H7" />
          <circle cx="10" cy="20" r="1" />
          <circle cx="18" cy="20" r="1" />
        </svg>
        <span className="cart-badge">{itemCount}</span>
      </a>
      <button
        ref={toggleRef}
        type="button"
        className="menu-toggle"
        aria-label={menuOpen ? "Zatvori meni" : "Otvori meni"}
        aria-expanded={menuOpen}
        aria-controls="main-navigation"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true">
          {menuOpen ? (
            <path d="m6 6 12 12M6 18 18 6" />
          ) : (
            <path d="M4 7h16M4 12h16M4 17h16" />
          )}
        </svg>
      </button>
    </header>
  );
}
