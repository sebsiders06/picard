import { useCallback, useEffect, useState, type CSSProperties } from "react";
import { testimonials, testimonialsIntro } from "../../data/siteContent";
import { useReveal } from "../../hooks/useReveal";

export function Testimonials() {
  const { ref, visible } = useReveal<HTMLElement>();
  const [index, setIndex] = useState(0);
  const n = testimonials.length;

  const prev = useCallback(() => setIndex((i) => (i - 1 + n) % n), [n]);
  const next = useCallback(() => setIndex((i) => (i + 1) % n), [n]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section
      id="avis"
      ref={ref}
      className={`sn-section sn-section-anchor sn-reveal${visible ? " is-visible" : ""}`}
    >
      <div className="sn-container sn-testimonials-head">
        <div>
          <p className="sn-section-kicker">{testimonialsIntro.kicker}</p>
          <h2 className="sn-display">{testimonialsIntro.title}</h2>
          <p className="sn-body-text sn-sub-left mb-0">{testimonialsIntro.sub}</p>
        </div>
        <div className="sn-carousel-controls">
          <button type="button" className="sn-carousel-btn" aria-label="Avis précédent" onClick={prev}>
            ⟨
          </button>
          <button
            type="button"
            className="sn-carousel-btn sn-carousel-btn-accent"
            aria-label="Avis suivant"
            onClick={next}
          >
            ⟩
          </button>
        </div>
      </div>
      <div
        className="sn-carousel-view sn-container"
        id="sn-carousel-view"
        style={{ "--sn-slides": String(n) } as CSSProperties}
      >
        <div
          className="sn-carousel-track"
          id="sn-carousel-track"
          style={{ transform: `translateX(-${(index * 100) / n}%)` }}
        >
          {testimonials.map((t) => (
            <div key={t.name} className="sn-slide">
              <article className="sn-quote-inner">
                <blockquote>{t.quote}</blockquote>
                <footer className="sn-quote-foot">
                  <div>
                    <strong>{t.name}</strong>
                    <p className="sn-quote-role">{t.role}</p>
                    {t.place ? <p className="sn-quote-place">{t.place}</p> : null}
                  </div>
                  <span className="sn-stars" aria-label="5 sur 5">
                    ★★★★★
                  </span>
                </footer>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
