'use client';

import clsx from 'clsx';
import { Magnetic } from './Magnetic';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  href?: string;
  variant?: 'solid' | 'ghost';
  className?: string;
};

export function Button({
  children,
  onClick,
  href,
  variant = 'solid',
  className,
}: ButtonProps) {
  const classes = clsx(
    'group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-3.5 font-sans text-sm tracking-wide transition-all duration-500',
    variant === 'solid'
      ? 'bg-bone text-ink hover:bg-electric hover:text-bone'
      : 'glass text-bone hover:border-rose/50',
    className
  );

  const inner = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
        ↗
      </span>
    </>
  );

  return (
    <Magnetic strength={0.25}>
      {href ? (
        <a href={href} className={classes}>
          {inner}
        </a>
      ) : (
        <button onClick={onClick} className={classes}>
          {inner}
        </button>
      )}
    </Magnetic>
  );
}
