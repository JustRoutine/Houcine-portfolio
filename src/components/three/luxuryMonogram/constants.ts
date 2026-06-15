// Luxury Monogram — shared constants, types, and configuration.
//
// Centralizes the color palette, animation tuning, and material settings used
// across the LuxuryMonogram component and supporting scene elements (halo,
// floor, lighting). Keeping these values in one place keeps the rendered look
// consistent and makes the "premium" tuning easy to adjust.

/**
 * Curated luxury color palette for the monogram scene.
 *
 * - deepBlue: primary monogram body color (brushed metallic)
 * - powderBlue: halo glow and rim lighting
 * - floralWhite: warm off-white accent
 * - paleGold: bevel edge highlights
 * - background: darker navy used for the scene background
 */
export const LUXURY_COLORS = {
  deepBlue: '#182350',
  powderBlue: '#AFD2FA',
  floralWhite: '#FEFAEF',
  paleGold: '#B9915E',
  background: '#0a0f1e', // darker navy for scene background
} as const;

/** Union of the valid hex color values defined in {@link LUXURY_COLORS}. */
export type LuxuryColor = (typeof LUXURY_COLORS)[keyof typeof LUXURY_COLORS];

/** Tuning parameters for the monogram's slow floating + rotation motion. */
export interface AnimationConfig {
  /** Rotation speed multiplier on Y-axis (radians per elapsed second). */
  rotationSpeedY: number;
  /** Rotation amplitude on X-axis (radians). */
  rotationAmplitudeX: number;
  /** Floating amplitude on Y-axis (units). */
  floatAmplitude: number;
  /** Floating frequency (cycles per second). */
  floatFrequency: number;
}

/** Default animation tuning — very slow, premium motion. */
export const MONOGRAM_ANIMATION: AnimationConfig = {
  rotationSpeedY: 0.08, // very slow continuous rotation
  rotationAmplitudeX: 0.04, // subtle tilt
  floatAmplitude: 0.06, // gentle hover
  floatFrequency: 0.3, // slow breathing motion
};

/** Configuration for the monogram body's MeshPhysicalMaterial. */
export interface MonogramMaterialConfig {
  color: string;
  metalness: number;
  roughness: number;
  clearcoat: number;
  clearcoatRoughness: number;
  envMapIntensity: number;
}

/** Brushed metallic deep-blue material settings for the monogram body. */
export const MONOGRAM_MATERIAL: MonogramMaterialConfig = {
  color: LUXURY_COLORS.deepBlue,
  metalness: 0.85,
  roughness: 0.35, // brushed metal look (not mirror, not matte)
  clearcoat: 0.3,
  clearcoatRoughness: 0.4,
  envMapIntensity: 1.2,
};
