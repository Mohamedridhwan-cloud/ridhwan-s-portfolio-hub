import { PROFILE } from "@/lib/portfolio-data";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto max-w-6xl px-4 flex flex-col sm:flex-row gap-3 items-center justify-between text-sm text-muted-foreground">
        <div>© {new Date().getFullYear()} {PROFILE.name}. Crafted with React & Framer Motion.</div>
        <div className="font-mono text-xs">Built in Chennai · India 🇮🇳</div>
      </div>
    </footer>
  );
}
