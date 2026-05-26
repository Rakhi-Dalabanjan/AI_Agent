import { useEffect, useState, useRef } from "react";

export function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);
  
  const trailRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const trail = useRef({ x: -100, y: -100 });
  const rafId = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(
        window.matchMedia("(max-width: 1024px)").matches ||
        window.matchMedia("(pointer: coarse)").matches
      );
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e) => {
      pos.current.x = e.clientX;
      pos.current.y = e.clientY;
      setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (!target) return;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest(".glass-card") ||
        target.closest(".integration-card") ||
        target.closest(".shortcut-tab") ||
        target.closest(".faq-item-details") ||
        target.closest("[role='button']") ||
        target.closest("summary") ||
        target.closest(".btn")
      ) {
        setHovered(true);
      } else {
        setHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const updateTrail = () => {
      if (trailRef.current) {
        const dx = pos.current.x - trail.current.x;
        const dy = pos.current.y - trail.current.y;
        
        trail.current.x += dx * 0.4;
        trail.current.y += dy * 0.4;
        
        // Use translate3d for hardware acceleration, combined with the CSS translate(-50%, -50%)
        trailRef.current.style.transform = `translate3d(${trail.current.x}px, ${trail.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(updateTrail);
    };

    rafId.current = requestAnimationFrame(updateTrail);
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (isMobile || hidden) return null;

  return (
    <>
      <div
        ref={trailRef}
        className={`custom-cursor-trail ${hovered ? "hovered" : ""}`}
        style={{
          left: 0,
          top: 0
        }}
      />
    </>
  );
}
