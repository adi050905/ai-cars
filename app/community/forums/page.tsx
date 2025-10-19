'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ChatBubbleLeftRightIcon,
  FireIcon,
  UserGroupIcon,
  ClockIcon,
  ChatBubbleBottomCenterTextIcon,
  ArrowTrendingUpIcon,
} from '@heroicons/react/24/outline'

export default function ForumsPage() {
  const forumCategories = [
    {
      icon: ChatBubbleLeftRightIcon,
      name: 'General Discussion',
      description: 'Talk about anything car-related',
      threads: 2847,
      posts: 34562,
      color: 'from-blue-600 to-cyan-600',
    },
    {
      icon: FireIcon,
      name: 'Electric Vehicles',
      description: 'EV news, reviews, and discussions',
      threads: 1893,
      posts: 28934,
      color: 'from-green-600 to-emerald-600',
    },
    {
      icon: UserGroupIcon,
      name: 'Buying & Selling',
      description: 'Tips for buyers and sellers',
      threads: 3241,
      posts: 41023,
      color: 'from-purple-600 to-pink-600',
    },
    {
      icon: ChatBubbleBottomCenterTextIcon,
      name: 'AR/VR Experiences',
      description: 'Virtual showroom discussions',
      threads: 892,
      posts: 12456,
      color: 'from-orange-600 to-red-600',
    },
    {
      icon: ArrowTrendingUpIcon,
      name: 'Market Trends',
      description: 'Price analysis and predictions',
      threads: 1567,
      posts: 19832,
      color: 'from-indigo-600 to-blue-600',
    },
  ]

  const trendingThreads = [
    {
      title: 'Tesla Model Y vs Ford Mustang Mach-E - Real Owner Comparison',
      author: 'TechCarGuy',
      replies: 234,
      views: 12450,
      lastActivity: '5 minutes ago',
      category: 'Electric Vehicles',
      trending: true,
    },
    {
      title: 'My AR Test Drive Experience - Mind Blowing!',
      author: 'VREnthusiast',
      replies: 189,
      views: 8932,
      lastActivity: '12 minutes ago',
      category: 'AR/VR Experiences',
      trending: true,
    },
    {
      title: 'Best Time to Buy? Market Analysis October 2025',
      author: 'DataDriven',
      replies: 456,
      views: 23678,
      lastActivity: '23 minutes ago',
      category: 'Market Trends',
      trending: false,
    },
    {
      title: "Just bought my first EV! Here's what I learned",
      author: 'NewEVOwner',
      replies: 178,
      views: 9234,
      lastActivity: '1 hour ago',
      category: 'Buying & Selling',
      trending: false,
    },
    {
      title: 'Blockchain Verification - Is it really worth it?',
      author: 'BlockchainSkeptic',
      replies: 312,
      views: 15678,
      lastActivity: '2 hours ago',
      category: 'General Discussion',
      trending: false,
    },
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
            <ChatBubbleLeftRightIcon className="w-20 h-20 mx-auto mb-6 text-blue-600 dark:text-blue-400" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Community
              <span className="gradient-text"> Forums</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Connect with car enthusiasts, share experiences, and get expert advice
            </p>
            <button className="btn-primary text-lg">Start a Discussion</button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">10,440</div>
              <div className="text-gray-600 dark:text-gray-400">Total Threads</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">136,807</div>
              <div className="text-gray-600 dark:text-gray-400">Total Posts</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">32,156</div>
              <div className="text-gray-600 dark:text-gray-400">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">1,247</div>
              <div className="text-gray-600 dark:text-gray-400">Online Now</div>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Categories */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Forum Categories</h2>
          <div className="max-w-5xl mx-auto space-y-6">
            {forumCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-2xl p-6 hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="flex items-center gap-6">
                  <div
                    className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}
                  >
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{category.description}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <div className="text-2xl font-bold gradient-text">
                      {category.threads.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Threads</div>
                    <div className="text-lg font-semibold mt-1">
                      {category.posts.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">Posts</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trending Threads */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-center gap-3 mb-12">
            <FireIcon className="w-8 h-8 text-orange-500" />
            <h2 className="text-4xl font-bold text-center">Trending Discussions</h2>
          </div>
          <div className="max-w-5xl mx-auto space-y-4">
            {trendingThreads.map((thread, index) => (
              <motion.div
                key={thread.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      {thread.trending && (
                        <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <FireIcon className="w-3 h-3" />
                          TRENDING
                        </span>
                      )}
                      <span className="text-xs px-3 py-1 rounded-full glass-morphism">
                        {thread.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {thread.title}
                    </h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="flex items-center gap-1">
                        <UserGroupIcon className="w-4 h-4" />
                        {thread.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />
                        {thread.replies} replies
                      </div>
                      <div>{thread.views.toLocaleString()} views</div>
                      <div className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        {thread.lastActivity}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass-morphism rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Join the Conversation</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Share your knowledge, ask questions, and connect with thousands of car enthusiasts
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="btn-primary text-lg">Create Account</button>
              <Link href="/community" className="btn-secondary text-lg">
                Back to Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
