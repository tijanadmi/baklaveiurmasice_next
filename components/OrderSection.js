export default function OrderSection() {
  return (
    <section id="order" className="section order" data-reveal>
      <div className="section-heading centered order-heading">
        <p className="eyebrow">Kako poručiti</p>
      </div>
      <div className="order-content">
        <div className="order-image" />
        <div className="order-copy">
          <h2>Poručivanje je sada još jednostavnije</h2>
          <ol className="order-steps">
            <li>
              <span>1</span>
              <div>
                <strong>Izaberite poslastice</strong>
                <p>U meniju odaberite vrstu i pakovanje, a zatim je dodajte u korpu.</p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <strong>Proverite korpu</strong>
                <p>
                  U korpi možete pregledati količine, ukupnu cenu i uneti podatke za
                  dostavu.
                </p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <strong>Pošaljite porudžbinu</strong>
                <p>
                  Stiže nam kompletan pregled porudžbine, a mi vam se javljamo radi
                  potvrde.
                </p>
              </div>
            </li>
          </ol>
          <p>
            Porudžbine primamo najmanje četiri dana unapred. Dostava je dostupna na
            teritoriji Beograda, a preuzimanje je moguće po dogovoru.
          </p>
          <a className="button" href="#cart">
            Otvori korpu
          </a>
        </div>
      </div>
    </section>
  );
}
