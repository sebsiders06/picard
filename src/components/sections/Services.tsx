import { services, servicesIntro } from "../../data/siteContent";
import { useReveal } from "../../hooks/useReveal";

export function Services() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="prestations"
      ref={ref}
      className={`sn-section sn-section-anchor sn-reveal${visible ? " is-visible" : ""}`}
    >
      <div className="sn-container text-center">
        <p className="sn-section-kicker">{servicesIntro.kicker}</p>
        <h2 className="sn-display">{servicesIntro.title}</h2>
        <p className="sn-sub">{servicesIntro.sub}</p>
      </div>
      <div className="sn-container sn-grid-services sn-mt-services">
        {services.map((s) => (
          <article key={s.title} className="sn-service-card">
            <div className="sn-service-cover">
              <img src={s.image} alt="" loading="lazy" decoding="async" />
              <span className="sn-gradient" aria-hidden="true" />
              <span className="sn-service-chip">{s.chip}</span>
            </div>
            <div className="sn-service-body">
              <h3 className="sn-display">{s.title}</h3>
              <p>{s.text}</p>
              <a className="sn-link-gold" href="#contact">
                Programmer →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
