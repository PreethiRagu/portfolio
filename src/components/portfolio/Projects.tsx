import { motion } from "framer-motion";
import { SectionLabel } from "./SectionLabel";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";

type Project = {
  n: string;
  title: string;
  tag: string;
  year: string;
  description: string;
  highlights: string[];
  tech: string[];
  github?: string;
  demo?: string;
  visual: React.ReactNode;
};

const projects: Project[] = [
  {
    n: "01",
    title: "AI Interview Simulator",
    tag: "Full-stack · AI",
    year: "2025",
    description:
      "A resume-aware interview prep platform with AI-generated questions, voice + text interaction, live analytics and personalized feedback loops.",
    highlights: [
      "8+ domains × 4 interview types (HR, Tech, Behavioral, Coding)",
      "Real-time confidence, WPM & filler-word analytics",
      "Per-question LLM feedback via Groq / LLaMA 3.1",
    ],
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Groq", "Vercel", "Render"],
    github: "https://github.com/PreethiRagu/ai-interview-simulator",
    demo: "https://my-project-a8cp792of-preethiragus-projects.vercel.app",
    visual: <ProjectVisualA />,
  },
  {
    n: "02",
    title: "Agentic RAG System",
    tag: "AI · Multi-agent",
    year: "2025",
    description:
      "Production-grade RAG with multi-agent orchestration, semantic chunking and an autonomous web-search fallback when document confidence drops.",
    highlights: [
      "Semantic splitters cut irrelevant context ~30%",
      "Qdrant Cloud for low-latency dense retrieval",
      "Multi-LLM inference: LLaMA 3.2 / DeepSeek-R1",
    ],
    tech: ["Python", "LangChain", "CrewAI", "Qdrant", "Streamlit", "Firecrawl"],
    github: "https://github.com/PreethiRagu/agentic-rag-system",
    demo: "https://agentic-rag-system-3gr6lrvk7qdrjmrihjmiks.streamlit.app/",
    visual: <ProjectVisualB />,
  },
  {
    n: "03",
    title: "AI Billing & Inventory Suite",
    tag: "Full-stack · ML",
    year: "2024",
    description:
      "Role-based billing & inventory platform with ML-driven demand forecasting, automated invoicing and a real-time sales analytics dashboard.",
    highlights: [
      "Random Forest + GAN for predictive inventory",
      "Admin + Customer modules with auth",
      "Auto PDF invoice + dispatch workflows",
    ],
    tech: ["Flask", "Python", "Firebase", "JavaScript", "Scikit-learn"],
    github: "https://github.com/PreethiRagu/Inventory-Management-with-ML-Integration",
    demo: "https://velur-spun-pipes.vercel.app/",
    visual: <ProjectVisualC />,
  },
];

function ProjectVisualA() {
  return (
    <div className="absolute inset-0 grid-bg flex items-center justify-center">
      <div className="glass-strong rounded-2xl p-5 w-[78%] -rotate-3">
        <div className="flex items-center gap-1.5 mb-3">
          <span className="w-2 h-2 rounded-full bg-white/30" />
          <span className="w-2 h-2 rounded-full bg-white/30" />
          <span className="w-2 h-2 rounded-full bg-white/30" />
          <span className="font-mono text-[10px] text-muted-foreground ml-2">interview.live</span>
        </div>
        <div className="font-mono text-[11px] space-y-1.5">
          <div className="text-muted-foreground">Q · System design</div>
          <div>"Design a URL shortener for 100M users."</div>
          <div className="flex gap-2 mt-3">
            <div className="glass rounded px-2 py-1">conf 92%</div>
            <div className="glass rounded px-2 py-1">WPM 132</div>
            <div className="glass rounded px-2 py-1">filler 3</div>
          </div>
        </div>
      </div>
    </div>
  );
}
function ProjectVisualB() {
  return (
    <div className="absolute inset-0 grid-bg flex items-center justify-center">
      <div className="relative w-[80%] aspect-square">
        {[0, 60, 120, 180, 240, 300].map((deg, i) => (
          <div
            key={i}
            className="absolute top-1/2 left-1/2 w-12 h-12 -mt-6 -ml-6 glass rounded-xl grid place-items-center text-[10px] font-mono"
            style={{ transform: `rotate(${deg}deg) translate(110px) rotate(-${deg}deg)` }}
          >
            agt {i + 1}
          </div>
        ))}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass-strong rounded-full w-24 h-24 grid place-items-center font-display">
          RAG
        </div>
      </div>
    </div>
  );
}
function ProjectVisualC() {
  const bars = [40, 70, 50, 90, 65, 80, 55, 95];
  return (
    <div className="absolute inset-0 grid-bg flex items-end justify-center p-6">
      <div className="glass-strong rounded-2xl p-5 w-full max-w-sm">
        <div className="flex justify-between mb-3 text-[10px] font-mono text-muted-foreground">
          <span>Sales · Q4</span> <span>+18.2%</span>
        </div>
        <div className="flex items-end gap-1.5 h-24">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
              className="flex-1 bg-gradient-to-t from-white/60 to-white rounded-sm"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel index="03" kicker="selected work" title="Three production-grade builds." />
        <div className="space-y-10">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.2, 0.8, 0.2, 1] }}
              className="group relative glass-strong rounded-3xl overflow-hidden"
            >
              <div className="grid md:grid-cols-[1.1fr_1fr] gap-0">
                <div className="p-8 md:p-12 flex flex-col justify-between min-h-[420px]">
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono text-muted-foreground mb-6">
                      <span>{p.n} / {p.tag}</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="font-display text-3xl md:text-5xl font-semibold tracking-tight text-gradient">
                      {p.title}
                    </h3>
                    <p className="mt-5 text-muted-foreground leading-relaxed max-w-md">
                      {p.description}
                    </p>
                    <ul className="mt-5 space-y-2">
                      {p.highlights.map((h) => (
                        <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                          <span className="mt-2 w-1 h-1 rounded-full bg-foreground flex-shrink-0" />
                          {h}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-8 flex flex-wrap items-center gap-2">
                    <div className="flex flex-wrap gap-1.5 mr-auto">
                      {p.tech.map((t) => (
                        <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-full border border-white/10 text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                    {p.github && (
                      <a href={p.github} target="_blank" rel="noreferrer" data-cursor
                         className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-full glass hover:bg-white/10 transition-colors">
                        <Github className="w-3.5 h-3.5" /> Code
                      </a>
                    )}
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" data-cursor
                         className="inline-flex items-center gap-1.5 text-xs px-3 py-2 rounded-full bg-foreground text-background hover:bg-white/90 transition-colors">
                        <ExternalLink className="w-3.5 h-3.5" /> Live
                      </a>
                    )}
                  </div>
                </div>
                <div className="relative min-h-[280px] md:min-h-full border-t md:border-t-0 md:border-l border-white/10 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent" />
                  {p.visual}
                  <ArrowUpRight className="absolute top-5 right-5 w-5 h-5 text-muted-foreground group-hover:text-foreground group-hover:rotate-12 transition-all" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}