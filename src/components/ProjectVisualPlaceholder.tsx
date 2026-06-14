'use client';

import type { ProjectVisual } from '@/lib/projects';

/**
 * Premium generated placeholder: a gradient field + project-specific decorative
 * pattern + large monogram. Pure SVG/CSS, no external assets, crisp at any size.
 * Replace later with real artwork by swapping this for an <Image/>.
 */
export function ProjectVisualPlaceholder({
  visual,
  title,
}: {
  visual: ProjectVisual;
  title: string;
}) {
  const [from, to] = visual.gradient;
  const id = title.replace(/\s+/g, '-').toLowerCase();

  return (
    <svg
      viewBox="0 0 600 380"
      className="h-full w-full"
      role="img"
      aria-label={`Visuel du projet ${title}`}
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={from} />
          <stop offset="100%" stopColor={to} />
        </linearGradient>
        <radialGradient id={`glow-${id}`} cx="30%" cy="25%" r="75%">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
        <pattern id={`grid-${id}`} width="32" height="32" patternUnits="userSpaceOnUse">
          <path d="M32 0H0V32" fill="none" stroke="#fff" strokeOpacity="0.12" />
        </pattern>
        <pattern id={`dots-${id}`} width="26" height="26" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.6" fill="#fff" fillOpacity="0.18" />
        </pattern>
        <pattern id={`stripes-${id}`} width="22" height="22" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
          <rect width="11" height="22" fill="#fff" fillOpacity="0.07" />
        </pattern>
      </defs>

      <rect width="600" height="380" fill={`url(#g-${id})`} />
      <rect width="600" height="380" fill={`url(#glow-${id})`} />

      {visual.pattern === 'grid' && (
        <rect width="600" height="380" fill={`url(#grid-${id})`} />
      )}
      {visual.pattern === 'dots' && (
        <rect width="600" height="380" fill={`url(#dots-${id})`} />
      )}
      {visual.pattern === 'stripes' && (
        <rect width="600" height="380" fill={`url(#stripes-${id})`} />
      )}
      {visual.pattern === 'rings' &&
        [60, 130, 210, 300].map((r) => (
          <circle
            key={r}
            cx="170"
            cy="190"
            r={r}
            fill="none"
            stroke="#fff"
            strokeOpacity={0.1}
          />
        ))}
      {visual.pattern === 'mesh' &&
        Array.from({ length: 7 }).map((_, i) => (
          <line
            key={i}
            x1={i * 100}
            y1="0"
            x2={i * 100 - 120}
            y2="380"
            stroke="#fff"
            strokeOpacity="0.08"
          />
        ))}
      {visual.pattern === 'noise' &&
        Array.from({ length: 60 }).map((_, i) => (
          <circle
            key={i}
            cx={(i * 97) % 600}
            cy={(i * 53) % 380}
            r={1 + ((i * 7) % 3)}
            fill="#fff"
            fillOpacity="0.1"
          />
        ))}

      <text
        x="92%"
        y="86%"
        textAnchor="end"
        fontFamily="var(--font-display), sans-serif"
        fontSize="120"
        fontWeight="700"
        fill="#fff"
        fillOpacity="0.12"
        letterSpacing="-4"
      >
        {visual.mark}
      </text>
    </svg>
  );
}
