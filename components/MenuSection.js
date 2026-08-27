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
        <details className="menu-details menu-details-intro">
          <summary>Kako pripremamo naše slatkiše?</summary>
          <p>
            Baklave pravimo od pšeničnih kora, mlevenih i seckanih orašastih plodova,
            putera, margarina (posna varijanta) i šećera. Veličina komada je 2x2 cm.
            Urmašice pravimo od brašna, jaja, putera i šećera. Veličina komada je do 7 cm.
            I baklave i urmašice prelivamo agdom od vode, šećera i limuna. Sve pravimo
            ručno i po porudžbini.
          </p>
        </details>
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

      <details className="menu-details menu-order-details">
        <summary>A sada poručite</summary>
        <div className="menu-order-guide">
          <ol className="order-steps">
            <li>
              <span>1</span>
              <div>
                <strong>Izaberite poslastice</strong>
                <p>
                  Birajte povod, pa vrstu i pakovanje, a zatim dodajte u korpu klikom na
                  &quot;Dodaj u korpu&quot;.
                </p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <strong>Proverite korpu</strong>
                <p>
                  U korpi pregledajte vrstu, količine i ukupnu cenu. Unesite podatke za
                  dostavu.
                </p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <strong>Pošaljite porudžbinu</strong>
                <p>
                  Kliknite na &quot;Pošalji porudžbinu&quot; i nama stiže kompletan
                  pregled porudžbine, a vama naš mejl potvrde da smo primili porudžbinu.
                </p>
              </div>
            </li>
            <li>
              <span>4</span>
              <div>
                <strong>Potvrda isporuke / preuzimanja</strong>
                <p>Kontaktiraćemo vas za dogovor oko tačnog vremena isporuke.</p>
              </div>
            </li>
          </ol>
          <p>
            Porudžbine primamo najmanje četiri dana unapred. Dostava je dostupna na
            teritoriji Beograda, a preuzimanje je moguće po dogovoru.
          </p>
          <a className="button" href="#menu">
            Izvolite birajte
          </a>
        </div>
      </details>
    </section>
  );
}
