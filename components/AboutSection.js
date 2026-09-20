import styles from "./AboutSection.module.css";

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

const benefitIcons = [
  "m12 3 2.8 5.7 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.6l6.2-.9Z",
  "M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21l8.8-8.6a5.5 5.5 0 0 0 0-7.8Z",
  "M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM12 7v5l3 2",
  "M8 3v4M16 3v4M3 10h18M5 5h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2ZM9 15l2 2 4-4",
  "M3 8h18v4H3ZM5 12v9h14v-9M12 8v13M12 8H8a3 3 0 1 1 3-3l1 3Zm0 0h4a3 3 0 1 0-3-3l-1 3Z",
  "m12 3 8 3v6c0 5-8 9-8 9s-8-4-8-9V6l8-3ZM8 12l3 3 5-5",
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className={styles.section}
      aria-labelledby="about-title"
      data-reveal
    >
      <div className={styles.inner}>
        <div className={styles.heading}>
          <div>
            <p className={styles.eyebrow}>BIRATE PAŽLJIVO? I MI ISTO</p>
            <h2 id="about-title" className={styles.title}>
              Zašto baš naše <span>baklave i urmašice</span>
            </h2>
          </div>
          <p className={styles.intro}>
            Zato što premijum domaće sitne kolače pripremamo sa istom pažnjom sa kojom ih
            vi birate za vama drage ljude.
          </p>
        </div>
        <div className={styles.benefits}>
          {benefits.map(([title, description], index) => (
            <article className={styles.card} key={title}>
              <span className={styles.icon} aria-hidden="true">
                <svg viewBox="0 0 24 24">
                  <path d={benefitIcons[index]} />
                </svg>
              </span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
