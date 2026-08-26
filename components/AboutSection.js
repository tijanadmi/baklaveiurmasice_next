const benefits = [
  [
    "Vrhunski kvalitet",
    "Baklave i urmašice pripremamo za vas ručno, po porodičnom receptu i od pažljivo biranih sastojaka.",
  ],
  [
    "Domaći kolači, premijum iskustvo",
    "Spoj tradicionalnog recepta, vrhunskog kvaliteta i savremene estetike.",
  ],
  [
    "Pouzdanost na koju možete da računate",
    "Porudžbina stiže u dogovoreno vreme, pažljivo upakovana i spremna za posluženje ili poklanjanje.",
  ],
  [
    "Prilagođeno vašem povodu",
    "Bilo da birate poklon, pripremate posluženje za goste ili organizujete veliki događaj, pomoći ćemo vam da pronađete pravo rešenje.",
  ],
  [
    "Elegantna pakovanja",
    "Kutije i detalje osmišljavamo tako da baklave i urmašice ostave utisak i pre nego što otvorite kutiju.",
  ],
  [
    "Pažnja u svakom detalju",
    "Od prvog razgovora do poslednjeg zalogaja, želimo da budete sigurni da ste napravili pravi izbor.",
  ],
];

export default function AboutSection() {
  return (
    <section id="about" className="section about" data-reveal>
      <div className="section-heading centered">
        <p className="eyebrow">BIRATE PAŽLJIVO? I MI ISTO</p>
        <h2>
          Zašto baš naše <span>baklave i urmašice</span>
        </h2>
      </div>
      <div className="about-content">
        <blockquote className="about-intro">
          Zato što premijum domaće sitne kolače pripremamo sa istom pažnjom sa kojom ih vi
          birate za vama drage ljude.
        </blockquote>

        <div className="about-benefits">
          {benefits.map(([title, description]) => (
            <article key={title}>
              <h2>{title}</h2>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
