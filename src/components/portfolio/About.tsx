import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { Code2, Brain, Database, Rocket } from "lucide-react";

const pillars = [
  { Icon: Code2, t: "Full-stack engineering", d: "End-to-end web apps with React, Next.js, FastAPI and clean REST APIs." },
  { Icon: Brain, t: "Applied AI", d: "LLM products with LangChain, RAG, vector DBs and prompt engineering." },
  { Icon: Database, t: "Robust backends", d: "PostgreSQL schemas, auth, real-time analytics and reproducible data." },
  { Icon: Rocket, t: "Ship to production", d: "Vercel, Render, Streamlit Cloud — decoupled, concurrent, deployed." },
];

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel index="01" kicker="about" title="A builder who ships intelligent, scalable products." />
        <div className="grid lg:grid-cols-2 gap-14">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            I'm a final-year B.Tech Information Technology student at{" "}
            <span className="text-foreground">PSG College of Technology</span>, with hands-on
            experience designing and deploying three production-grade systems across full-stack
            and AI. I love the moment a prototype crosses into a real product —
            authentication, dashboards, deployment, the whole loop. My focus is building
            <span className="text-foreground"> intelligent backends</span> and{" "}
            <span className="text-foreground">polished interfaces</span> that hold up under
            real users.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-4">
            {pillars.map(({ Icon, t, d }, i) => (
              <motion.div
                key={t}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 hover:bg-white/[0.08] transition-colors"
              >
                <Icon className="w-5 h-5 mb-3 text-foreground" />
                <div className="font-display font-medium mb-1">{t}</div>
                <div className="text-sm text-muted-foreground leading-relaxed">{d}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}