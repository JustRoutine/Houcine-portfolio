'use client';

// MonogramHalo — soft glowing halo rendered behind the luxury monogram.
//
// Renders a circular plane at a negative Z offset using a custom shader that
// produces a radial Gaussian falloff in Powder Blue. A subtle pulse (±5%) is
// driven each frame via the `uTime` uniform.

import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

import { LUXURY_COLORS } from './constants';

export interface MonogramHaloProps {
  /** Radius of the halo circle. Default: 2.5 */
  radius?: number;
  /** Base glow intensity. Default: 0.4 */
  intensity?: number;
}

const haloVertexShader = `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const haloFragmentShader = `
  varying vec2 vUv;
  uniform float uIntensity;
  uniform float uTime;
  uniform vec3 uColor;

  void main() {
    // Radial distance from center
    float dist = length(vUv - 0.5) * 2.0;

    // Soft radial falloff (Gaussian-like)
    float glow = exp(-dist * dist * 3.0);

    // Subtle pulse animation, bounded to [0.95, 1.05]
    float pulse = 1.0 + sin(uTime * 0.5) * 0.05;

    // Final color with alpha falloff
    float alpha = glow * uIntensity * pulse;
    gl_FragColor = vec4(uColor, alpha);
  }
`;

export function MonogramHalo({
  radius = 2.5,
  intensity = 0.4,
}: MonogramHaloProps): JSX.Element {
  const materialRef = useRef<THREE.ShaderMaterial>(null);

  // Create the shader material once. The uniforms object is stable so the
  // useFrame loop can mutate `uTime` without re-allocating each frame.
  const material = useMemo(() => {
    return new THREE.ShaderMaterial({
      vertexShader: haloVertexShader,
      fragmentShader: haloFragmentShader,
      uniforms: {
        uIntensity: { value: intensity },
        uTime: { value: 0 },
        uColor: { value: new THREE.Color(LUXURY_COLORS.powderBlue) },
      },
      transparent: true,
      depthWrite: false,
    });
  }, [intensity]);

  useFrame((state) => {
    const mat = materialRef.current;
    if (!mat) return;
    mat.uniforms.uTime.value = state.clock.elapsedTime;
  });

  return (
    <mesh position={[0, 0, -2]}>
      <planeGeometry args={[radius * 2, radius * 2]} />
      <primitive object={material} ref={materialRef} attach="material" />
    </mesh>
  );
}
