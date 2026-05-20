import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const id = requestAnimationFrame(raf);

    // Anchor scrolling using lenis
    const onAnchorClick = (e) => {
      const a = e.target.closest("a[href^='#']");
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const el = document.querySelector(id);
      if (el) {
        e.preventDefault();
        lenis.scrollTo(el, { offset: -40 });
      }
    };
    document.addEventListener("click", onAnchorClick);

    return () => {
      cancelAnimationFrame(id);
      document.removeEventListener("click", onAnchorClick);
      lenis.destroy();
    };
  }, []);

  return children;
}
