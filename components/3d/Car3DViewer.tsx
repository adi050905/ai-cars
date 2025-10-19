'use client'

import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera, Environment, ContactShadows } from '@react-three/drei'
import { motion } from 'framer-motion'
import CarModel from './CarModel'

interface Car3DViewerProps {
  carModel: string
  color?: string
  onColorChange?: (color: string) => void
}

export default function Car3DViewer({
  carModel,
  color = '#ff0000',
  onColorChange,
}: Car3DViewerProps) {
  const availableColors = [
    { name: 'Red', value: '#ff0000' },
    { name: 'Blue', value: '#0000ff' },
    { name: 'Black', value: '#000000' },
    { name: 'White', value: '#ffffff' },
    { name: 'Silver', value: '#c0c0c0' },
    { name: 'Green', value: '#00ff00' },
  ]

  return (
    <div className="relative w-full h-[600px] rounded-2xl overflow-hidden glass-morphism">
      {/* 3D Canvas */}
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={[5, 2, 5]} fov={50} />
        <OrbitControls
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minDistance={3}
          maxDistance={10}
        />

        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <pointLight position={[-10, -10, -10]} intensity={0.5} />

        <Suspense fallback={null}>
          <CarModel color={color} />
          <Environment preset="sunset" />
          <ContactShadows position={[0, -0.8, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
        </Suspense>
      </Canvas>

      {/* Color Picker */}
      <div className="absolute bottom-6 left-6 right-6 glass-morphism rounded-xl p-4">
        <p className="text-sm font-semibold mb-3">Customize Color:</p>
        <div className="flex space-x-3 overflow-x-auto">
          {availableColors.map(c => (
            <motion.button
              key={c.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => onColorChange?.(c.value)}
              className={`flex-shrink-0 w-12 h-12 rounded-full border-4 transition-all ${
                color === c.value
                  ? 'border-blue-600 shadow-lg ring-2 ring-blue-400'
                  : 'border-gray-300 dark:border-gray-600'
              }`}
              style={{ backgroundColor: c.value }}
              aria-label={c.name}
            />
          ))}
        </div>
      </div>

      {/* Controls Info */}
      <div className="absolute top-6 right-6 glass-morphism rounded-xl p-4 text-sm">
        <p className="font-semibold mb-2">Controls:</p>
        <ul className="space-y-1 text-xs">
          <li>🖱️ Drag to rotate</li>
          <li>🔍 Scroll to zoom</li>
          <li>🎨 Click colors to change</li>
        </ul>
      </div>
    </div>
  )
}
