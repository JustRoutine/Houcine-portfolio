'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/**
 * Cinematic scroll-driven camera. Uses eased scroll progress to dolly forward,
 * arc subtly, and add damped pointer parallax. lookAt is also offset slightly
 * so the framing breathes rather than staying locked.
 */
export function ScrollCamera() {
  const { camera } = useThree();
  const pos = useRef(new THREE.Vector3(0, 0, 6));
  const look = useRef(new THREE.Vector3(0, 0, 0));
  const lookTarget = useRef(new THREE.Vector3(0, 0, 0));
  const smoothProgress = useRef(0);

  useFrame((state) => {
    const doc = document.documentElement;
    const max = doc.scrollHeight - window.innerHeight;
    const raw = max > 0 ? window.scrollY / max : 0;
    // ease the scroll progress for cinematic inertia
    smoothProgress.current += (raw - smoothProgress.current) * 0.07;
    const p = smoothProgress.current;

    const px = state.pointer.x;
    const py = state.pointer.y;

    // dolly + arc: travel inward and sweep around the core
    pos.current.set(
      Math.sin(p * Math.PI * 1.1) * 1.8 + px * 0.5,
      p * -1.4 + py * 0.35,
      6 - p * 3.6
    );
    camera.position.lerp(pos.current, 0.05);

    // breathing look target
    lookTarget.current.set(px * 0.3, py * 0.2 - p * 0.3, 0);
    look.current.lerp(lookTarget.current, 0.05);
    camera.lookAt(look.current);

    // subtle fov push for depth on scroll
    const cam = camera as THREE.PerspectiveCamera;
    const targetFov = 42 + p * 6;
    cam.fov += (targetFov - cam.fov) * 0.05;
    cam.updateProjectionMatrix();
  });

  return null;
}
