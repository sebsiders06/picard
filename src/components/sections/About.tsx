import { about } from "../../data/siteContent";
import { useReveal } from "../../hooks/useReveal";

export function About() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="a-propos"
      ref={ref}
      className={`sn-section sn-bg-soft sn-section-anchor sn-reveal${visible ? " is-visible" : ""}`}
    >
      <div className="sn-about-split sn-container">
        <div className="sn-card-img">
          <img src={about.image} alt={about.imageAlt} loading="lazy" decoding="async" />
          <p className="sn-card-caption sn-display mb-0">{about.caption}</p>
        </div>
        <div>
          <p className="sn-section-kicker">{about.kicker}</p>
          <h2 className="sn-display">{about.title}</h2>
          <p className="sn-body-text sn-mt-text">{about.body}</p>
          <div className="sn-stats">
            {about.stats.map((s) => (
              <article key={s.label} className="sn-stat">
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
