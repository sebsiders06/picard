import { fab } from "../../data/siteContent";

export function WhatsAppFab() {
  return (
    <a
      href={fab.whatsappHref}
      className="sn-fab-whats"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={fab.whatsappLabel}
    >
      <span className="sn-fab-whats-icon" aria-hidden="true">
        ⋯
      </span>
      <span>WhatsApp</span>
    </a>
  );
}
