import { useEffect, useState } from "react";

export function ScrollTopFab() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#hero"
      className={`sn-fab-top${show ? " is-visible" : ""}`}
      id="sn-scroll-top"
      aria-label="Haut de page"
    >
      ↑
    </a>
  );
}
