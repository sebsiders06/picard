import { processIntro, processSteps } from "../../data/siteContent";
import { useReveal } from "../../hooks/useReveal";

export function Process() {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <section
      id="processus"
      ref={ref}
      className={`sn-bg-soft sn-section sn-section-anchor sn-reveal${visible ? " is-visible" : ""}`}
    >
      <div className="sn-container">
        <div className="text-center">
          <p className="sn-section-kicker">{processIntro.kicker}</p>
          <h2 className="sn-display">{processIntro.title}</h2>
          <p className="sn-sub">{processIntro.sub}</p>
        </div>
        <div className="sn-timeline">
          <div className="sn-timeline-line" aria-hidden="true" />
          <ol className="sn-process-list">
            {processSteps.map((step) => (
              <li key={step.num} className="sn-process-item">
                <span className="sn-num">{step.num}</span>
                <div className="sn-process-item-inner">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
