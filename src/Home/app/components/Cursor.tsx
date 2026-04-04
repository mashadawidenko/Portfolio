import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export function Cursor() {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);
  
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const scaleRaw = useMotionValue(1);

  const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 500, mass: 0.5 });
  const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 500, mass: 0.5 });
  const scaleSpring = useSpring(scaleRaw, { damping: 20, stiffness: 300, mass: 0.5 });

  const cursorColor = isDark ? "#FFFFFF" : "#000000";
  const blendMode = isDark ? "normal" : "difference";

  useEffect(() => {
    setMounted(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);

      // 🔽 ПРОВЕРЯЕМ ФОН ПОД КУРСОРОМ
      const element = document.elementFromPoint(e.clientX, e.clientY);
      
      let current: Element | null = element;
      let foundDark = false;
      
      while (current && current !== document.body) {
        if (current.getAttribute('data-theme') === 'dark') {
          foundDark = true;
          break;
        }
        current = current.parentElement;
      }
      
      setIsDark(foundDark);
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
      {/* 🔽 БОЛЬШОЙ КРУГ — всегда показываем */}
      <motion.div
        className="fixed rounded-full pointer-events-none hidden md:block"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          width: isDark ? 20 : 32,  // Меньше на тёмном
          height: isDark ? 20 : 32,
          backgroundColor: cursorColor,
          zIndex: 999998,
          scale: scaleSpring,
          mixBlendMode: blendMode,
          transition: "background-color 0.15s ease, mix-blend-mode 0.15s ease, width 0.15s ease, height 0.15s ease",
        }}
      />
      
      {/* 🔽 МАЛЕНЬКАЯ ТОЧКА — ТОЛЬКО НА СВЕТЛОМ ФОНЕ */}
      {!isDark && (
        <motion.div
          className="fixed rounded-full pointer-events-none hidden md:block"
          style={{
            x: cursorXSpring,
            y: cursorYSpring,
            width: 10,
            height: 10,
            backgroundColor: cursorColor,
            zIndex: 999999,
            scale: scaleSpring,
            marginLeft: 18,
            marginTop: 18,
            transition: "background-color 0.15s ease",
          }}
        />
      )}
    </>
  );
}