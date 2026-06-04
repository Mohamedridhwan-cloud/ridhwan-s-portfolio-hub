import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, FolderGit2, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import portraitAsset from "@/assets/hero-portrait.jpg.asset.json";
const portrait = portraitAsset.url;
import { PROFILE } from "@/lib/portfolio-data";

function useTyping(words: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      const next = deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1);
      setText(next);
      if (!deleting && next === word) setTimeout(() => setDeleting(true), 1300);
      else if (deleting && next === "") {
        setDeleting(false);
        setI((v) => v + 1);
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, i, words]);

  return text;
}

const scrollTo = (id: string) =>
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

export function Hero() {
  const typed = useTyping(PROFILE.typing);

  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="glass inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs text-muted-foreground">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            Available for opportunities · {PROFILE.location}
          </span>
          <h1 className="mt-5 font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.05]">
            Hi, I'm <span className="text-gradient">Mohamed</span>
            <br /> Ridhwan
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">{PROFILE.title}</p>
          <p className="mt-3 text-xl font-mono text-foreground/90 min-h-[1.75rem]">
            <span className="text-primary">&gt;</span> {typed}
            <span className="caret" />
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <button
              onClick={() => scrollTo("projects")}
              className="btn-glow inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium"
            >
              <FolderGit2 className="size-4" /> View Projects
            </button>
            <a
              href={PROFILE.resumeUrl}
              download
              className="glass inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium hover:bg-muted/40 transition"
            >
              <Download className="size-4" /> Download Resume
            </a>
            <button
              onClick={() => scrollTo("contact")}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-border hover:border-primary/60 transition"
            >
              <Mail className="size-4" /> Contact Me
            </button>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              [Github, PROFILE.socials.github, "GitHub"],
              [Linkedin, PROFILE.socials.linkedin, "LinkedIn"],
              [Twitter, PROFILE.socials.twitter, "Twitter"],
              [Instagram, PROFILE.socials.instagram, "Instagram"],
            ].map(([Icon, href, label]: any) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="glass p-2.5 rounded-xl hover:text-primary hover:-translate-y-0.5 transition"
              >
                <Icon className="size-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative justify-self-center"
        >
          <div className="absolute -inset-6 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl rounded-full" />
          <div className="relative glass p-3 rounded-[2rem] float">
            <img
              src={portrait}
              alt="Mohamed Ridhwan portrait"
              width={520}
              height={520}
              className="rounded-[1.5rem] w-[300px] sm:w-[380px] lg:w-[440px] aspect-square object-cover"
            />
            <div className="absolute -bottom-4 -left-4 glass rounded-2xl px-4 py-3 text-xs font-mono">
              <div className="text-primary">$ whoami</div>
              <div className="text-muted-foreground">cloud-engineer</div>
            </div>
            <div className="absolute -top-4 -right-4 glass rounded-2xl px-4 py-3 text-xs">
              <div className="text-accent font-semibold">B.Tech CSE</div>
              <div className="text-muted-foreground">CGPA 7.80</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
