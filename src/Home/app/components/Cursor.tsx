import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const [mounted, setMounted] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const scaleRaw = useMotionValue(1);

  // 🔽 БОЛЕЕ СТАБИЛЬНЫЕ НАСТРОЙКИ (выше stiffness, выше damping)
  const cursorXSpring = useSpring(cursorX, { damping: 35, stiffness: 800, mass: 0.3 });
  const cursorYSpring = useSpring(cursorY, { damping: 35, stiffness: 800, mass: 0.3 });
  const scaleSpring = useSpring(scaleRaw, { damping: 25, stiffness: 400, mass: 0.3 });

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.closest("[data-cursor-hover]") ||
        target.closest("input") ||
        target.closest("textarea");
      scaleRaw.set(isInteractive ? 2.5 : 1);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!mounted) return null;

  return (
    <>
      <motion.div
        className="fixed rounded-full pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: 32,
          height: 32,
          backgroundColor: "#000000",
          zIndex: 999998,
          scale: scaleSpring,
          mixBlendMode: "difference",
        }}
      />
      <motion.div
        className="fixed rounded-full pointer-events-none"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: 10,
          height: 10,
          backgroundColor: "#000000",
          zIndex: 999999,
          scale: scaleSpring,
          marginLeft: 18,
          marginTop: 18,
        }}
      />
    </>
  );
}