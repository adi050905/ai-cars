'use client'

import { motion } from 'framer-motion'

export default function Statistics() {
  const stats = [
    { label: 'Active Users', value: '500K+', change: '+12%' },
    { label: 'Cars Sold', value: '25K+', change: '+8%' },
    { label: 'AI Matches Made', value: '2M+', change: '+25%' },
    { label: 'Customer Satisfaction', value: '98%', change: '+3%' },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="text-center"
          >
            <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">{stat.label}</div>
            <div className="text-xs text-green-500">{stat.change} this month</div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
