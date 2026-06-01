import { motion } from "framer-motion";

export function SectionLabel({ index, title, kicker }: { index: string; title: string; kicker?: string }) {
  return (
    <div className="mb-14">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="flex items-center gap-3 text-xs font-mono text-muted-foreground mb-4"
      >
        <span className="inline-block w-8 h-px bg-muted-foreground/50" />
        {index} — {kicker ?? "section"}
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="font-display text-4xl md:text-6xl font-semibold tracking-tighter text-gradient max-w-3xl"
      >
        {title}
      </motion.h2>
    </div>
  );
}