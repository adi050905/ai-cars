'use client'

import { motion } from 'framer-motion'
import {
  SparklesIcon,
  MicrophoneIcon,
  CpuChipIcon,
  ChatBubbleLeftRightIcon,
  ChartBarIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline'

export default function AIFeatures() {
  const features = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'AI Assistant',
      description: 'Get instant answers, recommendations, and support from our intelligent chatbot',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: MicrophoneIcon,
      title: 'Voice Control',
      description:
        'Navigate hands-free with advanced voice recognition and natural language processing',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: CpuChipIcon,
      title: 'Smart Matching',
      description:
        'ML algorithms find your perfect car based on lifestyle, budget, and preferences',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: SparklesIcon,
      title: 'Predictive Analytics',
      description: 'AI-powered insights on pricing trends, depreciation, and market forecasts',
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: ChartBarIcon,
      title: 'Cost Analysis',
      description: 'Comprehensive breakdown of ownership costs, maintenance, and resale value',
      color: 'from-indigo-500 to-purple-500',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Fraud Detection',
      description: 'Advanced AI monitors and prevents fraudulent listings and transactions',
      color: 'from-yellow-500 to-orange-500',
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold font-orbitron mb-4"
        >
          AI-Powered Features
        </motion.h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Experience the next generation of intelligent car shopping
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="glass-morphism rounded-2xl p-8 group cursor-pointer"
          >
            <div
              className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
            >
              <feature.icon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
