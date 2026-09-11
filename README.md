# Interactive 3D Configurator

An interactive 3D web experience built with Next.js, React Three Fiber, and Leva controls.

## What I Built

- An interactive 3D configurator featuring floating complex geometries with custom lighting and material controls.
- Real-time manipulation of colors, roughness, metalness, and wireframe mode via an integrated Leva panel.

## Performance & Optimization Notes

- **Lazy Loading**: Loaded the 3D Canvas dynamically with `next/dynamic` (`ssr: false`) to minimize the initial load footprint.
- **Render Budget**: Optimized shadow rendering and material calculations using R3F `Stage` preset environments.
- **Fallback Handling**: Implemented a responsive SSR-safe loading state for slower networks and low-power devices.

## Future Enhancements

- Support for external `.glb` / `.gltf` drag-and-drop file imports.
- Texture map switching for realistic product visualizers.
