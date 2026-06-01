import { motion, useScroll, useSpring } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Work" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-[2px] origin-left z-[80] bg-foreground"
        style={{ scaleX }}
      />
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(94%,980px)]"
      >
        <div className="glass-strong rounded-full px-5 py-3 flex items-center justify-between">
          <a href="#top" className="font-display font-semibold tracking-tight flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-foreground shadow-[0_0_12px_white]" />
            Preethi<span className="text-muted-foreground">.dev</span>
          </a>
          <nav className="hidden md:flex items-center gap-1 text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 rounded-full text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="/Preethi_R_Resume.docx"
            download
            className="text-xs md:text-sm font-medium px-4 py-2 rounded-full bg-foreground text-background hover:bg-white/90 transition-colors"
          >
            Resume ↓
          </a>
        </div>
      </motion.header>
    </>
  );
}