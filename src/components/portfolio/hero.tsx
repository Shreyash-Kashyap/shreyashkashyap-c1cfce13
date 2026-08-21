import { ArrowDownRight, ArrowUpRight, FileDown, Mail } from "lucide-react";
import { motion } from "motion/react";
import resume from "@/assets/resume.pdf.asset.json";
import { PROFILE, STATS, MARQUEE } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
      <div className="pointer-events-none absolute inset-0 aurora opacity-80" />
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-40" />

      <div className="relative mx-auto grid max-w-5xl gap-12 px-5 lg:grid-cols-[1.35fr_1fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 font-mono text-xs text-muted-foreground backdrop-blur"
          >
            <span className="size-2 animate-pulse rounded-full bg-cyan" />
            Open to full-time Software Developer roles
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl font-bold leading-[1.05] sm:text-6xl"
          >
            I turn messy ideas into{" "}
            <span className="text-gradient">software that ships</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground"
          >
            I'm {PROFILE.name} — a Computer Science (Data Science) engineer who builds
            AI-driven applications with Python, MySQL and the MERN stack. I like the part of
            the job where an idea stops being a diagram and starts responding to real users.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              See my work
              <ArrowDownRight className="size-4 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href={resume.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-5 py-3 text-sm font-semibold backdrop-blur transition-colors hover:bg-accent"
            >
              <FileDown className="size-4" />
              Resume
            </a>
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-2 rounded-full px-3 py-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-4" />
              {PROFILE.email}
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-12 grid max-w-md grid-cols-3 gap-4"
          >
            {STATS.map((stat) => (
              <div key={stat.label} className="border-l border-border pl-3">
                <dt className="font-display text-2xl font-bold">{stat.value}</dt>
                <dd className="mt-1 text-xs text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </motion.dl>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xs animate-float-slow"
        >
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-iris/40 via-cyan/25 to-amber/30 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card glow-ring">
            <img
              src="/profile.jpeg"
              alt="Portrait of Shreyash Kashyap"
              className="h-full w-full object-cover"
              width={640}
              height={640}
            />
            <div className="flex items-center justify-between border-t border-border bg-card/80 px-4 py-3 backdrop-blur">
              <span className="font-mono text-xs text-muted-foreground">
                {PROFILE.location}
              </span>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-semibold text-primary"
              >
                GitHub <ArrowUpRight className="size-3" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative mt-20 overflow-hidden border-y border-border py-4">
        <div className="flex w-max animate-marquee gap-8 pr-8">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="font-mono text-sm uppercase tracking-widest text-muted-foreground"
            >
              {item} <span className="text-primary">/</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
