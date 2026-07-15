'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { OrbitControls, PerformanceMonitor } from '@react-three/drei'
import * as THREE from 'three'
import { WatercolorMaterial } from './WatercolorMaterial'
import { useInView } from '../../hooks/useInView'
import { useReducedMotion } from '../../hooks/useReducedMotion'

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null)
  const { clock } = useThree()
  const reducedMotion = useReducedMotion()

  const count = 2000

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    let seed = 0.123456789
    const random = () => {
      seed = (seed * 16807) % 2147483647
      return (seed - 1) / 2147483646
    }
    for (let i = 0; i < count; i++) {
      const radius = 25 + random() * 25
      const theta = random() * Math.PI * 2
      const phi = Math.acos(2 * random() - 1)
      arr[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
      arr[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
      arr[i * 3 + 2] = radius * Math.cos(phi)
    }
    return arr
  }, [])

  const sizes = useMemo(() => {
    const arr = new Float32Array(count)
    let seed = 0.987654321
    const random = () => {
      seed = (seed * 16807) % 2147483647
      return (seed - 1) / 2147483646
    }
    for (let i = 0; i < count; i++) {
      arr[i] = random() * 1.5 + 0.5
    }
    return arr
  }, [])

  const alphas = useMemo(() => {
    const arr = new Float32Array(count)
    let seed = 0.555555555
    const random = () => {
      seed = (seed * 16807) % 2147483647
      return (seed - 1) / 2147483646
    }
    for (let i = 0; i < count; i++) {
      arr[i] = random() * 0.5 + 0.1
    }
    return arr
  }, [])

  useFrame(() => {
    if (!pointsRef.current || reducedMotion) return
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.003
    const pos = pointsRef.current.geometry.attributes.position.array
    for (let i = 0; i < count; i++) {
      pos[i * 3 + 1] += Math.sin(clock.getElapsedTime() + i * 0.1) * 0.0008
    }
    pointsRef.current.geometry.attributes.position.needsUpdate = true
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-size" args={[sizes, 1]} />
        <bufferAttribute attach="attributes-alpha" args={[alphas, 1]} />
      </bufferGeometry>
      <pointsMaterial
        size={1.2}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  )
}

function MouseLight() {
  const lightRef = useRef<THREE.PointLight>(null)
  const { camera, mouse } = useThree()
  const reducedMotion = useReducedMotion()

  useFrame(() => {
    if (!lightRef.current || reducedMotion) return
    const vector = new THREE.Vector3(
      mouse.x * 20,
      mouse.y * 20,
      10
    ).unproject(camera)

    lightRef.current.position.lerp(vector, 0.1)
  })

  return <pointLight ref={lightRef} color="#00e5ff" intensity={3} distance={50} decay={2} />
}

export function Canvas3D() {
  const [ref] = useInView({ threshold: 0, rootMargin: '100px', triggerOnce: false })
  const reducedMotion = useReducedMotion()

  return (
    <div ref={ref} className="absolute inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 3, 25], fov: 45 }}
        gl={{ preserveDrawingBuffer: true }}
        onCreated={({ gl }) => {
          gl.setClearColor(0x030712, 1)
        }}
        style={{ position: 'absolute', inset: 0 }}
      >
        <fog attach="fog" args={['#030712', 15, 80]} />
        <ambientLight intensity={0.35} />
        <directionalLight position={[20, 40, 20]} intensity={1.2} color="#ffffff" castShadow />
        <directionalLight position={[-15, 25, -15]} intensity={0.6} color="#00e5ff" />
        <MouseLight />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
          <planeGeometry args={[60, 60, 1, 1]} />
          <primitive
            object={new WatercolorMaterial({
              transparent: true,
              side: THREE.DoubleSide,
              depthWrite: false,
            })}
            attach="material"
          />
        </mesh>
        <ParticleField />
        <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} autoRotate={!reducedMotion} autoRotateSpeed={0.2} />
        <PerformanceMonitor />
      </Canvas>
    </div>
  )
}