"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";

// ─── Tap Ripple (mobile / touch devices) ────────────────────────────
interface Ripple {
  id: number;
  x: number;
  y: number;
}

function TapRipple() {
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const handleTouch = (e: TouchEvent) => {
      const touch = e.touches[0];
      if (!touch) return;
      const id = ++idRef.current;
      setRipples((prev) => [...prev, { id, x: touch.clientX, y: touch.clientY }]);
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 600);
    };

    document.addEventListener("touchstart", handleTouch, { passive: true });
    return () => document.removeEventListener("touchstart", handleTouch);
  }, []);

  return (
    <AnimatePresence>
      {ripples.map((ripple) => (
        <motion.div
          key={ripple.id}
          className="fixed pointer-events-none z-9999"
          style={{ left: ripple.x, top: ripple.y }}
          aria-hidden="true"
        >
          <motion.div
            className="rounded-full border border-pink-500"
            initial={{ width: 0, height: 0, marginLeft: 0, marginTop: 0, opacity: 0.6 }}
            animate={{ width: 60, height: 60, marginLeft: -30, marginTop: -30, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

// ─── Desktop Cursor Follower ────────────────────────────────────────

function DesktopCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const ringX = useSpring(cursorX, springConfig);
  const ringY = useSpring(cursorY, springConfig);

  const rafRef = useRef<number>(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest(
        "a, button, input, textarea, select, [role='button'], [onclick]"
      );
      setIsHovering(!!interactive);
    };

    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, [isVisible, cursorX, cursorY]);

  return (
    <>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9999"
        style={{ x: cursorX, y: cursorY, opacity: isVisible ? 1 : 0 }}
        aria-hidden="true"
      >
        <motion.div
          className="rounded-full bg-pink-600 border border-white/80"
          animate={{
            width: isHovering ? 16 : 8,
            height: isHovering ? 16 : 8,
            marginLeft: isHovering ? -8 : -4,
            marginTop: isHovering ? -8 : -4,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>

      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-9999"
        style={{ x: ringX, y: ringY, opacity: isVisible ? 1 : 0 }}
        aria-hidden="true"
      >
        <motion.div
          className="rounded-full border-[1.5px]"
          animate={{
            width: isHovering ? 48 : 32,
            height: isHovering ? 48 : 32,
            marginLeft: isHovering ? -24 : -16,
            marginTop: isHovering ? -24 : -16,
            borderColor: isHovering
              ? "rgba(219,39,119,1)"
              : "rgba(219,39,119,0.5)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.6)",
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </>
  );
}

// ─── Main Export ─────────────────────────────────────────────────────

export default function CursorFollower() {
  const [isTouchDevice] = useState(() => {
    if (typeof window === "undefined") return false;
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  });

  return isTouchDevice ? <TapRipple /> : <DesktopCursor />;
}
