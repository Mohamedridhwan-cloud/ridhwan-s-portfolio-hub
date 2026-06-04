import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react";
import { toast } from "sonner";
import { Section } from "./Section";
import { PROFILE } from "@/lib/portfolio-data";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || form.name.length > 100) return toast.error("Please enter a valid name");
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return toast.error("Please enter a valid email");
    if (!form.subject.trim()) return toast.error("Subject is required");
    if (form.message.trim().length < 10) return toast.error("Message is too short");

    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    toast.success("Message sent! I'll get back to you soon.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <Section
      id="contact"
      eyebrow="06 — Contact"
      title={<>Let's <span className="text-gradient">build</span> something</>}
      subtitle="Have an idea, a role, or just want to say hi? Drop a message."
    >
      <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 flex flex-col gap-6"
        >
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Email</div>
            <a href={`mailto:${PROFILE.email}`} className="text-lg hover:text-primary transition inline-flex items-center gap-2">
              <Mail className="size-4" /> {PROFILE.email}
            </a>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Location</div>
            <div className="inline-flex items-center gap-2"><MapPin className="size-4 text-accent" /> {PROFILE.location}</div>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Find me on</div>
            <div className="flex gap-2">
              {[
                [Github, PROFILE.socials.github, "GitHub"],
                [Linkedin, PROFILE.socials.linkedin, "LinkedIn"],
                [Twitter, PROFILE.socials.twitter, "Twitter"],
                [Instagram, PROFILE.socials.instagram, "Instagram"],
              ].map(([Icon, href, label]: any) => (
                <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="glass p-2.5 rounded-xl hover:text-primary transition">
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-auto rounded-xl p-4 bg-gradient-to-br from-primary/15 to-accent/15 border border-glass-border">
            <div className="text-sm font-semibold">Quick response</div>
            <p className="text-xs text-muted-foreground mt-1">Usually replies within 24 hours.</p>
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 grid sm:grid-cols-2 gap-4"
        >
          <Field label="Name" value={form.name} onChange={(v) => setForm({ ...form, name: v })} />
          <Field label="Email" type="email" value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
          <div className="sm:col-span-2">
            <Field label="Subject" value={form.subject} onChange={(v) => setForm({ ...form, subject: v })} />
          </div>
          <div className="sm:col-span-2">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows={5}
              maxLength={1000}
              className="mt-1 w-full rounded-xl bg-muted/30 border border-border focus:border-primary outline-none px-4 py-3 text-sm transition"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="sm:col-span-2 btn-glow inline-flex justify-center items-center gap-2 px-5 py-3 rounded-xl bg-primary text-primary-foreground font-medium disabled:opacity-60"
          >
            <Send className="size-4" /> {loading ? "Sending…" : "Send Message"}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-widest text-muted-foreground">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        maxLength={255}
        className="mt-1 w-full rounded-xl bg-muted/30 border border-border focus:border-primary outline-none px-4 py-3 text-sm transition"
      />
    </div>
  );
}
