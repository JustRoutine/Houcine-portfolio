import { site } from '@/lib/site';

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10">
      <div className="shell flex flex-col gap-6 py-10 md:flex-row md:items-center md:justify-between">
        <p className="font-display text-sm text-white/60">
          © {new Date().getFullYear()} {site.name}
        </p>
        <div className="flex flex-wrap gap-5">
          {site.socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="font-sans text-xs uppercase tracking-[0.2em] text-white/50 transition-colors hover:text-electric"
            >
              {s.label}
            </a>
          ))}
        </div>
        <p className="font-sans text-xs uppercase tracking-[0.2em] text-white/30">
          Crafted with Three.js · GSAP · Framer Motion
        </p>
      </div>
    </footer>
  );
}
