import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Search } from "lucide-react";
import { Section } from "./Section";
import { PROJECTS } from "@/lib/portfolio-data";

const CATEGORIES = ["All", "Machine Learning", "Web Development", "AI / NLP", "Full Stack"] as const;
const PER_PAGE = 4;

export function Projects() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<(typeof CATEGORIES)[number]>("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    return PROJECTS.filter((p) => {
      const matchCat = cat === "All" || p.category === cat;
      const text = (p.title + p.description + p.technologies.join(" ")).toLowerCase();
      return matchCat && text.includes(q.toLowerCase());
    });
  }, [q, cat]);

  const pages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const current = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <Section
      id="projects"
      eyebrow="03 — Projects"
      title={<>Things I've <span className="text-gradient">built</span></>}
      subtitle="A selection of academic, personal and open-source work."
    >
      <div className="mb-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="glass rounded-xl flex items-center px-3 gap-2 w-full md:max-w-sm">
          <Search className="size-4 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => {
              setQ(e.target.value);
              setPage(1);
            }}
            placeholder="Search projects, tech…"
            className="bg-transparent py-2.5 outline-none text-sm w-full"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => {
                setCat(c);
                setPage(1);
              }}
              className={`px-3 py-1.5 text-xs rounded-full border transition ${
                cat === c
                  ? "bg-primary text-primary-foreground border-primary"
                  : "glass border-transparent hover:border-primary/40"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {current.map((p) => (
            <motion.article
              key={p.title}
              layout
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
              className="group glass rounded-2xl overflow-hidden hover:shadow-glow"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="size-full object-cover group-hover:scale-105 transition duration-500"
                />
                <span className="absolute top-3 left-3 glass px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest">
                  {p.category}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{p.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.technologies.map((t) => (
                    <span key={t} className="text-[11px] px-2 py-1 rounded-md bg-muted/40 font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex items-center gap-3 text-sm">
                  <a href={p.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary transition">
                    <Github className="size-4" /> Code
                  </a>
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary transition">
                    <ExternalLink className="size-4" /> Live
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div className="glass rounded-2xl p-10 text-center text-muted-foreground">
          No projects match your filters.
        </div>
      )}

      {pages > 1 && (
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`size-9 rounded-lg text-sm font-mono ${
                page === i + 1 ? "bg-primary text-primary-foreground" : "glass hover:border-primary/40"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </Section>
  );
}
