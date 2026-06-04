import { motion } from "framer-motion";
import { Award, ExternalLink } from "lucide-react";
import { Section } from "./Section";
import { CERTIFICATIONS } from "@/lib/portfolio-data";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="05 — Certifications"
      title={<>Credentials & <span className="text-gradient">courses</span></>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CERTIFICATIONS.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
            className="glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition group"
          >
            <div className="flex items-start justify-between">
              <div className="size-10 rounded-xl bg-gradient-to-br from-primary to-accent grid place-items-center text-primary-foreground">
                <Award className="size-5" />
              </div>
              <ExternalLink className="size-4 text-muted-foreground group-hover:text-primary transition" />
            </div>
            <h3 className="mt-4 font-semibold leading-snug">{c.title}</h3>
            <div className="mt-2 text-sm text-muted-foreground">{c.issuer}</div>
            <div className="mt-1 font-mono text-xs text-primary">{c.date}</div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
