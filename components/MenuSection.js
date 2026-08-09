"use client";

import { useState } from "react";
import { productCategories, products } from "../data/products";
import ProductCard from "./ProductCard";

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("orasi");

  return (
    <section id="menu" className="section menu-section" data-reveal>
      <div className="section-heading centered">
        <p className="eyebrow">Naš meni</p>
        <h2>Izaberite omiljeni ukus</h2>
        <p>U cene su uračunati pakovanje i isporuka prema uslovima poručivanja.</p>
      </div>
      <div className="tabs" role="tablist">
        {productCategories.map((category) => (
          <button
            key={category.id}
            className={activeCategory === category.id ? "active" : ""}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.label}
          </button>
        ))}
      </div>
      <div className="products">
        {products[activeCategory].map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
}
