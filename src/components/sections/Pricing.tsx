import { pricingIntro, pricingPlans } from "../../data/siteContent";
import { useReveal } from "../../hooks/useReveal";
import { ButtonLink } from "../ui/ButtonLink";

export function Pricing() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="tarifs"
      ref={ref}
      className={`sn-section sn-section-anchor sn-reveal${visible ? " is-visible" : ""}`}
    >
      <div className="sn-container text-center">
        <p className="sn-section-kicker">{pricingIntro.kicker}</p>
        <h2 className="sn-display">{pricingIntro.title}</h2>
        <p className="sn-sub">{pricingIntro.sub}</p>
      </div>
      <div className="sn-container sn-pricing">
        {pricingPlans.map((plan) => (
          <article key={plan.title} className={`sn-price-card${plan.highlight ? " sn-price-highlight" : ""}`}>
            {plan.highlight && plan.badge ? <span className="sn-reco">{plan.badge}</span> : null}
            <header>
              <h3 className="sn-display">{plan.title}</h3>
              <p className="sn-muted sn-price-desc">{plan.description}</p>
            </header>
            <p className="sn-display sn-price-amount">{plan.price}</p>
            <ul className="sn-ul">
              {plan.features.map((f) => (
                <li key={f}>
                  <span className="sn-ul-dot" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
            <ButtonLink
              href="#contact"
              variant={plan.variant === "solid" ? "solid" : "outline"}
              size="lg"
              className="sn-price-cta"
            >
              {plan.cta}
            </ButtonLink>
          </article>
        ))}
      </div>
    </section>
  );
}
