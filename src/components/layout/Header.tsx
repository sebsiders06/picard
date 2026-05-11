import { useCallback, useEffect, useState } from "react";
import { navLinks } from "../../data/siteContent";
import { ButtonLink } from "../ui/ButtonLink";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("sn-nav-open", open);
    return () => document.body.classList.remove("sn-nav-open");
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header className={`sn-nav${scrolled ? " sn-nav-scrolled" : ""}`} id="sn-nav">
      <div className="sn-nav-inner">
        <a href="#hero" className="sn-brand" onClick={close}>
          <span className="sn-brand-dot" aria-hidden="true" />
          <span className="sn-brand-text sn-display">Signature Nomade</span>
        </a>
        <nav className="sn-nav-links" aria-label="Navigation principale">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="sn-nav-actions">
          <ButtonLink href="#tarifs" variant="outline">
            Nos formules
          </ButtonLink>
          <ButtonLink href="#contact" variant="solid">
            Devis gratuit
          </ButtonLink>
        </div>
        <button
          type="button"
          className="sn-nav-toggle"
          aria-expanded={open}
          aria-controls="sn-nav-panel"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "×" : "☰"}
        </button>
      </div>
      <div
        id="sn-nav-panel"
        className={`sn-mobile-panel${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="sn-mobile-grid">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} onClick={close}>
              {l.label}
            </a>
          ))}
          <div className="sn-mobile-cta">
            <ButtonLink href="#contact" variant="solid" size="lg" className="sn-btn-block">
              Demander un devis
            </ButtonLink>
            <ButtonLink href="#prestations" variant="outline" size="lg" className="sn-btn-block">
              Voir nos prestations
            </ButtonLink>
          </div>
        </div>
      </div>
    </header>
  );
}
