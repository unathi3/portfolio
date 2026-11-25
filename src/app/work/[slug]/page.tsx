import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Reveal from "@/components/Reveal";
import { getWork, work } from "@/lib/work";

export function generateStaticParams() {
  return work.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w) return {};
  return { title: w.name, description: w.summary, alternates: { canonical: `/work/${w.slug}` } };
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = getWork(slug);
  if (!w) notFound();

  const i = work.findIndex((x) => x.slug === w.slug);
  const prev = work[(i - 1 + work.length) % work.length];
  const next = work[(i + 1) % work.length];

  return (
    <article className="wrap pb-24 pt-28">
      <Link href="/#work" className="eyebrow no-underline hover:text-[var(--accent-text)]">← All work</Link>

      <Reveal>
        <header className="mt-10 grid grid-cols-12 items-end gap-6 border-b-2 border-[var(--line)] pb-8">
          <span className="display col-span-12 text-[clamp(80px,14vw,200px)] leading-[.8] text-[var(--accent)] md:col-span-3">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="col-span-12 md:col-span-9">
            <p className="eyebrow mb-3">{w.kind} · {w.year}</p>
            <h1 className="display text-[clamp(44px,8vw,112px)]">{w.name}</h1>
          </div>
        </header>
      </Reveal>

      <div className="grid grid-cols-12 gap-6 pt-10">
        <aside className="col-span-12 lg:col-span-3">
          <h2 className="eyebrow mb-3">Stack</h2>
          <ul className="flex flex-wrap gap-2 lg:flex-col lg:items-start">
            {w.stack.map((s) => <li key={s} className="chip">{s}</li>)}
          </ul>
          {(w.github || w.live) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {w.github && <a href={w.github} className="btn">GitHub ↗</a>}
              {w.live && <a href={w.live} className="btn btn-solid">Live ↗</a>}
            </div>
          )}
        </aside>

        <div className="col-span-12 space-y-12 lg:col-span-8 lg:col-start-5">
          <Reveal>
            <section>
              <h2 className="eyebrow mb-3">Context</h2>
              <p className="text-xl leading-relaxed">{w.context}</p>
            </section>
          </Reveal>
          <Reveal>
            <section>
              <h2 className="eyebrow mb-3">What I did</h2>
              <ol className="grid-table">
                {w.action.map((a, n) => (
                  <li key={a} className="grid grid-cols-[3rem_1fr] py-4">
                    <span className="font-bold text-[var(--accent-text)]">{String(n + 1).padStart(2, "0")}</span>
                    <span>{a}</span>
                  </li>
                ))}
              </ol>
            </section>
          </Reveal>
          <Reveal>
            <section className="border-2 border-[var(--accent)] bg-[var(--accent)] p-6 text-white shadow-[8px_8px_0_var(--line)]">
              <h2 className="eyebrow mb-2 !text-white/80">Result</h2>
              <p className="text-xl font-semibold">{w.result}</p>
            </section>
          </Reveal>
        </div>
      </div>

      <nav className="mt-24 grid grid-cols-2 border-2 border-[var(--line)]" aria-label="More work">
        <Link href={`/work/${prev.slug}`} className="border-r-2 border-[var(--line)] p-6 no-underline hover:bg-[var(--accent)]">
          <span className="eyebrow !text-inherit">← Previous</span>
          <span className="display mt-2 block text-xl sm:text-3xl">{prev.name}</span>
        </Link>
        <Link href={`/work/${next.slug}`} className="p-6 text-right no-underline hover:bg-[var(--accent)]">
          <span className="eyebrow !text-inherit">Next →</span>
          <span className="display mt-2 block text-xl sm:text-3xl">{next.name}</span>
        </Link>
      </nav>
    </article>
  );
}
