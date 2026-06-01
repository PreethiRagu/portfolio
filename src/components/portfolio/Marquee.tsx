const items = ["FastAPI", "Next.js", "React", "LangChain", "PostgreSQL", "Qdrant", "Python", "TypeScript", "Tailwind", "CrewAI", "FastAPI", "Render", "Vercel", "Firebase"];

export function Marquee() {
  return (
    <div className="relative py-10 border-y border-white/10 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="mx-8 font-display text-3xl md:text-5xl text-muted-foreground/40 hover:text-foreground transition-colors">
            {it} <span className="text-muted-foreground/20 mx-2">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}