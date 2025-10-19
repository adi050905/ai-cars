'use client'

import { motion } from 'framer-motion'
import { useEffect, useState, memo } from 'react'
import { ChevronDownIcon, PlayIcon, SparklesIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

// Memoized stats array to prevent re-creation on every render
const STATS = [
  { label: 'Cars Available', value: '10,000+' },
  { label: 'AI Recommendations', value: '1M+' },
  { label: 'Happy Customers', value: '50K+' },
  { label: 'Blockchain Verified', value: '100%' },
] as const

const Hero = memo(function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    // Throttle scroll events for better performance
    let ticking = false
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 glass-morphism rounded-full px-6 py-3"
          >
            <SparklesIcon className="w-5 h-5 text-blue-500" />
            <span className="text-sm font-semibold">AI-Powered | AR/VR | Blockchain</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold font-orbitron"
          >
            The Future of
            <br />
            <span className="gradient-text">Car Shopping</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Experience intelligent car discovery with AI recommendations, immersive AR/VR test
            drives, and blockchain-verified ownership
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link href="/cars" className="btn-primary text-lg px-8 py-4">
              Explore Cars
              <SparklesIcon className="w-5 h-5 inline-block ml-2" />
            </Link>
            <Link href="/ar-vr" className="btn-secondary text-lg px-8 py-4">
              <PlayIcon className="w-5 h-5 inline-block mr-2" />
              Try AR Experience
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-16"
          >
            {STATS.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold gradient-text font-orbitron">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <ChevronDownIcon className="w-8 h-8 text-gray-400" />
          </motion.div>
        </div>
      </div>
    </section>
  )
})

export default Hero
