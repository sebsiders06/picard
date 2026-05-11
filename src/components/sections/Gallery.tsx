import { galleryIntro, galleryItems } from "../../data/siteContent";
import { useReveal } from "../../hooks/useReveal";

export function Gallery() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="galerie"
      ref={ref}
      className={`sn-section sn-bg-soft sn-section-anchor sn-reveal${visible ? " is-visible" : ""}`}
    >
      <div className="sn-container text-center">
        <p className="sn-section-kicker">{galleryIntro.kicker}</p>
        <h2 className="sn-display">{galleryIntro.title}</h2>
        <p className="sn-sub">{galleryIntro.sub}</p>
      </div>
      <div className="sn-container sn-masonry">
        {galleryItems.map((item) => (
          <figure key={item.caption} className="sn-gallery-figure">
            <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
            <span className="sn-gal-cover" aria-hidden="true" />
            <span className="sn-tag">{item.tag}</span>
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
