'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { CubeIcon, DevicePhoneMobileIcon, EyeIcon } from '@heroicons/react/24/outline'

export default function ARVRShowcase() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold font-orbitron mb-6">Immersive AR/VR Experience</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            Take test drives from your living room. Explore every detail with interactive 3D models.
            Experience cars like never before with cutting-edge augmented and virtual reality.
          </p>

          <div className="space-y-6">
            {[
              {
                icon: CubeIcon,
                title: '360° Interactive Tours',
                description: 'Explore interiors and exteriors in stunning 3D',
              },
              {
                icon: DevicePhoneMobileIcon,
                title: 'AR Showroom',
                description: 'Place cars in your driveway with AR technology',
              },
              {
                icon: EyeIcon,
                title: 'Virtual Test Drives',
                description: 'Experience driving simulations with VR headsets',
              },
            ].map((feature, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

          <Link href="/ar-vr" className="btn-primary inline-block mt-8">
            Launch AR/VR Experience
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="glass-morphism rounded-3xl p-8 aspect-square flex items-center justify-center">
            <div className="relative w-full h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <CubeIcon className="w-32 h-32 text-purple-500 animate-float" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
