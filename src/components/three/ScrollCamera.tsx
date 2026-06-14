'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Drives the camera forward based on global scroll progress (0..1),
 * read from the Lenis instance exposed on window. Adds subtle pointer parallax.
 */
export function ScrollCamera() {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 6));

  useFrame((state) => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const progress = max > 0 ? window.scrollY / max : 0;

    // travel forward + slight orbit as we descend the page
    target.current.set(
      Math.sin(progress * Math.PI * 1.2) * 1.4 + state.pointer.x * 0.4,
      progress * -1.2 + state.pointer.y * 0.3,
      6 - progress * 3.2
    );

    camera.position.lerp(target.current, 0.06);
    camera.lookAt(0, 0, 0);
  });

  return null;
}
