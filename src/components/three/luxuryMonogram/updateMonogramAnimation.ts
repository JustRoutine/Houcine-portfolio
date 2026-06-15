// Luxury Monogram — float animation.
//
// Pure, per-frame update that drives the monogram's slow, premium motion:
// a continuous Y-axis spin, a subtle X-axis breathing tilt, and a gentle
// vertical hover. The function only touches the group's rotation and position,
// keeping the per-frame cost to a handful of math operations.

import type * as THREE from 'three';

import type { AnimationConfig } from './constants';

/**
 * Apply the monogram's floating + rotation animation for a given moment in time.
 *
 * This is a pure side-effecting update over the group transform — given the
 * same elapsed time and config it always produces the same result, with no
 * mutations beyond `rotation` and `position`.
 *
 * @param group - A mounted {@link THREE.Group} to animate (rotation/position only).
 * @param elapsedTime - Non-negative, continuously increasing time in seconds.
 * @param config - Animation tuning (speed, amplitudes, frequency).
 *
 * @remarks
 * Postconditions:
 * - `group.rotation.y === elapsedTime * config.rotationSpeedY`
 * - `|group.rotation.x| <= config.rotationAmplitudeX`
 * - `|group.position.y| <= config.floatAmplitude`
 * - No mutations other than rotation and position.
 */
export function updateMonogramAnimation(
  group: THREE.Group,
  elapsedTime: number,
  config: AnimationConfig,
): void {
  // Very slow continuous Y rotation.
  group.rotation.y = elapsedTime * config.rotationSpeedY;

  // Subtle X-axis oscillation (breathing tilt), bounded by rotationAmplitudeX.
  group.rotation.x =
    Math.sin(elapsedTime * config.floatFrequency * 2) * config.rotationAmplitudeX;

  // Gentle Y-axis floating (hover effect), bounded by floatAmplitude.
  group.position.y =
    Math.sin(elapsedTime * config.floatFrequency * Math.PI * 2) * config.floatAmplitude;
}
