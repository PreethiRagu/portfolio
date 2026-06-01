import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown, Sparkles } from "lucide-react";
import portrait from "@/assets/preethi.jpeg";

const roles = ["Full Stack Developer", "AI Engineer", "Backend Developer", "Problem Solver"];

export function Hero() {
  const [idx, setIdx] = useState(0);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const sx = useSpring(mx, { stiffness: 80, damping: 20 });
  const sy = useSpring(my, { stiffness: 80, damping: 20 });
  const tx = useTransform(sx, [0, 1], [-20, 20]);
  const ty = useTransform(sy, [0, 1], [-20, 20]);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % roles.length), 2400);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="top"
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      className="relative min-h-screen pt-32 pb-24 overflow-hidden"
    >
      {/* background orbs */}
      <div className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <motion.div
        style={{ x: tx, y: ty }}
        className="absolute -top-32 -left-32 w-[560px] h-[560px] rounded-full bg-white/[0.06] blur-3xl animate-orb"
      />
      <motion.div
        style={{ x: useTransform(tx, (v) => -v), y: useTransform(ty, (v) => -v) }}
        className="absolute -bottom-40 -right-20 w-[600px] h-[600px] rounded-full bg-white/[0.04] blur-3xl animate-orb"
      />

      <div className="relative max-w-6xl mx-auto px-6 grid lg:grid-cols-[1.4fr_1fr] gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs font-mono text-muted-foreground mb-6"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Available for SDE & AI roles · 2027
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="font-display text-[clamp(3rem,9vw,7.5rem)] leading-[0.92] font-semibold tracking-tighter"
          >
            <span className="text-gradient">Preethi R.</span>
          </motion.h1>

          <div className="mt-6 flex items-center gap-3 text-xl md:text-2xl font-display text-muted-foreground h-9 overflow-hidden">
            <span className="font-mono text-sm text-foreground/40">{">"}</span>
            <div className="relative h-9 overflow-hidden">
              <motion.div
                animate={{ y: -idx * 36 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
              >
                {roles.map((r) => (
                  <div key={r} className="h-9 leading-9 text-foreground">{r}</div>
                ))}
              </motion.div>
            </div>
            <span className="w-[2px] h-6 bg-foreground animate-pulse" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed"
          >
            Final-year B.Tech IT student at PSG Tech — shipping production-grade
            full-stack and AI systems. I build intelligent, scalable products with
            React, FastAPI, and LLMs.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <a
              href="/Preethi_R_Resume.docx"
              download
              data-cursor
              className="group relative inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-medium overflow-hidden hover:scale-[1.02] transition-transform"
            >
              <span className="relative z-10">Download Resume</span>
              <ArrowDown className="w-4 h-4 relative z-10 group-hover:translate-y-0.5 transition-transform" />
            </a>
            <a
              href="#contact"
              data-cursor
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full glass hover:bg-white/10 font-medium transition-colors"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-2 ml-1">
              {[
                { Icon: Github, href: "https://github.com/PreethiRagu" },
                { Icon: Linkedin, href: "https://www.linkedin.com/in/preethi-raghu-76a330364" },
                { Icon: Mail, href: "mailto:preethiraghu1806@gmail.com" },
              ].map(({ Icon, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -3 }}
                  data-cursor
                  className="w-11 h-11 grid place-items-center rounded-full glass hover:bg-white/10 transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* stat strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="mt-14 grid grid-cols-3 max-w-md gap-6 border-t border-white/10 pt-6"
          >
            {[
              ["3+", "Production projects"],
              ["#2", "Neo Codeathon"],
              ["8+", "Tech stacks"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="font-display text-2xl md:text-3xl">{n}</div>
                <div className="text-xs text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative mx-auto w-full max-w-sm"
        >
          <motion.div
            style={{ x: useTransform(sx, [0, 1], [-12, 12]), y: useTransform(sy, [0, 1], [-12, 12]) }}
            className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-strong"
          >
            <img
              src={portrait}
              alt="Preethi R portrait"
              className="w-full h-full object-cover grayscale contrast-[1.05] brightness-[0.95]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
              <div>
                <div className="text-xs font-mono text-muted-foreground">PSG TECH · IT</div>
                <div className="font-display text-lg">Coimbatore, IN</div>
              </div>
              <div className="glass rounded-full px-2.5 py-1 text-[10px] font-mono flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> ONLINE
              </div>
            </div>
          </motion.div>

          {/* floating chips */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-10 glass rounded-2xl px-3 py-2 text-xs font-mono"
          >
            ⚡ FastAPI + LLMs
          </motion.div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -right-4 top-1/2 glass rounded-2xl px-3 py-2 text-xs font-mono"
          >
            ✦ RAG · Qdrant
          </motion.div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -left-4 bottom-12 glass rounded-2xl px-3 py-2 text-xs font-mono"
          >
            ◐ Next.js 14
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}