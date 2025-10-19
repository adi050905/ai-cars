'use client'

import { motion } from 'framer-motion'
import {
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  TrophyIcon,
  FireIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

interface CommunityPost {
  id: string
  author: string
  avatar: string
  title: string
  content: string
  likes: number
  comments: number
  badge?: string
}

export default function CommunityHighlights() {
  const topPosts: CommunityPost[] = [
    {
      id: '1',
      author: 'ElectricDreamer',
      avatar: 'https://ui-avatars.com/api/?name=ED&background=3b82f6&color=fff',
      title: 'My Tesla Model S Plaid Review After 10,000 Miles',
      content:
        'Just hit 10k miles on my Plaid. The acceleration still feels unreal! Here are my honest thoughts on ownership, charging, and daily driving...',
      likes: 234,
      comments: 87,
      badge: 'Top Contributor',
    },
    {
      id: '2',
      author: 'EVEnthusiast',
      avatar: 'https://ui-avatars.com/api/?name=EV&background=8b5cf6&color=fff',
      title: 'Best Charging Stations on the West Coast',
      content:
        "After 3 road trips, I've compiled a comprehensive guide to the fastest and most reliable charging stations from Seattle to San Diego...",
      likes: 189,
      comments: 56,
      badge: 'Expert',
    },
    {
      id: '3',
      author: 'GreenDrive',
      avatar: 'https://ui-avatars.com/api/?name=GD&background=10b981&color=fff',
      title: 'Carbon Impact: 2 Years of EV Ownership',
      content:
        "I tracked my environmental impact for 24 months. The results are mind-blowing! Here's how much CO₂ I've saved compared to my old gas car...",
      likes: 312,
      comments: 94,
      badge: 'Verified',
    },
    {
      id: '4',
      author: 'TechCarGuru',
      avatar: 'https://ui-avatars.com/api/?name=TC&background=f59e0b&color=fff',
      title: 'Future of Autonomous Driving: What to Expect in 2026',
      content:
        'Based on current trends and my experience beta testing FSD, here are my predictions for autonomous tech next year...',
      likes: 267,
      comments: 118,
      badge: 'Beta Tester',
    },
  ]

  const communityStats = [
    { icon: UserGroupIcon, value: '50,000+', label: 'Active Members' },
    { icon: ChatBubbleLeftRightIcon, value: '1,200+', label: 'Daily Posts' },
    { icon: TrophyIcon, value: '500+', label: 'Top Contributors' },
    { icon: FireIcon, value: '98%', label: 'Satisfaction Rate' },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold font-orbitron mb-4">
          Community <span className="gradient-text">Highlights</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Join thousands of EV enthusiasts sharing experiences, tips, and insights
        </p>
      </motion.div>

      {/* Community Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {communityStats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg text-center hover:scale-105 transition-transform"
          >
            <stat.icon className="w-12 h-12 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
            <h3 className="text-3xl font-bold gradient-text mb-1">{stat.value}</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Top Posts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {topPosts.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
          >
            <div className="flex items-start gap-4 mb-4">
              <img
                src={post.avatar}
                alt={post.author}
                className="w-12 h-12 rounded-full"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-gray-900 dark:text-white">{post.author}</h4>
                  {post.badge && (
                    <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-2 py-1 rounded-full">
                      {post.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                  {post.content}
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                <span className="flex items-center gap-1">
                  <span>❤️</span> {post.likes}
                </span>
                <span className="flex items-center gap-1">
                  <span>💬</span> {post.comments}
                </span>
              </div>
              <button className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline">
                Read More
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <Link
          href="/community"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform shadow-lg"
        >
          <UserGroupIcon className="w-6 h-6" />
          Join Our Community
        </Link>
      </motion.div>
    </div>
  )
}
