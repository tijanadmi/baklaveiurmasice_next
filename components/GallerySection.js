"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { galleryPhotos } from "../data/gallery";
import styles from "./GallerySection.module.css";

export default function GallerySection() {
  const [visibleCount, setVisibleCount] = useState(8);
  const [activeIndex, setActiveIndex] = useState(null);
  const dialogRef = useRef(null);
  const isOpen = activeIndex !== null;
  const photo = isOpen ? galleryPhotos[activeIndex] : null;

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function movePhoto(direction) {
    setActiveIndex(
      (index) => (index + direction + galleryPhotos.length) % galleryPhotos.length
    );
  }

  return (
    <section
      id="gallery"
      className={styles.section}
      aria-labelledby="gallery-title"
      data-reveal
    >
      <div className={styles.inner}>
        <div className={styles.heading}>
          <div>
            <p className="eyebrow">IZ NAŠE RADIONICE</p>
            <h2 id="gallery-title">
              Mali zalogaji, <span>lepi trenuci</span>
            </h2>
          </div>
          <p className={styles.intro}>
            Baklave, urmašice i pokloni koje pripremamo s pažnjom. Zavirite u našu
            galeriju.
          </p>
        </div>
        <div className={styles.grid}>
          {galleryPhotos.slice(0, visibleCount).map((item, index) => (
            <button
              className={styles.tile}
              key={item.src}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Uvećaj: ${item.alt}`}
              aria-haspopup="dialog"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 600px) 45vw, (max-width: 960px) 30vw, (max-width: 1480px) 23vw, 320px"
              />
              <span className={styles.zoom} aria-hidden="true">
                ↗
              </span>
            </button>
          ))}
        </div>
        <div className={styles.more}>
          <span aria-live="polite">
            Prikazano {Math.min(visibleCount, galleryPhotos.length)} od{" "}
            {galleryPhotos.length} fotografija
          </span>
          {visibleCount < galleryPhotos.length && (
            <button
              className="button"
              type="button"
              onClick={() => setVisibleCount((count) => count + 8)}
            >
              Prikaži još fotografija
            </button>
          )}
        </div>
      </div>
      <dialog
        ref={dialogRef}
        className={styles.dialog}
        aria-label="Pregled fotografije"
        onClose={() => setActiveIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialogRef.current.close();
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            movePhoto(event.key === "ArrowRight" ? 1 : -1);
          }
        }}
      >
        {photo && (
          <div className={styles.viewer}>
            <div className={styles.toolbar}>
              <span aria-live="polite">
                {activeIndex + 1} / {galleryPhotos.length}
              </span>
              <button
                type="button"
                onClick={() => dialogRef.current.close()}
                aria-label="Zatvori fotografiju"
              >
                ✕
              </button>
            </div>
            <div className={styles.fullImage}>
              <Image src={photo.src} alt={photo.alt} fill sizes="90vw" />
            </div>
            <div className={styles.controls}>
              <button
                type="button"
                onClick={() => movePhoto(-1)}
                aria-label="Prethodna fotografija"
              >
                ←
              </button>
              <span>{photo.alt}</span>
              <button
                type="button"
                onClick={() => movePhoto(1)}
                aria-label="Sledeća fotografija"
              >
                →
              </button>
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
