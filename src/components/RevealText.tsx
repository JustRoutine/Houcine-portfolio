'use client';

import { motion } from 'framer-motion';
import clsx from 'clsx';

type RevealTextProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p';
};

const container = {
  hidden: {},
  show: (delay: number) => ({
    transition: { staggerChildren: 0.06, delayChildren: delay },
  }),
};

const word = {
  hidden: { y: '110%', opacity: 0 },
  show: {
    y: '0%',
    opacity: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

/** Word-by-word masked text reveal, triggered when scrolled into view. */
export function RevealText({ text, className, delay = 0, as = 'h2' }: RevealTextProps) {
  const Tag = motion[as];
  return (
    <Tag
      variants={container}
      custom={delay}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-10%' }}
      className={clsx('flex flex-wrap', className)}
    >
      {text.split(' ').map((w, i) => (
        <span key={i} className="mr-[0.25em] overflow-hidden py-[0.02em]">
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
