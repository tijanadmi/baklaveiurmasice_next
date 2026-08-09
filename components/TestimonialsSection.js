"use client";

import { useEffect, useState } from "react";
import { reviews } from "../data/reviews";

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
    <section id="testimonials" className="section testimonials" data-reveal>
      <div className="section-heading centered">
        <p className="eyebrow">Mišljenja kupaca</p>
        <h2>Šta kažu o našim slatkišima</h2>
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
        <div className="carousel-viewport">
          <div
            className="carousel-track"
            style={{ transform: `translateX(-${activeReview * 100}%)` }}
          >
            {reviews.map((review) => (
              <article
                className="testimonial-slide"
                key={review.name}
                aria-hidden={review.name !== reviews[activeReview].name}
              >
                <div className="testimonial-copy">
                  <span className="quote-mark">“</span>
                  <p>{review.quote}</p>
                  <div className="stars">★★★★★</div>
                  <h3>{review.name}</h3>
                  <span>{review.role}</span>
                </div>
              </article>
            ))}
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
              key={review.name}
              className={index === activeReview ? "active" : ""}
              onClick={() => setActiveReview(index)}
              aria-label={`Prikaži mišljenje ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
