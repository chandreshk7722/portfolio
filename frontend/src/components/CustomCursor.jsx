import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const target = useRef({ x: 0, y: 0 });
  const raf = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    if (!dot) return;

    const onMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const onOver = (e) => {
      const el = e.target;
      if (
        el.closest("a, button, [data-cursor-hover], input, textarea, select, [role='button']")
      ) {
        dot.classList.add("is-hover");
      }
    };
    const onOut = (e) => {
      const el = e.target;
      if (
        el.closest("a, button, [data-cursor-hover], input, textarea, select, [role='button']")
      ) {
        dot.classList.remove("is-hover");
      }
    };

    const loop = () => {
      pos.current.x += (target.current.x - pos.current.x) * 0.18;
      pos.current.y += (target.current.y - pos.current.y) * 0.18;
      dot.style.transform = `translate(${pos.current.x}px, ${pos.current.y}px) translate(-50%, -50%)`;
      raf.current = requestAnimationFrame(loop);
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    raf.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return <div ref={dotRef} className="cursor-dot" data-testid="custom-cursor" aria-hidden />;
}
