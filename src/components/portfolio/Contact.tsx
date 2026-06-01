import { motion } from "framer-motion";
import { useState } from "react";
import { SectionLabel } from "./SectionLabel";
import { Github, Linkedin, Mail, MapPin, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionLabel index="05" kicker="contact" title="Let's build something extraordinary." />
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={(e) => {
              e.preventDefault();
              const f = e.currentTarget as HTMLFormElement;
              const data = new FormData(f);
              const subject = encodeURIComponent(`Portfolio inquiry — ${data.get("name")}`);
              const body = encodeURIComponent(`${data.get("message")}\n\n— ${data.get("name")} (${data.get("email")})`);
              window.location.href = `mailto:preethiraghu1806@gmail.com?subject=${subject}&body=${body}`;
              setSent(true);
            }}
            className="glass-strong rounded-3xl p-8 md:p-10 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <Field name="name" label="Your name" placeholder="Jane Doe" />
              <Field name="email" label="Email" type="email" placeholder="jane@company.com" />
            </div>
            <div>
              <label className="text-xs font-mono text-muted-foreground">Message</label>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, role, or idea…"
                className="mt-2 w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/40 transition-colors resize-none placeholder:text-muted-foreground/60"
              />
            </div>
            <button
              type="submit"
              data-cursor
              className="group inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-foreground text-background font-medium hover:scale-[1.02] transition-transform"
            >
              {sent ? "Opening mail…" : "Send message"}
              <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-3"
          >
            <ContactRow Icon={Mail} label="Email" value="preethiraghu1806@gmail.com" href="mailto:preethiraghu1806@gmail.com" />
            <ContactRow Icon={Github} label="GitHub" value="@PreethiRagu" href="https://github.com/PreethiRagu" />
            <ContactRow Icon={Linkedin} label="LinkedIn" value="preethi-raghu" href="https://www.linkedin.com/in/preethi-raghu-76a330364" />
            <ContactRow Icon={MapPin} label="Based in" value="Coimbatore / Ooty, India" />
            <div className="glass rounded-2xl p-6 mt-4">
              <div className="font-display text-lg mb-1">Currently</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open to <span className="text-foreground">SDE</span>,{" "}
                <span className="text-foreground">Full-stack</span> and{" "}
                <span className="text-foreground">AI Engineering</span> roles, internships and freelance for 2026–2027.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Field({ name, label, type = "text", placeholder }: { name: string; label: string; type?: string; placeholder: string }) {
  return (
    <div>
      <label className="text-xs font-mono text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="mt-2 w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-white/40 transition-colors placeholder:text-muted-foreground/60"
      />
    </div>
  );
}

function ContactRow({ Icon, label, value, href }: { Icon: any; label: string; value: string; href?: string }) {
  const inner = (
    <div className="glass rounded-2xl p-5 flex items-center gap-4 hover:bg-white/[0.08] transition-colors">
      <div className="w-10 h-10 grid place-items-center rounded-xl bg-white/5">
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{label}</div>
        <div className="font-display truncate">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target="_blank" rel="noreferrer" data-cursor>{inner}</a> : inner;
}