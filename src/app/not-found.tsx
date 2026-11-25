import Link from "next/link";

export default function NotFound() {
  return (
    <section className="wrap flex min-h-[80svh] flex-col justify-center pt-24">
      <p className="display text-[clamp(96px,22vw,280px)] text-[var(--accent)]">404</p>
      <p className="mb-8 text-xl text-[var(--muted)]">That page doesn&apos;t exist.</p>
      <Link href="/" className="btn self-start">← Home</Link>
    </section>
  );
}
