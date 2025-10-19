import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

interface CarModelProps {
  color: string
}

export default function CarModel({ color }: CarModelProps) {
  const meshRef = useRef<THREE.Mesh>(null)

  // Gentle rotation animation
  useFrame(state => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1
    }
  })

  // Create a simple car-like geometry (placeholder for actual 3D model)
  return (
    <group>
      {/* Car Body */}
      <mesh ref={meshRef} position={[0, 0.5, 0]} castShadow>
        <boxGeometry args={[2, 0.8, 4]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} envMapIntensity={1} />
      </mesh>

      {/* Car Top/Cabin */}
      <mesh position={[0, 1.2, -0.3]} castShadow>
        <boxGeometry args={[1.8, 0.6, 2]} />
        <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} envMapIntensity={1} />
      </mesh>

      {/* Windows */}
      <mesh position={[0, 1.2, -0.3]}>
        <boxGeometry args={[1.7, 0.5, 1.9]} />
        <meshStandardMaterial
          color="#1a1a2e"
          metalness={0.9}
          roughness={0.1}
          opacity={0.3}
          transparent
        />
      </mesh>

      {/* Wheels */}
      {[
        [-0.8, 0.3, 1.3],
        [0.8, 0.3, 1.3],
        [-0.8, 0.3, -1.3],
        [0.8, 0.3, -1.3],
      ].map((position, index) => (
        <group key={index} position={position as [number, number, number]}>
          <mesh rotation={[0, 0, Math.PI / 2]} castShadow>
            <cylinderGeometry args={[0.35, 0.35, 0.3, 32]} />
            <meshStandardMaterial color="#1a1a1a" metalness={0.9} roughness={0.3} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.2, 0.2, 0.32, 32]} />
            <meshStandardMaterial color="#888888" metalness={1} roughness={0.2} />
          </mesh>
        </group>
      ))}

      {/* Headlights */}
      {[
        [-0.6, 0.5, 2],
        [0.6, 0.5, 2],
      ].map((position, index) => (
        <mesh key={index} position={position as [number, number, number]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#ffffff" emissive="#ffff00" emissiveIntensity={0.5} />
        </mesh>
      ))}

      {/* Taillights */}
      {[
        [-0.6, 0.5, -2],
        [0.6, 0.5, -2],
      ].map((position, index) => (
        <mesh key={index} position={position as [number, number, number]}>
          <sphereGeometry args={[0.15, 16, 16]} />
          <meshStandardMaterial color="#ff0000" emissive="#ff0000" emissiveIntensity={0.3} />
        </mesh>
      ))}
    </group>
  )
}

// In production, replace with actual GLTF model loading:
// const { scene } = useGLTF('/models/car.gltf')
// return <primitive object={scene} scale={1.5} />
