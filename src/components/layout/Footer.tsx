import { footer, socialLinks } from "../../data/siteContent";

export function Footer() {
  return (
    <footer className="sn-footer">
      <div className="sn-footer-inner">
        <div>
          <p className="sn-display sn-footer-brand mb-0">{footer.brand}</p>
          <p className="sn-footer-tagline">{footer.tagline}</p>
          <p className="sn-section-kicker sn-footer-kicker mb-0">{footer.kicker}</p>
          <nav className="sn-social-row sn-footer-social" aria-label="Réseaux">
            {socialLinks.map((s) => (
              <a key={s.href} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                {s.symbol}
              </a>
            ))}
          </nav>
        </div>
        <div className="sn-footer-columns">
          <div>
            <p className="sn-section-kicker sn-footer-col-title">{footer.linksTitle}</p>
            <div className="sn-footer-links">
              {footer.links.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="sn-section-kicker sn-footer-col-title">{footer.legalTitle}</p>
            <div className="sn-footer-links">
              {footer.legal.map((l) => (
                <a key={l.href} href={l.href}>
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="sn-footer-mini text-center">{footer.copyright}</div>
    </footer>
  );
}
