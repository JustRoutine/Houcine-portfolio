'use client';

import { Canvas } from '@react-three/fiber';
import { Suspense, useEffect, useState } from 'react';
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
    setReduced(
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );
  }, []);
  return reduced;
}

/** Full-viewport fixed background scene. Lazy-loaded, mobile/reduced-motion aware. */
export function Scene() {
  const isMobile = useIsMobile();
  const reduced = useReducedMotion();

  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 42 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <pointLight position={[5, 5, 5]} intensity={1.2} color="#0000ff" />
          <pointLight position={[-5, -3, 2]} intensity={1} color="#ff007f" />
          <CreativeCore />
          <Particles count={isMobile ? 500 : 1400} />
          {!reduced && <ScrollCamera />}
        </Suspense>
      </Canvas>
    </div>
  );
}
