import { ArrowUpRight, Github, Linkedin, Phone } from "lucide-react";
import { motion } from "motion/react";
import { Reveal, SectionHeading } from "./reveal";
import { ContactForm } from "./contact-form";
import { CERTIFICATIONS, PROFILE, PROJECTS, SKILL_GROUPS, TIMELINE } from "./data";

type AccentKey = "iris" | "cyan" | "amber" | "rose";

const ACCENT: Record<AccentKey, { text: string; bg: string; dot: string; border: string }> = {
  iris: {
    text: "text-iris",
    bg: "bg-iris/12",
    dot: "bg-iris",
    border: "hover:border-iris/60",
  },
  cyan: {
    text: "text-cyan",
    bg: "bg-cyan/12",
    dot: "bg-cyan",
    border: "hover:border-cyan/60",
  },
  amber: {
    text: "text-amber",
    bg: "bg-amber/12",
    dot: "bg-amber",
    border: "hover:border-amber/60",
  },
  rose: {
    text: "text-rose",
    bg: "bg-rose/12",
    dot: "bg-rose",
    border: "hover:border-rose/60",
  },
};

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-24">
      <SectionHeading
        eyebrow="About"
        title="Engineer first, tinkerer always."
      />
      <div className="mt-10 grid gap-8 md:grid-cols-[1.4fr_1fr]">
        <Reveal delay={0.05} className="space-y-5 text-lg leading-relaxed text-muted-foreground">
          <p>
            I'm a Computer Science (Data Science) engineer who prefers building
            over theorising. Python and MySQL are my home ground — I use them to move data
            around cleanly, then wrap the result in interfaces people actually enjoy using.
          </p>
          <p>
            Over the last year I've built an AI-enhanced e-commerce platform on the MERN
            stack, written a Python CLI that scores resumes the way an ATS does, and spent
            three months as an AI Solutions intern shipping SaaS tooling for real clients.
            Different problems, same instinct: understand the user, keep the system simple,
            make it scale later without a rewrite.
          </p>
          <p className="text-foreground">
            Right now I'm looking for a full-time Software Developer role where I can keep
            learning fast and own real features from day one.
          </p>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="surface-card p-6">
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              Certifications
            </h3>
            <ul className="mt-5 space-y-5">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.name}>
                  <p className="text-sm font-semibold">{cert.name}</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {cert.org} · {cert.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-5xl px-5 py-24">
      <SectionHeading
        eyebrow="Skills"
        title="The toolkit I reach for."
        lead="Deep where it matters, broad enough to ship a product end to end."
      />
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {SKILL_GROUPS.map((group, i) => {
          const accent = ACCENT[group.accent];
          return (
            <Reveal key={group.title} delay={i * 0.06}>
              <div className={`surface-card h-full p-6 hover:-translate-y-1 ${accent.border}`}>
                <div className="flex items-center gap-3">
                  <span className={`size-2.5 rounded-full ${accent.dot}`} />
                  <h3 className="font-display text-lg font-semibold">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className={`rounded-full px-3 py-1.5 text-sm ${accent.bg} ${accent.text}`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-5xl px-5 py-24">
      <SectionHeading
        eyebrow="Selected work"
        title="Things I built and actually shipped."
        lead="Three projects, three different problems — payments and AI, developer tooling, and a fast little interface."
      />
      <div className="mt-12 space-y-6">
        {PROJECTS.map((project, i) => {
          const accent = ACCENT[project.accent];
          return (
            <Reveal key={project.title} delay={i * 0.06}>
              <motion.a
                href={project.href}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className={`surface-card group grid gap-6 p-7 md:grid-cols-[auto_1fr_auto] md:items-start ${accent.border}`}
              >
                <span className={`font-mono text-sm ${accent.text}`}>{project.index}</span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-xl font-semibold sm:text-2xl">
                      {project.title}
                    </h3>
                    <span
                      className={`rounded-full px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider ${accent.bg} ${accent.text}`}
                    >
                      {project.tag}
                    </span>
                  </div>
                  <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                    {project.blurb}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <li
                        key={tech}
                        className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
                <ArrowUpRight className="size-6 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
              </motion.a>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

export function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-5xl px-5 py-24">
      <SectionHeading eyebrow="Journey" title="Experience & education." />
      <ol className="mt-12 relative border-l border-border pl-8">
        {TIMELINE.map((entry, i) => (
          <Reveal key={entry.title} delay={i * 0.07}>
            <li className="relative pb-12 last:pb-0">
              <span className="absolute -left-[41px] top-1.5 size-3 rounded-full border-2 border-background bg-primary" />
              <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {entry.period}
              </p>
              <h3 className="mt-2 font-display text-xl font-semibold">{entry.title}</h3>
              <p className="mt-1 text-sm text-primary">{entry.org}</p>
              <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">
                {entry.detail}
              </p>
            </li>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-5 py-28">
      <div className="pointer-events-none absolute inset-0 aurora opacity-70" />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">Contact</p>
        <h2 className="mt-4 text-4xl font-bold sm:text-5xl">
          Let's build something <span className="text-gradient">worth using</span>.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          Hiring, collaborating, or just want to talk shop about Python and AI tooling? My
          inbox is genuinely open.
        </p>
        <div className="mt-10">
          <ContactForm />
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-accent"
          >
            <Github className="size-4" /> GitHub
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-accent"
          >
            <Linkedin className="size-4" /> LinkedIn
          </a>
          <a
            href={`tel:${PROFILE.phone}`}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-accent"
          >
            <Phone className="size-4" /> {PROFILE.phone}
          </a>
        </div>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5 py-8 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Shreyash Kashyap</p>
        <p className="font-mono text-xs">Built with React · TanStack · Tailwind</p>
      </div>
    </footer>
  );
}