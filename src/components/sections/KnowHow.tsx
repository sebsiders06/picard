import { knowHow } from "../../data/siteContent";
import { useReveal } from "../../hooks/useReveal";

export function KnowHow() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="savoir-faire"
      ref={ref}
      className={`sn-section sn-bg-soft-b sn-section-anchor sn-reveal${visible ? " is-visible" : ""}`}
    >
      <div className="sn-container sn-know-grid">
        <div className="sn-know-side">
          <p className="sn-section-kicker">{knowHow.kicker}</p>
          <h2 className="sn-display">{knowHow.title}</h2>
          <p className="sn-body-text">{knowHow.lead}</p>
          <div className="sn-know-image-wrap">
            <div className="sn-card-img">
              <img
                className="sn-know-img"
                src={knowHow.image}
                alt={knowHow.imageAlt}
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
        <div className="sn-pill-grid">
          {knowHow.pills.map((p) => (
            <div key={p.title} className={`sn-pill${p.fullWidth ? " sn-pill-full" : ""}`}>
              <div className="sn-pill-icon" aria-hidden="true">
                {p.icon}
              </div>
              <h3 className="sn-display">{p.title}</h3>
              <p className={`sn-muted${p.fullWidth ? " mb-0" : ""}`}>{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
