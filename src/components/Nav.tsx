'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { navItems, site } from '@/lib/site';
import { Magnetic } from './Magnetic';

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`shell flex items-center justify-between py-5 transition-colors duration-500 ${
          scrolled ? 'backdrop-blur-md' : ''
        }`}
      >
        <button
          onClick={() => go('hero')}
          className="font-display text-sm font-semibold tracking-tightest"
        >
          EH<span className="text-electric">.</span>
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.slice(1).map((item) => (
            <button
              key={item.id}
              onClick={() => go(item.id)}
              className="group font-sans text-xs uppercase tracking-[0.2em] text-white/60 transition-colors hover:text-white"
            >
              <span className="text-white/30">{item.index}</span>{' '}
              {item.label}
            </button>
          ))}
        </nav>

        <Magnetic>
          <button
            onClick={() => go('contact')}
            className="glass rounded-full px-5 py-2 font-sans text-xs uppercase tracking-[0.2em] transition-colors hover:border-electric/50"
          >
            {site.email ? 'Me contacter' : 'Contact'}
          </button>
        </Magnetic>
      </div>
    </motion.header>
  );
}
