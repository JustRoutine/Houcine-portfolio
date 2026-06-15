'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
import {
  LuxuryLighting,
  LuxuryMonogram,
  MonogramHalo,
  ReflectiveFloor,
} from './luxuryMonogram';
import { ScrollCamera } from './ScrollCamera';

function useIsMobile() {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 768px)');
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);
  return mobile;
}

function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);
  return reduced;
}

function useInViewport(ref: React.RefObject<HTMLElement>) {
  const [inView, setInView] = useState(true);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [ref]);
  return inView;
}

export function Scene() {
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();
  const wrap = useRef<HTMLDivElement>(null);
  const inView = useInViewport(wrap);

  return (
    <div ref={wrap} className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        frameloop={inView && !reduced ? 'always' : 'demand'}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <LuxuryLighting />
          <MonogramHalo />
          <LuxuryMonogram scale={2.2} animated={!reduced} mobile={isMobile} />
          <ReflectiveFloor />
          {!reduced && <ScrollCamera />}
        </Suspense>
      </Canvas>
    </div>
  );
}
