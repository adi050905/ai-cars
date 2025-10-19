'use client'

import { motion } from 'framer-motion'
import { CubeIcon, DevicePhoneMobileIcon, EyeIcon } from '@heroicons/react/24/outline'

export default function ARVRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-cyan-900 to-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            <CubeIcon className="w-12 h-12 inline-block mr-4 text-cyan-400" />
            AR/VR <span className="text-cyan-400">Experience</span>
          </h1>
          <p className="text-xl text-gray-300">
            Test drive vehicles from anywhere in the world using cutting-edge technology
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20"
          >
            <EyeIcon className="w-16 h-16 mb-6 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white mb-4">Virtual Reality Showroom</h2>
            <p className="text-gray-300 mb-6">
              Immerse yourself in a fully interactive VR showroom. Walk around vehicles, open doors,
              check the interior, and experience the car like never before.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                360° Interior & Exterior Views
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Real-time Customization
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Virtual Test Drives
              </li>
            </ul>
            <button
              onClick={() => {
                alert(
                  'VR Showroom is launching...\n\nThis feature requires a VR headset (Oculus Quest, HTC Vive, etc.)\n\nIn production, this would:\n• Launch the VR application\n• Connect to your VR device\n• Load the 3D showroom environment\n• Enable interactive car exploration'
                )
              }}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Enter VR Showroom
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20"
          >
            <DevicePhoneMobileIcon className="w-16 h-16 mb-6 text-cyan-400" />
            <h2 className="text-3xl font-bold text-white mb-4">Augmented Reality</h2>
            <p className="text-gray-300 mb-6">
              Use your smartphone to project any vehicle into your driveway. See exactly how it
              looks in your space before making a decision.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Place Cars in Real Environment
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Change Colors & Configurations
              </li>
              <li className="flex items-center text-gray-300">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                Share with Friends & Family
              </li>
            </ul>
            <button
              onClick={() => {
                alert(
                  'AR Mode is starting...\n\nThis feature works best on mobile devices with ARKit (iOS) or ARCore (Android).\n\nIn production, this would:\n• Activate your camera\n• Detect surfaces in your environment\n• Place 3D car models in real space\n• Allow you to walk around and interact\n\nPlease open this on a mobile device for the full experience!'
                )
              }}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg transition-colors"
            >
              Launch AR Mode
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Experience the Future?</h2>
          <p className="text-white/90 text-lg mb-8">
            Download our mobile app for the full AR experience
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => {
                alert(
                  'Redirecting to App Store...\n\nIn production, this would open:\nhttps://apps.apple.com/app/futurecars'
                )
                // window.open('https://apps.apple.com/app/futurecars', '_blank')
              }}
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download for iOS
            </button>
            <button
              onClick={() => {
                alert(
                  'Redirecting to Google Play Store...\n\nIn production, this would open:\nhttps://play.google.com/store/apps/details?id=com.futurecars'
                )
                // window.open('https://play.google.com/store/apps/details?id=com.futurecars', '_blank')
              }}
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Download for Android
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
