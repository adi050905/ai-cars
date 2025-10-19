'use client'

import { motion } from 'framer-motion'
import { BoltIcon, MapPinIcon, SparklesIcon } from '@heroicons/react/24/outline'

export default function EVDashboard() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold font-orbitron text-center mb-12"
      >
        EV Solutions Hub
      </motion.h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: MapPinIcon, title: 'Charging Stations', value: '50,000+' },
          { icon: BoltIcon, title: 'Avg. Range', value: '350 miles' },
          { icon: SparklesIcon, title: 'CO₂ Saved', value: '2.5M tons' },
        ].map((stat, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-morphism rounded-2xl p-8 text-center"
          >
            <stat.icon className="w-12 h-12 mx-auto mb-4 text-green-500" />
            <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
            <div className="text-gray-600 dark:text-gray-400">{stat.title}</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
