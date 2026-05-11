import type { FormEvent } from "react";
import { contactAside, contactForm, contactIntro, socialLinks } from "../../data/siteContent";
import { useReveal } from "../../hooks/useReveal";
import { ButtonLink } from "../ui/ButtonLink";

function buildMailtoBody(fd: FormData) {
  const name = String(fd.get("name") ?? "").trim();
  const email = String(fd.get("email") ?? "").trim();
  const phone = String(fd.get("phone") ?? "").trim();
  const eventType = String(fd.get("eventType") ?? "").trim();
  const date = String(fd.get("date") ?? "").trim();
  const message = String(fd.get("message") ?? "").trim();
  return [
    `Nom : ${name}`,
    `E-mail : ${email}`,
    `Téléphone : ${phone}`,
    `Type d'événement : ${eventType}`,
    `Date envisagée : ${date}`,
    "",
    "Message :",
    message,
  ].join("\n");
}

export function Contact() {
  const { ref, visible } = useReveal<HTMLElement>();

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const body = buildMailtoBody(fd);
    const subject = "Devis Signature Nomade";
    const url = `mailto:${contactForm.mailto}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
  }

  return (
    <section
      id="contact"
      ref={ref}
      className={`sn-section sn-section-anchor sn-reveal${visible ? " is-visible" : ""}`}
    >
      <div className="sn-container text-center">
        <p className="sn-section-kicker">{contactIntro.kicker}</p>
        <h2 className="sn-display">{contactIntro.title}</h2>
        <p className="sn-sub">{contactIntro.sub}</p>
      </div>
      <div className="sn-container sn-contact-split">
        <form className="sn-form" id="sn-contact-form" onSubmit={onSubmit}>
          <div className="sn-fields">
            <label className="sn-span-2">
              <span>Nom complet</span>
              <input name="name" type="text" required autoComplete="name" placeholder="Votre nom" />
            </label>
            <label>
              <span>E-mail</span>
              <input name="email" type="email" required autoComplete="email" placeholder="vous@entreprise.fr" />
            </label>
            <label>
              <span>Téléphone</span>
              <input name="phone" type="tel" required autoComplete="tel" placeholder="+33 6 …" />
            </label>
            <label>
              <span>Type d&apos;événement</span>
              <input name="eventType" placeholder="Mariage, séminaire…" />
            </label>
            <label>
              <span>Date envisagée</span>
              <input name="date" type="date" />
            </label>
            <label className="sn-span-2">
              <span>Message</span>
              <textarea name="message" rows={4} placeholder="Convives estimés, contraintes, ambiance…" />
            </label>
          </div>
          <p id="sn-form-notice" className="sn-notice">
            {contactForm.notice}
          </p>
          <button type="submit" className="sn-btn sn-btn-solid sn-btn-lg sn-form-submit">
            {contactForm.submit}
          </button>
          <p className="sn-form-foot">{contactForm.foot}</p>
        </form>
        <aside className="sn-contact-aside">
          <div className="sn-info-card">
            <p className="sn-info-kicker">{contactAside.kicker}</p>
            <ul className="sn-rows">
              <li>
                <span className="ico" aria-hidden="true">
                  ☎
                </span>
                <div>
                  <span className="label">{contactAside.phoneLabel}</span>
                  <a href={contactAside.phoneHref}>{contactAside.phone}</a>
                </div>
              </li>
              <li>
                <span className="ico" aria-hidden="true">
                  ✉
                </span>
                <div>
                  <span className="label">{contactAside.emailLabel}</span>
                  <a href={contactAside.emailHref}>{contactAside.email}</a>
                </div>
              </li>
              <li>
                <span className="ico" aria-hidden="true">
                  ⚲
                </span>
                <div>
                  <span className="label">{contactAside.interventionLabel}</span>
                  <span className="sn-rows-value">{contactAside.interventionText}</span>
                </div>
              </li>
            </ul>
            <nav className="sn-social-row" aria-label="Réseaux sociaux">
              {socialLinks.map((s) => (
                <a key={s.href} href={s.href} aria-label={s.label} rel="noopener noreferrer" target="_blank">
                  {s.symbol}
                </a>
              ))}
            </nav>
          </div>
          <div className="sn-map-wrap">
            <iframe title={contactAside.mapIframeTitle} loading="lazy" src={contactAside.mapIframeSrc} />
            <div className="sn-map-meta">
              <p className="sn-map-hint mb-0">{contactAside.mapHint}</p>
              <ButtonLink href={contactAside.mapsLink} variant="outline">
                {contactAside.mapsLinkLabel}
              </ButtonLink>
            </div>
          </div>
          <div className="sn-cta-fin">
            <div className="sn-cta-inner text-center">
              <p className="sn-display sn-cta-fin-text mb-0">{contactAside.ctaFin}</p>
              <ButtonLink href="#tarifs" variant="outline-lg" size="lg" className="sn-cta-fin-btn">
                {contactAside.ctaFinLink}
              </ButtonLink>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
