'use client';

// Luxury Monogram — main component.
//
// Renders the fused "HI" monogram as a premium brand mark: a beveled extruded
// letterform with a brushed metallic deep-blue body and pale gold bevel edge
// highlights, floating with slow, sophisticated motion. Geometry is computed
// once at mount via useMemo and animated per-frame via useFrame.

import { useFrame } from '@react-three/fiber';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

import {
  LUXURY_COLORS,
  MONOGRAM_ANIMATION,
  MONOGRAM_MATERIAL,
} from './constants';
import { createExtrudedMonogram, createMonogramShape } from './createMonogramShape';
import { updateMonogramAnimation } from './updateMonogramAnimation';

/** Props for the {@link LuxuryMonogram} component. */
export interface LuxuryMonogramProps {
  /** Scale multiplier for the monogram group. Default: 1 */
  scale?: number;
  /** Whether the slow floating + rotation animation runs. Default: true */
  animated?: boolean;
  /**
   * Whether to render in a reduced-detail mode for mobile/performance-constrained
   * devices: fewer bevel segments and no edge line highlights. Default: false
   */
  mobile?: boolean;
}

/**
 * Renders the fused HI monogram with premium metallic material, pale gold
 * bevel edge highlights, and slow floating animation.
 */
export function LuxuryMonogram({ scale = 1, animated = true, mobile = false }: LuxuryMonogramProps) {
  const groupRef = useRef<THREE.Group>(null);

  // Compute the extruded geometry and its edge highlights once at mount.
  // Static geometry — no per-frame allocation.
  const { geometry, edgesGeometry } = useMemo(() => {
    try {
      const shape = createMonogramShape();
      const geo = createExtrudedMonogram(shape, 0.2, mobile ? { bevelSegments: 2 } : {});
      const edges = new THREE.EdgesGeometry(geo, 30);
      return { geometry: geo, edgesGeometry: edges };
    } catch (error) {
      // Fallback to a simple box if procedural geometry construction fails,
      // so the scene still renders something rather than crashing.
      console.warn('LuxuryMonogram: geometry creation failed, using fallback box geometry.', error);
      const fallback = new THREE.BoxGeometry(0.8, 1, 0.2);
      const edges = new THREE.EdgesGeometry(fallback, 30);
      return { geometry: fallback, edgesGeometry: edges };
    }
  }, [mobile]);

  useFrame((state) => {
    if (!groupRef.current || !animated) return;
    updateMonogramAnimation(groupRef.current, state.clock.elapsedTime, MONOGRAM_ANIMATION);
  });

  return (
    <group ref={groupRef} scale={scale}>
      {/* Main monogram body — brushed metallic deep blue */}
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          color={MONOGRAM_MATERIAL.color}
          metalness={MONOGRAM_MATERIAL.metalness}
          roughness={MONOGRAM_MATERIAL.roughness}
          clearcoat={MONOGRAM_MATERIAL.clearcoat}
          clearcoatRoughness={MONOGRAM_MATERIAL.clearcoatRoughness}
          envMapIntensity={MONOGRAM_MATERIAL.envMapIntensity}
        />
      </mesh>

      {/* Gold bevel edge highlights — skipped on mobile for performance */}
      {!mobile && (
        <lineSegments geometry={edgesGeometry}>
          <lineBasicMaterial color={LUXURY_COLORS.paleGold} transparent opacity={0.6} />
        </lineSegments>
      )}
    </group>
  );
}
