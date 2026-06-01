import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a,button,[data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);
  return (
    <>
      <motion.div
        className="pointer-events-none fixed z-[100] hidden md:block rounded-full mix-blend-difference"
        animate={{ x: pos.x - (hover ? 24 : 6), y: pos.y - (hover ? 24 : 6), width: hover ? 48 : 12, height: hover ? 48 : 12 }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.4 }}
        style={{ background: "white" }}
      />
    </>
  );
}