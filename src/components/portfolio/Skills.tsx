import { motion } from "framer-motion";
import { Section } from "./Section";
import { SKILL_GROUPS } from "@/lib/portfolio-data";

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="02 — Skills"
      title={<>The <span className="text-gradient">toolkit</span></>}
      subtitle="A snapshot of languages, frameworks and platforms I work with day-to-day."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_GROUPS.map((group, gi) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: gi * 0.05 }}
            className="glass rounded-2xl p-6 hover:shadow-glow transition"
          >
            <h3 className="font-display text-lg font-semibold">{group.title}</h3>
            <div className="mt-5 space-y-4">
              {group.skills.map((s) => (
                <div key={s.name}>
                  <div className="flex justify-between text-sm mb-1.5">
                    <span>{s.name}</span>
                    <span className="text-muted-foreground font-mono text-xs">{s.level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-muted/50 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-primary to-accent"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
