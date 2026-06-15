'use client';

// LuxuryLighting — studio-quality multi-light setup for the luxury monogram.
//
// Provides four complementary lights tuned for premium metallic rendering:
//   - Ambient fill: low intensity, warm tint so shadows never read as pure black
//   - Key light: directional from the upper right, drives the metallic highlights
//   - Rim light: directional from behind in Powder Blue for crisp edge separation
//   - Fill light: subtle directional from the lower left to soften harsh shadows

import { LUXURY_COLORS } from './constants';

export function LuxuryLighting(): JSX.Element {
  return (
    <>
      {/* Ambient fill — low intensity, warm tint */}
      <ambientLight color={LUXURY_COLORS.floralWhite} intensity={0.3} />

      {/* Key light — upper right, for metallic highlights */}
      <directionalLight position={[5, 5, 5]} intensity={1.2} />

      {/* Rim light — behind, Powder Blue, for edge separation */}
      <directionalLight
        position={[0, 2, -5]}
        color={LUXURY_COLORS.powderBlue}
        intensity={0.8}
      />

      {/* Fill light — lower left, subtle, to prevent harsh shadows */}
      <directionalLight position={[-4, -2, 3]} intensity={0.4} />
    </>
  );
}
