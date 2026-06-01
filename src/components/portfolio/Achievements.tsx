import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { Trophy, Award, Users, Code, Cloud, Brain } from "lucide-react";

const items = [
  { Icon: Trophy, t: "Ranked #2 nationally — Neo Codeathon", d: "iamneo (NIIT venture) · National DSA contest", y: "Jan 2025" },
  { Icon: Award, t: "Smart India Hackathon — Institute selection", d: "Government-organised national hackathon", y: "2024" },
  { Icon: Users, t: "Pre-finals — Intra-college Ideathon", d: "Team innovation & technical communication", y: "2024" },
  { Icon: Brain, t: "AI / Full-stack development", d: "3 production projects · LLMs, RAG, vector DBs", y: "2024–2025" },
  { Icon: Cloud, t: "Deployment experience", d: "Vercel · Render · Streamlit Cloud · Firebase", y: "Ongoing" },
  { Icon: Code, t: "DSA & problem solving", d: "Strong foundations in algorithms and OOP", y: "Ongoing" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel index="04" kicker="recognition" title="Milestones along the way." />
        <div className="relative">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent" />
          <div className="space-y-6">
            {items.map((it, i) => (
              <motion.div
                key={it.t}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className={`relative pl-10 md:pl-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-10 md:text-right" : "md:ml-auto md:pl-10"}`}
              >
                <div className={`absolute top-5 w-3 h-3 rounded-full bg-foreground shadow-[0_0_16px_white] ${i % 2 === 0 ? "left-2 md:left-auto md:-right-[7px]" : "left-2 md:-left-[7px]"}`} />
                <div className="glass rounded-2xl p-5 hover:bg-white/[0.08] transition-colors">
                  <div className={`flex items-center gap-3 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <it.Icon className="w-4 h-4 text-foreground" />
                    <span className="font-mono text-[11px] text-muted-foreground">{it.y}</span>
                  </div>
                  <h3 className="font-display text-lg font-medium leading-tight">{it.t}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{it.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}