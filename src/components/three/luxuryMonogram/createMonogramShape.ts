// Luxury Monogram — geometry construction.
//
// Procedurally builds the fused "HI" letterform as a 2D THREE.Shape and
// extrudes it into a beveled 3D ExtrudeGeometry. The H and I share a vertical
// stroke (the right leg of the H doubles as the I), producing a compact,
// recognizable brand mark. All geometry is generated client-side with no
// external assets.

import * as THREE from 'three';

/**
 * Build the fused "HI" monogram as a closed 2D shape.
 *
 * The path traces a single continuous outline where the H's right vertical
 * stroke extends to full height and serves as the I. The resulting bounding
 * box spans x ∈ [0, 0.8] and y ∈ [0, 1.0], giving an aspect ratio of
 * approximately 4:5 (width:height).
 *
 * @returns A closed {@link THREE.Shape} representing the fused HI letterform.
 */
export function createMonogramShape(): THREE.Shape {
  const shape = new THREE.Shape();

  // H — left vertical stroke (bottom edge then up the inner side)
  shape.moveTo(0, 0);
  shape.lineTo(0.2, 0);
  shape.lineTo(0.2, 0.4);

  // H — horizontal crossbar connecting to the right stroke
  shape.lineTo(0.6, 0.4);
  shape.lineTo(0.6, 0);

  // H/I shared right vertical (extends full height for the I)
  shape.lineTo(0.8, 0);
  shape.lineTo(0.8, 1.0);

  // I — top cap of the I / top of the shared right stroke
  shape.lineTo(0.6, 1.0);
  shape.lineTo(0.6, 0.6);

  // H — crossbar top edge back toward the left stroke
  shape.lineTo(0.2, 0.6);
  shape.lineTo(0.2, 1.0);

  // H — left vertical top, then close the path back to the origin
  shape.lineTo(0, 1.0);
  shape.closePath();

  return shape;
}

/** Options controlling how the monogram shape is extruded into 3D. */
export interface ExtrudeOptions {
  /**
   * Number of segments used to subdivide the bevel. Higher values produce
   * smoother edge transitions; lower values reduce geometry detail for
   * mobile/performance-constrained devices. Default: 4.
   */
  bevelSegments?: number;
}

/**
 * Extrude a monogram shape into a beveled 3D geometry centered at the origin.
 *
 * The geometry is recentered after extrusion so the monogram pivots around its
 * own visual center (important for the floating/rotation animation).
 *
 * @param shape - A closed {@link THREE.Shape}, typically from {@link createMonogramShape}.
 * @param depth - Extrusion depth along Z. Recommended range: 0.15–0.3. Default: 0.2.
 * @param options - Optional extrude tuning (e.g. {@link ExtrudeOptions.bevelSegments}).
 * @returns An {@link THREE.ExtrudeGeometry} with beveled edges, centered at the origin.
 */
export function createExtrudedMonogram(
  shape: THREE.Shape,
  depth = 0.2,
  options: ExtrudeOptions = {},
): THREE.ExtrudeGeometry {
  const { bevelSegments = 4 } = options;

  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: 0.02,
    bevelSize: 0.015,
    bevelSegments,
    curveSegments: 12,
    steps: 1,
  });

  // Recenter so the monogram rotates and floats around its own center.
  geometry.center();

  return geometry;
}
