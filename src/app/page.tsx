import Link from "next/link";
import Reveal from "@/components/Reveal";
import { work } from "@/lib/work";
import { certifications, education, profile, skills } from "@/lib/site";

const marqueeWords = ["React Native", "TypeScript", "Python", "Flask", "Convex", "SQLite", "Jest", "pytest", "k6", "Accessibility"];

function SectionHead({ num, title, id }: { num: string; title: string; id: string }) {
  return (
    <Reveal>
      <div className="sec-head">
        <span className="num">({num})</span>
        <h2 id={id} className="display">{title}</h2>
      </div>
    </Reveal>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="wrap grid min-h-[92svh] grid-cols-12 content-end gap-x-6 pb-12 pt-28" aria-labelledby="hero-name">
        <Reveal className="col-span-12">
          <p className="eyebrow mb-6 flex items-center gap-3">
            <span className="inline-block h-3 w-3 bg-[var(--accent)]" aria-hidden />
            {profile.status}
          </p>
          <h1 id="hero-name" className="display text-[clamp(56px,14.5vw,220px)]">
            Unathi
            <br />
            Dlamini<span className="text-[var(--accent)]">.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.12} className="col-span-12 mt-14 grid grid-cols-12 gap-6 border-t-2 border-[var(--line)] pt-6">
          <p className="col-span-12 text-xl font-semibold md:col-span-4">
            {profile.role}
            <br />
            <span className="text-[var(--muted)]">{profile.location}</span>
          </p>
          <p className="col-span-12 max-w-xl text-[var(--muted)] md:col-span-5">{profile.summary}</p>
          <div className="col-span-12 flex flex-wrap items-start gap-4 md:col-span-3 md:justify-end">
            <Link href="#work" className="btn btn-solid">See work ↓</Link>
            <Link href="#contact" className="btn">Contact</Link>
          </div>
        </Reveal>
      </section>

      <div className="marquee" aria-hidden>
        <div className="marquee-track">
          {[...marqueeWords, ...marqueeWords].map((w, i) => (
            <span key={i}>{w} ✱</span>
          ))}
        </div>
      </div>

      {/* Work */}
      <section className="wrap pt-24" aria-labelledby="work">
        <SectionHead num="01" title="Selected work" id="work" />
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {work.map((w, i) => (
            <li key={w.slug}>
              <Reveal delay={i * 0.08}>
                <Link href={`/work/${w.slug}`} className="card">
                  <div className="flex items-start justify-between p-6">
                    <span className="big" aria-hidden>{String(i + 1).padStart(2, "0")}</span>
                    <span className="eyebrow text-right">{w.kind}<br />{w.year}</span>
                  </div>
                  <div className="mt-auto p-6 pt-0">
                    <h3 className="display mb-3 text-3xl">{w.name}</h3>
                    <p className="mb-5 text-[var(--muted)]">{w.summary}</p>
                    <ul className="flex flex-wrap gap-2" aria-label="Stack">
                      {w.stack.slice(0, 4).map((s) => <li key={s} className="chip">{s}</li>)}
                    </ul>
                  </div>
                  <div className="reveal">
                    <p className="eyebrow mb-1 !text-white/80">Result</p>
                    <p className="font-semibold">{w.result}</p>
                    <p className="mt-3 text-sm font-bold uppercase tracking-[.12em]">Read case study →</p>
                  </div>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* About */}
      <section className="wrap pt-32" aria-labelledby="about">
        <SectionHead num="02" title="About" id="about" />
        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 lg:col-span-5">
            <p className="text-2xl font-semibold leading-snug">
              I like building the parts people touch, then proving they hold up: alerts that arrive on time, screens that work by keyboard and screen reader, and numbers that add up.
            </p>
            <p className="mt-6 text-[var(--muted)]">
              I studied Computer Science at the University of Pretoria and I&apos;m finishing my Honours, with a research project in the CSEDAR unit. I&apos;m looking for a graduate full-stack role where testing and accessibility count.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 lg:col-span-6 lg:col-start-7">
            <h3 className="eyebrow mb-4">Education</h3>
            <ul className="grid-table">
              {education.map((e) => (
                <li key={e.title} className="py-5">
                  <div className="flex flex-wrap justify-between gap-x-4">
                    <p className="font-bold">{e.title}</p>
                    <p className="text-sm text-[var(--accent-text)]">{e.when}</p>
                  </div>
                  <p className="text-sm text-[var(--muted)]">{e.place}</p>
                  {e.detail && <p className="mt-2 text-sm text-[var(--muted)]">{e.detail}</p>}
                </li>
              ))}
            </ul>
            <h3 className="eyebrow mb-4 mt-10">Certification</h3>
            <ul className="grid-table">
              {certifications.map((c) => <li key={c} className="py-5 text-sm text-[var(--muted)]">{c}</li>)}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Skills */}
      <section className="wrap pt-32" aria-labelledby="skills">
        <SectionHead num="03" title="Skills" id="skills" />
        <ul className="grid-table">
          {skills.map((s, i) => (
            <li key={s.group}>
              <Reveal delay={i * 0.05} className="grid grid-cols-12 gap-4 py-5">
                <p className="col-span-12 font-bold uppercase tracking-[.1em] md:col-span-3">{s.group}</p>
                <ul className="col-span-12 flex flex-wrap gap-2 md:col-span-9">
                  {s.items.map((it) => (
                    <li key={it} className="border-2 border-[var(--line)] px-3 py-1 text-sm font-semibold transition-colors hover:border-[var(--accent)] hover:bg-[var(--accent)]">
                      {it}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section className="wrap py-32" aria-labelledby="contact">
        <SectionHead num="04" title="Contact" id="contact" />
        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 lg:col-span-7">
            <p className="mb-6 text-xl text-[var(--muted)]">Hiring for a graduate role, or want to talk about a project? Email is quickest.</p>
            <a href={`mailto:${profile.email}`} className="display block [overflow-wrap:anywhere] text-[clamp(17px,2.6vw,36px)] text-[var(--text)] no-underline decoration-[var(--accent)] decoration-4 underline-offset-8 hover:underline">
              {profile.email.split("@")[0]}@<wbr />{profile.email.split("@")[1]}
            </a>
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 lg:col-span-4 lg:col-start-9">
            <ul className="grid-table">
              {[
                { label: "LinkedIn", href: profile.linkedin },
                { label: "GitHub", href: profile.github },
              ].map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="group flex items-center justify-between py-5 text-lg font-bold uppercase tracking-[.1em] no-underline">
                    {l.label}
                    <span className="text-[var(--accent)] transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
