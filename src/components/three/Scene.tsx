'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useRef, useState } from 'react';
import { CreativeCore } from './CreativeCore';
import { Particles } from './Particles';
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

/** Pause the WebGL render loop while the canvas is scrolled out of view. */
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

/** Full-viewport fixed background scene. Lazy-loaded, mobile/reduced-motion aware. */
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
        // Demand-driven on mobile / reduced-motion + when offscreen to avoid lag
        frameloop={inView && !reduced ? 'always' : 'demand'}
        gl={{
          antialias: !isMobile,
          alpha: true,
          powerPreference: 'high-performance',
        }}
        performance={{ min: 0.5 }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={1.2} color="#0000ff" />
          <pointLight position={[-5, -3, 2]} intensity={1} color="#ff007f" />
          {/* Lower geometry detail on mobile keeps the shader cheap */}
          <CreativeCore detail={isMobile ? 40 : 96} />
          <Particles count={isMobile ? 450 : 1400} />
          {!reduced && <ScrollCamera />}
        </Suspense>
      </Canvas>
    </div>
  );
}
