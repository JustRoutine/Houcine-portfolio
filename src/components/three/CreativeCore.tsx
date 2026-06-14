'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useCoreShader } from './coreShader';

/** The floating "creative core": a noise-displaced icosphere with rim glow. */
export function CreativeCore() {
  const mesh = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const shader = useCoreShader();
  const { pointer } = useThree();

  useFrame((state) => {
    const mat = matRef.current;
    if (mat) {
      mat.uniforms.uTime.value = state.clock.elapsedTime;
      // smooth pointer follow
      const p = mat.uniforms.uPointer.value as number[];
      p[0] += (pointer.x - p[0]) * 0.05;
      p[1] += (pointer.y - p[1]) * 0.05;
    }
    if (mesh.current) {
      mesh.current.rotation.y += 0.0016;
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
    }
  });

  return (
    <group>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.25, 64]} />
        <shaderMaterial
          ref={matRef}
          uniforms={shader.uniforms}
          vertexShader={shader.vertexShader}
          fragmentShader={shader.fragmentShader}
        />
      </mesh>
      {/* inner wire shell for depth */}
      <mesh scale={1.32}>
        <icosahedronGeometry args={[1.25, 3]} />
        <meshBasicMaterial color="#0000ff" wireframe transparent opacity={0.08} />
      </mesh>
    </group>
  );
}
