export default function OrderSection() {
  return (
    <section id="order" className="section order" data-reveal>
      <div className="order-content">
        <div className="order-image" />
        <div className="order-copy">
          <h2>A sada poručite</h2>
          <ol className="order-steps">
            <li>
              <span>1</span>
              <div>
                <strong>Izaberite poslastice</strong>
                <p>
                  Birajte povod, pa vrstu i pakovanje, a zatim dodajte u korpu klikom na
                  &quot;+&quot;.
                </p>
              </div>
            </li>
            <li>
              <span>2</span>
              <div>
                <strong>Proverite korpu</strong>
                <p>
                  U korpi pregledajte vrstu, količine, i ukupnu cenu. Unesite podatke za
                  dostavu.
                </p>
              </div>
            </li>
            <li>
              <span>3</span>
              <div>
                <strong>Pošaljite porudžbinu</strong>
                <p>
                  Kliknite na &quot;Pošalji&quot; i nama stiže kompletan pregled
                  porudžbine, a vama naš mejl potvrde da smo primili porudžbinu.
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
      </div>
    </section>
  );
}
