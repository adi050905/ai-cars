'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  QuestionMarkCircleIcon,
  ChatBubbleLeftRightIcon,
  BookOpenIcon,
  VideoCameraIcon,
  PhoneIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline'

export default function HelpPage() {
  const categories = [
    {
      icon: QuestionMarkCircleIcon,
      title: 'Getting Started',
      description: 'Learn the basics of using our platform',
      articles: 12,
      link: '#getting-started',
    },
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Buying & Selling',
      description: 'Complete guides for transactions',
      articles: 18,
      link: '#buying-selling',
    },
    {
      icon: VideoCameraIcon,
      title: 'AR/VR Features',
      description: 'How to use virtual showrooms',
      articles: 8,
      link: '#ar-vr',
    },
    {
      icon: BookOpenIcon,
      title: 'Account Management',
      description: 'Manage your profile and settings',
      articles: 15,
      link: '#account',
    },
  ]

  const popularArticles = [
    'How do I schedule a test drive?',
    'What is blockchain vehicle verification?',
    'How does AI car matching work?',
    'Can I sell my car on the platform?',
    'How to use the AR showroom on mobile?',
    'What payment methods are accepted?',
    'How to contact a seller?',
    'Understanding the car inspection report',
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              How Can We
              <span className="gradient-text"> Help You?</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Search our knowledge base or get in touch with support
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search for help articles..."
                className="w-full pl-14 pr-4 py-4 rounded-full glass-morphism border-2 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-lg"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.a
                key={category.title}
                href={category.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-2xl p-8 text-center hover:scale-105 hover:shadow-2xl transition-all"
              >
                <category.icon className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold mb-2">{category.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {category.description}
                </p>
                <span className="text-sm text-blue-600 dark:text-blue-400 font-semibold">
                  {category.articles} articles
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Articles */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Popular Articles</h2>
            <div className="space-y-4">
              {popularArticles.map((article, index) => (
                <motion.button
                  key={article}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => alert(`Opening article: ${article}`)}
                  className="w-full glass-morphism rounded-xl p-4 text-left hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors flex items-center justify-between group"
                >
                  <span className="text-lg">{article}</span>
                  <span className="text-blue-600 dark:text-blue-400 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Still Need Help?</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-morphism rounded-2xl p-6 text-center"
              >
                <ChatBubbleLeftRightIcon className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold mb-2">Live Chat</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  Chat with our support team
                </p>
                <button className="btn-primary w-full">Start Chat</button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-morphism rounded-2xl p-6 text-center"
              >
                <EnvelopeIcon className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold mb-2">Email Support</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  Response within 24 hours
                </p>
                <a
                  href="mailto:support@futurecars.com"
                  className="btn-secondary w-full inline-block"
                >
                  Send Email
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass-morphism rounded-2xl p-6 text-center"
              >
                <PhoneIcon className="w-12 h-12 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold mb-2">Phone Support</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                  Mon-Fri, 9AM-6PM PST
                </p>
                <a href="tel:+15551234567" className="btn-secondary w-full inline-block">
                  Call Now
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
