import React, { useEffect, useRef } from "react";
import "./CustomCursor.css";

const INTERACTIVE_SELECTOR =
  "a, button, [role='button'], input, textarea, .main-button, li";

export default function CustomCursor({ theme }) {
  const dotRef = useRef(null);
  const dotPos = useRef({ x: 0, y: 0 });
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) {
      return;
    }

    document.body.classList.add("custom-cursor-enabled");

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    const onMouseOver = (e) => {
      if (e.target.closest && e.target.closest(INTERACTIVE_SELECTOR)) {
        dotRef.current &&
          dotRef.current.classList.add("custom-cursor-dot-active");
      }
    };

    const onMouseOut = (e) => {
      if (e.target.closest && e.target.closest(INTERACTIVE_SELECTOR)) {
        dotRef.current &&
          dotRef.current.classList.remove("custom-cursor-dot-active");
      }
    };

    const onMouseDown = () => {
      dotRef.current && dotRef.current.classList.add("custom-cursor-dot-click");
    };
    const onMouseUp = () => {
      dotRef.current &&
        dotRef.current.classList.remove("custom-cursor-dot-click");
    };

    let rafId;
    const animate = () => {
      dotPos.current.x += (mousePos.current.x - dotPos.current.x) * 0.25;
      dotPos.current.y += (mousePos.current.y - dotPos.current.y) * 0.25;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${dotPos.current.x}px, ${dotPos.current.y}px) translate(-50%, -50%)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup", onMouseUp);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={dotRef}
      className="custom-cursor-dot"
      style={{ backgroundColor: theme.imageHighlight }}
    ></div>
  );
}
