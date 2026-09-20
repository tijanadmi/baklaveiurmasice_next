"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./HeroSection.module.css";

const photos = [
  {
    src: "/assets/img/hero/hero-naslovna1-krug.png",
    alt: "Baklava i urmašica sa orasima na tanjiru",
    position: "center",
  },
  {
    src: "/assets/img/hero/hero2.jpg",
    alt: "Domaća baklava sa bogatim nadevom od oraha",
    position: "center",
  },
  {
    src: "/assets/img/hero/hero3.jpg",
    alt: "Domaće urmašice u sirupu sa kriškama limuna",
    position: "center 58%",
  },
];

export default function HeroSection() {
  const [activePhoto, setActivePhoto] = useState(0);
  const changePhoto = (step) => {
    setActivePhoto((current) => (current + step + photos.length) % photos.length);
  };

  return (
    <section id="hero" className={`hero ${styles.section}`}>
      <div className="hero-copy">
        <p className="eyebrow">PREMIJUM DOMAĆI SITNI KOLAČI</p>
        <h1>
          Baklave i <span>urmašice</span>
        </h1>
        <p className="lead">
          Za sladokusce, hedoniste i ljubitelje hrane proverenog kvaliteta. Tradicionalni
          recept, sveže i ručno rađene.
        </p>
        <div className="actions">
          <a className="button" href="#menu">
            Evo kako možemo da vam pomognemo
          </a>
        </div>
      </div>
      <div
        className={`hero-image ${styles.carousel}`}
        role="region"
        aria-roledescription="karusel"
        aria-label="Fotografije baklava i urmašica"
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            changePhoto(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        <div className={styles.frame} id="hero-photos">
          {photos.map((photo, index) => (
            <div
              key={photo.src}
              className={`${styles.slide} ${index === activePhoto ? styles.active : ""}`}
              aria-hidden={index !== activePhoto}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 760px) 330px, (max-width: 1360px) 40vw, 540px"
                preload={index === 0}
                style={{ objectPosition: photo.position }}
              />
            </div>
          ))}
        </div>
        <button
          type="button"
          className={`${styles.arrow} ${styles.previous}`}
          onClick={() => changePhoto(-1)}
          aria-label="Prethodna fotografija"
          aria-controls="hero-photos"
        >
          ←
        </button>
        <button
          type="button"
          className={`${styles.arrow} ${styles.next}`}
          onClick={() => changePhoto(1)}
          aria-label="Sledeća fotografija"
          aria-controls="hero-photos"
        >
          →
        </button>
        <div className={styles.dots}>
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              onClick={() => setActivePhoto(index)}
              aria-label={`Prikaži fotografiju ${index + 1}`}
              aria-current={index === activePhoto ? "true" : undefined}
              aria-controls="hero-photos"
            >
              <span />
            </button>
          ))}
        </div>
        <span
          className={styles.status}
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          Fotografija {activePhoto + 1} od {photos.length}
        </span>
      </div>
    </section>
  );
}
