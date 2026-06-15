'use client';

// ReflectiveFloor — subtle reflective plane beneath the luxury monogram.
//
// Renders a large horizontal plane below the monogram using a dark navy
// MeshPhysicalMaterial. Low opacity plus high metalness produces faint,
// premium specular highlights that ground the monogram in the scene without
// drawing focus.

import { LUXURY_COLORS } from './constants';

export interface ReflectiveFloorProps {
  /** Y position of the floor plane. Default: -1.8 */
  position?: number;
}

export function ReflectiveFloor({
  position = -1.8,
}: ReflectiveFloorProps): JSX.Element {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, position, 0]}>
      <planeGeometry args={[30, 30]} />
      <meshPhysicalMaterial
        color={LUXURY_COLORS.background}
        transparent
        opacity={0.4}
        metalness={0.8}
        roughness={0.4}
      />
    </mesh>
  );
}
