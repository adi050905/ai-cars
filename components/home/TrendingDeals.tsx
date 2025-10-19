'use client'

import { motion } from 'framer-motion'

export default function TrendingDeals() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl font-bold font-orbitron text-center mb-12"
      >
        Trending Deals & AI Predictions
      </motion.h2>
      <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
        AI-analyzed market trends to help you get the best deals
      </p>
    </div>
  )
}
