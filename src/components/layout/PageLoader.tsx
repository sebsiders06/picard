import { useEffect, useState } from "react";

/**
 * Overlay de chargement : ne doit jamais bloquer l’app (évite écran figé si `load` ne part pas).
 */
export function PageLoader() {
  const [exit, setExit] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const min = 400;
    const start = performance.now();
    let finished = false;

    const scheduleExit = () => {
      if (finished) return;
      finished = true;
      const elapsed = performance.now() - start;
      window.setTimeout(() => setExit(true), Math.max(0, min - elapsed));
    };

    if (document.readyState === "complete") {
      scheduleExit();
    } else {
      document.addEventListener("DOMContentLoaded", scheduleExit, { once: true });
      window.addEventListener("load", scheduleExit, { once: true });
    }

    const safety = window.setTimeout(scheduleExit, 4500);

    return () => {
      window.clearTimeout(safety);
      document.removeEventListener("DOMContentLoaded", scheduleExit);
      window.removeEventListener("load", scheduleExit);
    };
  }, []);

  useEffect(() => {
    if (!exit) return;
    const t = window.setTimeout(() => setGone(true), 700);
    return () => window.clearTimeout(t);
  }, [exit]);

  if (gone) return null;

  return (
    <div className={`sn-loader${exit ? " is-exit" : ""}`} aria-hidden="true">
      <div className="sn-loader-inner">
        <span className="sn-loader-brand">SIGNATURE NOMADE</span>
        <div className="sn-loader-bar" aria-hidden="true" />
      </div>
    </div>
  );
}
