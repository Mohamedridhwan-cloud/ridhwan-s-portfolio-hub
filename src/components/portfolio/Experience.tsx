import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "./Section";
import { EXPERIENCE } from "@/lib/portfolio-data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="04 — Experience"
      title={<>Where I've <span className="text-gradient">learned</span></>}
    >
      <div className="relative">
        <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent" />
        <div className="space-y-8">
          {EXPERIENCE.map((e, i) => (
            <motion.div
              key={e.company}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`relative grid sm:grid-cols-2 gap-6 sm:gap-12 items-start ${
                i % 2 ? "sm:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 mt-6 size-3 rounded-full bg-primary shadow-glow" />
              <div className={`pl-10 sm:pl-0 ${i % 2 ? "sm:text-left" : "sm:text-right"}`}>
                <div className="font-mono text-xs text-muted-foreground">{e.duration}</div>
                <h3 className="font-display text-xl font-semibold mt-1">{e.role}</h3>
                <div className="text-primary text-sm">{e.company}</div>
              </div>
              <div className="pl-10 sm:pl-0">
                <div className="glass rounded-2xl p-6">
                  <Briefcase className="size-5 text-accent mb-3" />
                  <p className="text-sm text-muted-foreground">{e.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
