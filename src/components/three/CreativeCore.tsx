'use client';

import { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import { useCoreShader } from './coreShader';

/** The floating "creative core": fbm-displaced icosphere with refined rim glow. */
export function CreativeCore({ detail = 96 }: { detail?: number }) {
  const group = useRef<THREE.Group>(null);
  const mesh = useRef<THREE.Mesh>(null);
  const matRef = useRef<THREE.ShaderMaterial>(null);
  const shader = useCoreShader();
  const { pointer } = useThree();
  const prevPointer = useRef({ x: 0, y: 0 });

  useFrame((state, delta) => {
    const mat = matRef.current;
    if (mat) {
      mat.uniforms.uTime.value = state.clock.elapsedTime;
      const p = mat.uniforms.uPointer.value as number[];
      p[0] += (pointer.x - p[0]) * 0.08;
      p[1] += (pointer.y - p[1]) * 0.08;
      // pointer velocity feeds extra displacement energy
      const vx = pointer.x - prevPointer.current.x;
      const vy = pointer.y - prevPointer.current.y;
      const speed = Math.min(Math.hypot(vx, vy) / Math.max(delta, 0.001), 3);
      mat.uniforms.uPointerVel.value +=
        (speed * 0.15 - mat.uniforms.uPointerVel.value) * 0.1;
      prevPointer.current.x = pointer.x;
      prevPointer.current.y = pointer.y;
    }
    if (mesh.current) {
      mesh.current.rotation.y += 0.0012;
      mesh.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.18) * 0.12;
    }
    if (group.current) {
      // gentle pointer-driven tilt for parallax depth
      group.current.rotation.y += (pointer.x * 0.3 - group.current.rotation.y) * 0.04;
      group.current.rotation.x += (-pointer.y * 0.2 - group.current.rotation.x) * 0.04;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.25, detail]} />
        <shaderMaterial
          ref={matRef}
          uniforms={shader.uniforms}
          vertexShader={shader.vertexShader}
          fragmentShader={shader.fragmentShader}
        />
      </mesh>
      {/* faint outer halo shell */}
      <mesh scale={1.6}>
        <sphereGeometry args={[1.25, 32, 32]} />
        <meshBasicMaterial color="#0000ff" transparent opacity={0.03} side={THREE.BackSide} />
      </mesh>
      <mesh scale={1.34}>
        <icosahedronGeometry args={[1.25, 2]} />
        <meshBasicMaterial color="#ffffff" wireframe transparent opacity={0.05} />
      </mesh>
    </group>
  );
}
