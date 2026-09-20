export default function DeliverySection() {
  return (
    <section id="delivery" className="section delivery-section" data-reveal>
      <div className="section-heading section-heading-left">
        <p className="eyebrow">BESPLATNA DOSTAVA</p>
        <h2>
          Dostava je uključena <span>u crvenoj zoni</span>
        </h2>
      </div>

      <div className="delivery-content">
        <div className="delivery-map" aria-label="Mapa područja besplatne dostave">
          <img
            src="/assets/img/delivery.png"
            alt="Mapa područja besplatne dostave"
            className="delivery-map-image"
          />
        </div>

        <div className="delivery-copy">
          <p>
            Mapa besplatne dostave važi za Slavska pakovanja od 1 kg i od 1/2 kg.
            Minimalna količina porudžbine za besplatnu dostavu je 1 kg.
          </p>

          <ul>
            <li>Za ostala pakovanja, dostava se naplaćuje po kilometraži.</li>
            <li>
              Za sva pakovanja besplatno preuzimanje moguće je kod Vera na Konjarniku.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
