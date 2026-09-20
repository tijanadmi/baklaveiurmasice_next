"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { reviews } from "../data/reviews";
import styles from "./TestimonialsSection.module.css";

export default function TestimonialsSection() {
  const [activeReview, setActiveReview] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveReview((index) => (index + 1) % reviews.length),
      5000
    );
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className={styles.section} data-reveal>
      <div className="section-heading section-heading-left">
        <p className="eyebrow">HVALA NA POVERENJU</p>
        <h2>
          Najlepše preporuke dolaze <span>od onih koji nam se vraćaju</span>
        </h2>
      </div>
      <div
        className="testimonial-carousel"
        aria-roledescription="carousel"
        aria-label="Mišljenja kupaca"
      >
        <button
          className="carousel-arrow previous"
          type="button"
          onClick={() =>
            setActiveReview((activeReview - 1 + reviews.length) % reviews.length)
          }
          aria-label="Prethodno mišljenje"
        >
          ←
        </button>
        <div className={styles.panel}>
          <div className={styles.photo}>
            <Image
              src="/assets/img/gallery/web/gallery-19.webp"
              alt="Baklave i urmašice poslužene uz šoljicu kafe"
              fill
              sizes="(max-width: 760px) 90vw, (max-width: 1480px) 30vw, 440px"
              className={styles.photoImage}
            />
          </div>
          <div className="carousel-viewport">
            <div
              className="carousel-track"
              style={{ transform: `translateX(-${activeReview * 100}%)` }}
            >
              {reviews.map((review, index) => (
                <article
                  className="testimonial-slide"
                  key={review.id}
                  aria-hidden={index !== activeReview}
                >
                  <div className="testimonial-copy">
                    <span className="quote-mark" aria-hidden="true">
                      “
                    </span>
                    <p>{review.quote}</p>
                    <div className="stars">★★★★★</div>
                    <div className={styles.author}>
                      <span className={styles.avatar} aria-hidden="true">
                        {review.name
                          .split(" ")
                          .slice(0, 2)
                          .map((part) => part[0])
                          .join("")}
                      </span>
                      <div className="testimonial-author">{review.name}</div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
        <button
          className="carousel-arrow next"
          type="button"
          onClick={() => setActiveReview((activeReview + 1) % reviews.length)}
          aria-label="Sledeće mišljenje"
        >
          →
        </button>
        <div className="carousel-dots">
          {reviews.map((review, index) => (
            <button
              key={review.id}
              className={index === activeReview ? "active" : ""}
              onClick={() => setActiveReview(index)}
              aria-label={`Prikaži mišljenje ${index + 1}`}
              aria-current={index === activeReview ? "true" : undefined}
            />
          ))}
        </div>
        <p className={styles.counter}>
          {String(activeReview + 1).padStart(2, "0")} /{" "}
          {String(reviews.length).padStart(2, "0")}
        </p>
      </div>
    </section>
  );
}
