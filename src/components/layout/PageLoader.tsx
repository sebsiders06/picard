import { useEffect, useState } from "react";

export function PageLoader() {
  const [exit, setExit] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const min = 520;
    const start = performance.now();
    const finish = () => {
      const elapsed = performance.now() - start;
      window.setTimeout(() => setExit(true), Math.max(0, min - elapsed));
    };
    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });
    return () => window.removeEventListener("load", finish);
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
