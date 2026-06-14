'use client';

import dynamic from 'next/dynamic';

// R3F must never run during SSR.
const Scene = dynamic(
  () => import('./Scene').then((m) => m.Scene),
  { ssr: false }
);

export function SceneCanvas() {
  return <Scene />;
}
