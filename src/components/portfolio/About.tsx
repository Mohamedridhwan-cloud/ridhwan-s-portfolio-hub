import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { GraduationCap, MapPin, Sparkles } from "lucide-react";
import { Section } from "./Section";
import { PROFILE, STATS } from "@/lib/portfolio-data";

function Counter({ value, suffix }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1400;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - start) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Number((value * eased).toFixed(value % 1 === 0 ? 0 : 2)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref}>
      {n}
      {suffix ?? "+"}
    </span>
  );
}

export function About() {
  return (
    <Section id="about" eyebrow="01 — About" title={<>Engineer with a <span className="text-gradient">cloud-first</span> mindset</>}>
      <div className="grid lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glass rounded-2xl p-8"
        >
          <p className="text-lg leading-relaxed text-foreground/90">{PROFILE.summary}</p>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-muted/30 p-4 border border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <GraduationCap className="size-4 text-primary" /> Education
              </div>
              <div className="mt-2 font-semibold">{PROFILE.education.degree}</div>
              <div className="text-sm text-muted-foreground">{PROFILE.education.college}</div>
              <div className="mt-1 text-sm">CGPA: <span className="text-primary font-mono">{PROFILE.education.cgpa}</span></div>
            </div>
            <div className="rounded-xl bg-muted/30 p-4 border border-border">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="size-4 text-accent" /> Based in
              </div>
              <div className="mt-2 font-semibold">{PROFILE.location}</div>
              <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
                <Sparkles className="size-4 text-accent" /> Open to remote roles
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="text-sm text-muted-foreground mb-2">Areas of interest</div>
            <div className="flex flex-wrap gap-2">
              {PROFILE.interests.map((i) => (
                <span key={i} className="px-3 py-1.5 rounded-full text-xs glass">
                  {i}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 content-start">
          {STATS.map((s) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-6 text-center hover:shadow-glow transition"
            >
              <div className="text-4xl font-display font-bold text-gradient">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
