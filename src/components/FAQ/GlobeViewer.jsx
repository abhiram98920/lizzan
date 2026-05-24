import React, { Suspense, useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useGLTF, useTexture, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return <div style={{color:'red', padding:'20px'}}><h3>3D Error:</h3><pre>{this.state.error?.toString()}</pre></div>;
    }
    return this.props.children;
  }
}

function GlobeModel() {
  const group = useRef()
  const { scene } = useGLTF(`${import.meta.env.BASE_URL}model.glb`)
  const texture = useTexture('https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg')

  // Flip texture if necessary, usually spherical maps might need it
  texture.colorSpace = THREE.SRGBColorSpace

  // Apply texture to all meshes in the scene
  scene.traverse((child) => {
    if (child.isMesh) {
      child.material.map = texture
      child.material.roughness = 0.5
      child.material.metalness = 0.1
      child.material.needsUpdate = true
    }
  })

  // Auto-rotate
  useFrame(() => {
    if (group.current) {
      group.current.rotation.y += 0.003
    }
  })

  return (
    <group ref={group}>
      <primitive object={scene} scale={3.5} position={[0, 0, 0]} />
    </group>
  )
}

export default function GlobeViewer() {
  return (
    <div style={{ width: '100%', height: '100%', minHeight: '500px', cursor: 'grab' }}>
      <ErrorBoundary>
        <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 3, 5]} intensity={2.5} />
          <directionalLight position={[-5, -3, -5]} intensity={0.5} />
          <Suspense fallback={null}>
            <GlobeModel />
          </Suspense>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </ErrorBoundary>
    </div>
  )
}
