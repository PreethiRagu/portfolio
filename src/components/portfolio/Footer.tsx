export function Footer() {
  return (
    <footer className="relative px-6 py-12 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-display">© {new Date().getFullYear()} Preethi R. — Crafted with intent.</div>
        <div className="font-mono text-xs">PSG Tech · IT · 2027</div>
      </div>
    </footer>
  );
}