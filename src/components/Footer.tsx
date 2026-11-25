import { profile } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[var(--line)]">
      <div className="wrap flex flex-col gap-3 py-8 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}. {profile.location}.
        </p>
        <ul className="flex gap-6 font-semibold uppercase tracking-[.12em]">
          <li><a href={profile.github} className="no-underline hover:text-[var(--accent-text)]">GitHub</a></li>
          <li><a href={profile.linkedin} className="no-underline hover:text-[var(--accent-text)]">LinkedIn</a></li>
          <li><a href={`mailto:${profile.email}`} className="no-underline hover:text-[var(--accent-text)]">Email</a></li>
        </ul>
      </div>
    </footer>
  );
}
