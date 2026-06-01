import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";

const groups = [
  { title: "Frontend", level: 92, items: ["React", "Next.js", "TypeScript", "Tailwind", "HTML5", "CSS3"] },
  { title: "Backend", level: 88, items: ["FastAPI", "Node.js", "Flask", "REST APIs", "Auth"] },
  { title: "AI / ML", level: 86, items: ["LangChain", "CrewAI", "RAG", "LLaMA", "DeepSeek", "Prompt Eng."] },
  { title: "Databases", level: 84, items: ["PostgreSQL", "MySQL", "Firebase", "Qdrant"] },
  { title: "Deployment", level: 82, items: ["Vercel", "Render", "Streamlit Cloud", "Git", "GitHub"] },
  { title: "Foundations", level: 90, items: ["DSA", "OOP", "DBMS", "SDLC", "Agile"] },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel index="02" kicker="capabilities" title="The stack I reach for." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group relative glass rounded-2xl p-6 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-white/[0.08] to-transparent" />
              <div className="relative">
                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="font-display text-xl font-medium">{g.title}</h3>
                  <span className="font-mono text-xs text-muted-foreground">{g.level}%</span>
                </div>
                <div className="h-[2px] bg-white/10 rounded-full overflow-hidden mb-5">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${g.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: [0.2, 0.8, 0.2, 1], delay: i * 0.05 }}
                    className="h-full bg-gradient-to-r from-white to-white/40"
                  />
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span
                      key={it}
                      className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/10 text-muted-foreground group-hover:text-foreground group-hover:border-white/25 transition-colors"
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}