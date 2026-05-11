import { hero } from "../../data/siteContent";
import { ButtonLink } from "../ui/ButtonLink";

export function Hero() {
  return (
    <section id="hero" className="sn-hero sn-section-anchor">
      <div className="sn-hero-media">
        <img src={hero.image} alt="" decoding="async" />
        <div className="sn-hero-overlay" />
        <div className="sn-hero-overlay sn-grain" aria-hidden="true" />
      </div>
      <div className="sn-hero-inner">
        <p className="sn-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            <path
              d="M12 21s-8-4.434-8-11a8 8 0 0116 0c0 6.566-8 11-8 11z"
              strokeWidth="1.5"
            />
            <circle cx="12" cy="11" r="2.5" strokeWidth="1.5" />
          </svg>
          {hero.badge}
        </p>
        <h1 className="sn-display sn-hero-title">{hero.title}</h1>
        <p className="lead">{hero.lead}</p>
        <div className="sn-hero-cta">
          <ButtonLink href="#contact" variant="solid" size="lg">
            Demander un devis
          </ButtonLink>
          <ButtonLink href="#prestations" variant="outline-lg" size="lg">
            Voir nos prestations
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
