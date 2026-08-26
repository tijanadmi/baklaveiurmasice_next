"use client";

import { useState } from "react";
import { menuCategories, products } from "../data/products";
import ProductCard from "./ProductCard";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("slava");
  const category = menuCategories.find((item) => item.id === activeCategory);
  const occasion = {
    id: activeCategory,
    label: category.label,
  };

  return (
    <section id="menu" className="section menu-section" data-reveal>
      <div className="section-heading centered">
        <p className="eyebrow">IZVOLITE, BIRAJTE BAKLAVE I URMAŠICE</p>
        <h2>Koja situacija je danas vaša?</h2>
        <p>
          Izaberite baklave i urmašice i klikom na <kbd>+</kbd> dodajte ih u korpu. Zatim
          popunite formu ispod i pošaljite nam detalje za dostavu. Kontaktiraćemo vas
          telefonom za tačno vreme dostave.
        </p>
      </div>

      <div className="tabs occasion-tabs" role="tablist" aria-label="Izbor povoda">
        {menuCategories.map((item) => (
          <button
            key={item.id}
            className={activeCategory === item.id ? "active" : ""}
            type="button"
            onClick={() => setActiveCategory(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>

      <div className="menu-category-intro">
        <h3>{category.title}</h3>
        <p>{category.description}</p>

        {category.details?.length > 0 && (
          <ul className="menu-category-points">
            {category.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="products">
        {products[activeCategory].map((product) => (
          <ProductCard product={product} occasion={occasion} key={product.id} />
        ))}
      </div>

      <details className="menu-details">
        <summary>Kako pripremamo naše slatkiše?</summary>
        <p>
          Baklave pravimo od pšeničnih kora, mlevenih i seckanih orašastih plodova,
          putera, margarina (posna varijanta) i šećera. Veličina komada je 2x2 cm.
          Urmašice pravimo od brašna, jaja, putera i šećera. Veličina komada je do 7 cm. I
          baklave i urmašice prelivamo agdom od vode, šećera i limuna. Sve pravimo ručno i
          po porudžbini.
        </p>
      </details>
    </section>
  );
}
