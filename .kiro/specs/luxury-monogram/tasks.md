# Implementation Plan: Luxury Monogram

## Overview

Replace the existing CreativeCore 3D blob with a luxury "HI" monogram component. The implementation proceeds incrementally: constants and types first, then the core monogram geometry and material, followed by supporting scene elements (halo, floor, lighting), scene integration, and finally mobile/accessibility optimizations.

## Tasks

- [x] 1. Create constants, types, and utility functions
  - [x] 1.1 Create `src/components/three/luxuryMonogram/constants.ts` with LUXURY_COLORS palette and MONOGRAM_ANIMATION config
    - Define color constants (deepBlue, powderBlue, floralWhite, paleGold, background)
    - Define AnimationConfig interface and MONOGRAM_ANIMATION values
    - Define MonogramMaterialConfig and MONOGRAM_MATERIAL values
    - _Requirements: 2.1, 2.2, 2.4, 3.1, 3.2, 3.3_

  - [x] 1.2 Create `src/components/three/luxuryMonogram/createMonogramShape.ts` with the shape construction function
    - Implement createMonogramShape() returning a closed THREE.Shape for fused HI letterform
    - Implement createExtrudedMonogram(shape, depth) returning ExtrudeGeometry with bevel
    - Center the geometry at origin after extrusion
    - _Requirements: 1.1, 1.2, 1.3, 1.4_

  - [x] 1.3 Create `src/components/three/luxuryMonogram/updateMonogramAnimation.ts` with the animation function
    - Implement updateMonogramAnimation(group, elapsedTime, config) pure function
    - Apply Y-axis rotation at config.rotationSpeedY rate
    - Apply X-axis oscillation bounded by config.rotationAmplitudeX
    - Apply Y-axis float bounded by config.floatAmplitude
    - _Requirements: 3.1, 3.2, 3.3, 3.4_

  - [ ]* 1.4 Write property tests for animation function
    - **Property 1: Animation values remain bounded**
    - **Validates: Requirements 3.1, 3.2, 3.3**
    - Use fast-check to generate random elapsed time values and verify all outputs stay within configured bounds

  - [ ]* 1.5 Write property test for animation continuity
    - **Property 2: Animation continuity (no discontinuities)**
    - **Validates: Requirements 3.4**
    - Use fast-check to generate pairs of close time values and verify the position/rotation delta is proportionally small

- [x] 2. Implement LuxuryMonogram component
  - [x] 2.1 Create `src/components/three/luxuryMonogram/LuxuryMonogram.tsx`
    - Define LuxuryMonogramProps interface (scale, animated)
    - Use useMemo to compute geometry and edgesGeometry once at mount
    - Render main mesh with MeshPhysicalMaterial (deepBlue, metalness 0.85, roughness 0.35, clearcoat 0.3)
    - Render lineSegments with paleGold LineBasicMaterial for edge highlights
    - Use useFrame to call updateMonogramAnimation when animated=true
    - Add try/catch around geometry creation with box geometry fallback and console.warn
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 2.1, 2.2, 2.3, 2.4, 3.1, 3.2, 3.3, 3.4, 8.1, 8.2, 9.1, 9.2_

  - [ ]* 2.2 Write unit tests for LuxuryMonogram component
    - Test that createMonogramShape produces a valid closed shape
    - Test that geometry fallback triggers on invalid shape
    - Test material configuration matches design spec values
    - _Requirements: 1.4, 2.1, 2.2, 9.1, 9.2_

- [x] 3. Implement supporting scene components
  - [x] 3.1 Create `src/components/three/luxuryMonogram/MonogramHalo.tsx`
    - Define MonogramHaloProps interface (radius, intensity)
    - Render circular PlaneGeometry positioned at negative Z
    - Implement halo fragment shader with radial Gaussian falloff
    - Add subtle pulse animation (±5% intensity) in useFrame
    - Use Powder_Blue color for glow
    - _Requirements: 4.1, 4.2, 4.3, 4.4_

  - [ ]* 3.2 Write property test for halo intensity bounds
    - **Property 3: Halo glow intensity remains bounded**
    - **Validates: Requirements 4.3**
    - Use fast-check to generate random time values and verify pulse multiplier stays within [0.95, 1.05]

  - [x] 3.3 Create `src/components/three/luxuryMonogram/ReflectiveFloor.tsx`
    - Define ReflectiveFloorProps interface (position)
    - Render horizontal PlaneGeometry at Y=-1.8 with rotation.x = -Math.PI/2
    - Apply MeshPhysicalMaterial with dark navy color, low opacity, metalness for subtle reflection
    - _Requirements: 5.1, 5.2_

  - [x] 3.4 Create `src/components/three/luxuryMonogram/LuxuryLighting.tsx`
    - Render ambient light (low intensity, warm tint)
    - Render directional key light (upper right position)
    - Render rim light (behind, Powder_Blue color)
    - Render fill light (lower left, subtle)
    - _Requirements: 6.1, 6.2, 6.3, 6.4_

  - [x] 3.5 Create `src/components/three/luxuryMonogram/index.ts` barrel export
    - Export LuxuryMonogram, MonogramHalo, ReflectiveFloor, LuxuryLighting
    - _Requirements: 7.1_

- [x] 4. Checkpoint - Verify components build
  - Ensure all tests pass, ask the user if questions arise.

- [x] 5. Integrate into existing Scene
  - [x] 5.1 Update `src/components/three/Scene.tsx` to use new components
    - Remove CreativeCore import and usage
    - Remove Particles import and usage
    - Import and render LuxuryMonogram, MonogramHalo, ReflectiveFloor, LuxuryLighting
    - Pass isMobile to LuxuryMonogram for conditional detail reduction
    - Pass reduced motion flag to disable animation (animated={!reduced})
    - Preserve ScrollCamera, frameloop logic, IntersectionObserver pause, and Canvas config
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 3.5, 8.3, 8.4_

  - [ ]* 5.2 Write integration tests for Scene composition
    - Verify LuxuryMonogram is rendered (not CreativeCore)
    - Verify Particles is not rendered
    - Verify ScrollCamera is still present
    - _Requirements: 7.1, 7.2, 7.3_

- [x] 6. Mobile and accessibility optimizations
  - [x] 6.1 Add mobile prop support to LuxuryMonogram
    - Accept a `mobile` boolean prop
    - When mobile=true: reduce extrude bevelSegments to 2, disable edge lineSegments rendering
    - _Requirements: 8.3_

  - [x] 6.2 Verify reduced-motion behavior
    - Ensure animated={false} results in static monogram at default position (no rotation, no float)
    - _Requirements: 3.5_

- [x] 7. Cleanup and final verification
  - [x] 7.1 Remove deprecated files
    - Delete `src/components/three/coreShader.ts` (no longer needed)
    - Delete or repurpose `src/components/three/Particles.tsx` if unused elsewhere
    - _Requirements: 7.1, 7.2_

  - [x] 7.2 Verify build passes with no TypeScript errors
    - Run `next build` to confirm no compile errors
    - _Requirements: 7.5_

- [x] 8. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Task Dependency Graph

```json
{
  "waves": [
    {
      "wave": 1,
      "tasks": ["1"],
      "description": "Create constants, types, and utility functions"
    },
    {
      "wave": 2,
      "tasks": ["2", "3"],
      "description": "Implement LuxuryMonogram and supporting scene components in parallel"
    },
    {
      "wave": 3,
      "tasks": ["4"],
      "description": "Checkpoint - verify components build"
    },
    {
      "wave": 4,
      "tasks": ["5"],
      "description": "Integrate into existing Scene"
    },
    {
      "wave": 5,
      "tasks": ["6"],
      "description": "Mobile and accessibility optimizations"
    },
    {
      "wave": 6,
      "tasks": ["7"],
      "description": "Cleanup and final verification"
    },
    {
      "wave": 7,
      "tasks": ["8"],
      "description": "Final checkpoint"
    }
  ]
}
```

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- The project uses TypeScript with Next.js, React Three Fiber, and Three.js
- No new dependencies are required — all needed packages are already installed
