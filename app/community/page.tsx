'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import {
  NewspaperIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  MagnifyingGlassIcon,
  FireIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
  EyeIcon,
  ArrowTrendingUpIcon,
  SparklesIcon,
  BoltIcon,
  CheckBadgeIcon,
  BookmarkIcon,
} from '@heroicons/react/24/outline'
import {
  HeartIcon as HeartIconSolid,
  BookmarkIcon as BookmarkIconSolid,
} from '@heroicons/react/24/solid'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  author: {
    name: string
    avatar: string
    verified?: boolean
  }
  date: string
  readTime: string
  category: string
  image: string
  trending: boolean
  featured?: boolean
  tags: string[]
  views: number
  likes: number
  comments: number
}

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All Posts')
  const [searchQuery, setSearchQuery] = useState('')
  const [likedPosts, setLikedPosts] = useState<number[]>([])
  const [bookmarkedPosts, setBookmarkedPosts] = useState<number[]>([])

  const featuredPost: BlogPost = {
    id: 0,
    title: 'The Future of Electric Vehicles: AI-Powered Personalization',
    excerpt:
      'Discover how artificial intelligence is transforming the EV buying experience, from personalized recommendations to predictive maintenance. We explore cutting-edge AI features in modern EVs and what they mean for drivers.',
    author: { name: 'Sarah Chen', avatar: 'https://i.pravatar.cc/150?img=1', verified: true },
    date: 'October 15, 2025',
    readTime: '8 min read',
    category: 'Technology',
    image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1200&h=600&fit=crop',
    tags: ['AI', 'Electric Vehicles', 'Innovation', 'Future Tech'],
    trending: true,
    featured: true,
    views: 12453,
    likes: 892,
    comments: 127,
  }

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '10 Things to Know Before Buying Your First Electric Vehicle',
      excerpt:
        'A comprehensive guide covering range anxiety, charging infrastructure, tax incentives, and more for first-time EV buyers. Learn from experts who have helped thousands transition to electric.',
      author: {
        name: 'Michael Rodriguez',
        avatar: 'https://i.pravatar.cc/150?img=2',
        verified: true,
      },
      date: 'October 12, 2025',
      readTime: '6 min read',
      category: 'Buying Guide',
      image: 'https://images.unsplash.com/photo-1593941707874-ef25b8b4a92b?w=800&h=500&fit=crop',
      trending: true,
      tags: ['Buying Guide', 'First Time Buyer', 'Tips'],
      views: 8932,
      likes: 634,
      comments: 89,
    },
    {
      id: 2,
      title: 'Tesla Model Y vs Rivian R1S: The Ultimate Family SUV Showdown',
      excerpt:
        'We spent 3 months with both vehicles to determine which electric SUV offers the best value for families. Real-world range tests, cargo space comparisons, and safety ratings analyzed.',
      author: { name: 'James Wilson', avatar: 'https://i.pravatar.cc/150?img=3', verified: true },
      date: 'October 10, 2025',
      readTime: '12 min read',
      category: 'Reviews',
      image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=500&fit=crop',
      trending: true,
      tags: ['Tesla', 'Rivian', 'SUV', 'Comparison'],
      views: 15621,
      likes: 1203,
      comments: 245,
    },
    {
      id: 3,
      title: 'How to Install a Home EV Charger: Complete DIY Guide',
      excerpt:
        'Step-by-step instructions with photos for installing a Level 2 home charger. Includes electrical requirements, permit process, and cost breakdown. Save thousands by doing it yourself.',
      author: { name: 'Tom Anderson', avatar: 'https://i.pravatar.cc/150?img=4' },
      date: 'October 8, 2025',
      readTime: '15 min read',
      category: 'DIY',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&h=500&fit=crop',
      trending: true,
      tags: ['DIY', 'Charging', 'Home Installation'],
      views: 11234,
      likes: 789,
      comments: 156,
    },
    {
      id: 4,
      title: 'Winter EV Range: What Really Happens in Cold Weather',
      excerpt:
        'We tested 10 popular EVs in -20°F conditions to measure actual range loss. Discover which models perform best in winter and proven strategies to maximize range when temperatures drop.',
      author: { name: 'Mike Chen', avatar: 'https://i.pravatar.cc/150?img=5', verified: true },
      date: 'October 5, 2025',
      readTime: '10 min read',
      category: 'Electric Vehicles',
      image: 'https://images.unsplash.com/photo-1483877241879-f0ca2e57c071?w=800&h=500&fit=crop',
      trending: true,
      tags: ['Winter', 'Range', 'Testing', 'Cold Weather'],
      views: 9876,
      likes: 723,
      comments: 134,
    },
    {
      id: 5,
      title: 'The Hidden Costs of EV Ownership Nobody Talks About',
      excerpt:
        'Beyond the sticker price: insurance premiums, tire replacement costs, home charging installation, and potential battery replacement. An honest look at the total cost of EV ownership.',
      author: { name: 'Emily Zhang', avatar: 'https://i.pravatar.cc/150?img=6', verified: true },
      date: 'October 3, 2025',
      readTime: '9 min read',
      category: 'Buying Guide',
      image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=500&fit=crop',
      trending: false,
      tags: ['Costs', 'Ownership', 'Finance'],
      views: 7654,
      likes: 512,
      comments: 98,
    },
    {
      id: 6,
      title: 'Road Trip Reality Check: 2,000 Miles in a Hyundai IONIQ 5',
      excerpt:
        "Our cross-country journey in Hyundai's hottest EV. Charging network experiences, actual vs rated range, comfort on long drives, and whether an EV is ready for road trips.",
      author: { name: 'Chris Taylor', avatar: 'https://i.pravatar.cc/150?img=7' },
      date: 'October 1, 2025',
      readTime: '11 min read',
      category: 'Reviews',
      image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&h=500&fit=crop',
      trending: false,
      tags: ['Road Trip', 'IONIQ 5', 'Charging'],
      views: 6543,
      likes: 445,
      comments: 76,
    },
    {
      id: 7,
      title: 'Breaking: New Federal EV Tax Credits Announced for 2026',
      excerpt:
        'Major changes to federal incentives could save buyers up to $12,500. We break down eligibility requirements, income limits, and which vehicles qualify under the new rules.',
      author: { name: 'David Park', avatar: 'https://i.pravatar.cc/150?img=8', verified: true },
      date: 'September 28, 2025',
      readTime: '7 min read',
      category: 'News',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=500&fit=crop',
      trending: true,
      tags: ['Tax Credits', 'News', 'Government'],
      views: 18923,
      likes: 1456,
      comments: 312,
    },
    {
      id: 8,
      title: 'Best Used EVs Under $30,000 in 2025',
      excerpt:
        'The used EV market is heating up. Our picks for the best value electric vehicles you can buy today, including reliability ratings, warranty coverage, and what to look for when buying used.',
      author: { name: 'Rachel Kim', avatar: 'https://i.pravatar.cc/150?img=9' },
      date: 'September 25, 2025',
      readTime: '8 min read',
      category: 'Buying Guide',
      image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=500&fit=crop',
      trending: false,
      tags: ['Used Cars', 'Budget', 'Value'],
      views: 10234,
      likes: 678,
      comments: 145,
    },
    {
      id: 9,
      title: 'Autopilot vs Super Cruise vs BlueCruise: Self-Driving Tech Compared',
      excerpt:
        'We tested all three major autonomous driving systems on the same 500-mile route. Discover which one handles highway driving best, their limitations, and safety considerations.',
      author: { name: 'Lisa Martinez', avatar: 'https://i.pravatar.cc/150?img=10', verified: true },
      date: 'September 22, 2025',
      readTime: '13 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=500&fit=crop',
      trending: true,
      tags: ['Autopilot', 'Self-Driving', 'Safety', 'Technology'],
      views: 14567,
      likes: 1089,
      comments: 234,
    },
    {
      id: 10,
      title: 'The Best EV Apps Every Owner Should Have',
      excerpt:
        'From route planning to charging network finders, these apps will transform your EV experience. Our top 15 picks include both free and premium options with honest reviews.',
      author: { name: 'Alex Brown', avatar: 'https://i.pravatar.cc/150?img=11' },
      date: 'September 20, 2025',
      readTime: '6 min read',
      category: 'Technology',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
      trending: false,
      tags: ['Apps', 'Tools', 'Software'],
      views: 5432,
      likes: 389,
      comments: 67,
    },
    {
      id: 11,
      title: 'Charging Network Showdown: Tesla vs Electrify America vs ChargePoint',
      excerpt:
        'After using all three networks for 6 months, we compare reliability, charging speeds, costs, and coverage. Which network offers the best experience for non-Tesla owners?',
      author: { name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=12', verified: true },
      date: 'September 18, 2025',
      readTime: '10 min read',
      category: 'Electric Vehicles',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&h=500&fit=crop',
      trending: false,
      tags: ['Charging', 'Networks', 'Infrastructure'],
      views: 8765,
      likes: 623,
      comments: 112,
    },
    {
      id: 12,
      title: 'Electric Trucks Are Here: F-150 Lightning vs Rivian R1T vs Cybertruck',
      excerpt:
        'The electric truck revolution is in full swing. We compare the three most popular electric pickups on towing capacity, range, features, and value. Which one should you buy?',
      author: { name: 'Kevin Murphy', avatar: 'https://i.pravatar.cc/150?img=13', verified: true },
      date: 'September 15, 2025',
      readTime: '14 min read',
      category: 'Reviews',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800&h=500&fit=crop',
      trending: true,
      tags: ['Trucks', 'F-150', 'Rivian', 'Cybertruck'],
      views: 21345,
      likes: 1678,
      comments: 389,
    },
  ]

  const categories = [
    { name: 'All Posts', count: 156, icon: '📚' },
    { name: 'Technology', count: 42, icon: '💻' },
    { name: 'Buying Guide', count: 38, icon: '🛒' },
    { name: 'Reviews', count: 52, icon: '⭐' },
    { name: 'Electric Vehicles', count: 45, icon: '⚡' },
    { name: 'DIY', count: 18, icon: '🔧' },
    { name: 'News', count: 24, icon: '📰' },
  ]

  const popularTags = [
    'Tesla',
    'Charging',
    'Range',
    'Tax Credits',
    'Road Trip',
    'Winter',
    'Autopilot',
    'DIY',
    'Comparison',
    'Budget',
  ]

  const topAuthors = [
    { name: 'Mike Chen', posts: 34, avatar: 'https://i.pravatar.cc/150?img=5', verified: true },
    { name: 'Sarah Chen', posts: 28, avatar: 'https://i.pravatar.cc/150?img=1', verified: true },
    { name: 'James Wilson', posts: 24, avatar: 'https://i.pravatar.cc/150?img=3', verified: true },
  ]

  // Filter posts based on selected category and search
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All Posts' || post.category === selectedCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  const toggleLike = (postId: number) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId))
    } else {
      setLikedPosts([...likedPosts, postId])
    }
  }

  const toggleBookmark = (postId: number) => {
    if (bookmarkedPosts.includes(postId)) {
      setBookmarkedPosts(bookmarkedPosts.filter(id => id !== postId))
    } else {
      setBookmarkedPosts([...bookmarkedPosts, postId])
    }
  }

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
            <NewspaperIcon className="w-20 h-20 mx-auto mb-6 text-blue-600 dark:text-blue-400" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              FutureCars
              <span className="gradient-text"> Blog</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Insights, guides, and stories from the future of automotive technology
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles, tags, or topics..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-4 py-4 rounded-full glass-morphism border-2 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none text-lg"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  ✕
                </button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white/80 dark:bg-gray-800/80 backdrop-blur-md sticky top-0 z-10 shadow-lg border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setSelectedCategory(category.name)}
                className={`px-6 py-2 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  selectedCategory === category.name
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                    : 'glass-morphism hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-105'
                }`}
              >
                <span>{category.icon}</span>
                {category.name} <span className="text-sm opacity-75">({category.count})</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl h-[600px] cursor-pointer hover:scale-[1.02] transition-transform"
              onClick={() => alert('Opening article...')}
            >
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                width={1200}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
                <div className="p-8 md:p-12 w-full">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="bg-red-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      FEATURED
                    </span>
                    <span className="bg-white/20 backdrop-blur-sm text-white px-4 py-1 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-white/90 text-lg mb-6 max-w-3xl">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-6 text-white/80 text-sm">
                    <div className="flex items-center gap-2">
                      <UserIcon className="w-5 h-5" />
                      {featuredPost.author.name}
                    </div>
                    <div className="flex items-center gap-2">
                      <ClockIcon className="w-5 h-5" />
                      {featuredPost.readTime}
                    </div>
                    <div className="flex items-center gap-2">
                      <NewspaperIcon className="w-5 h-5" />
                      {featuredPost.date}
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {featuredPost.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sidebar + Blog Posts */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <motion.aside
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-1"
            >
              <div className="sticky top-28 space-y-6">
                {/* Popular Tags */}
                <div className="glass-morphism rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <TagIcon className="w-5 h-5 text-blue-600" />
                    Popular Tags
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {popularTags.map(tag => (
                      <button
                        key={tag}
                        onClick={() => setSearchQuery(tag)}
                        className="px-3 py-1 text-sm rounded-full glass-morphism hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Top Authors */}
                <div className="glass-morphism rounded-2xl p-6">
                  <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                    <UserIcon className="w-5 h-5 text-purple-600" />
                    Top Authors
                  </h3>
                  <div className="space-y-3">
                    {topAuthors.map(author => (
                      <div
                        key={author.name}
                        className="flex items-center gap-3 hover:bg-blue-50 dark:hover:bg-blue-900/20 p-2 rounded-lg transition-all cursor-pointer"
                      >
                        <Image
                          src={author.avatar}
                          alt={author.name}
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="flex-1">
                          <div className="flex items-center gap-1">
                            <p className="font-semibold text-sm">{author.name}</p>
                            {author.verified && (
                              <CheckBadgeIcon className="w-4 h-4 text-blue-600" />
                            )}
                          </div>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {author.posts} articles
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="glass-morphism rounded-2xl p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20">
                  <SparklesIcon className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                    Get weekly EV insights
                  </p>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="w-full px-4 py-2 rounded-lg mb-2 text-sm border-2 border-blue-200 dark:border-blue-800 focus:border-blue-500 outline-none"
                  />
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:shadow-lg transition-all">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.aside>

            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">
                  {searchQuery
                    ? `Results for "${searchQuery}"`
                    : selectedCategory === 'All Posts'
                    ? 'Latest Articles'
                    : selectedCategory}
                  <span className="text-xl text-gray-500 ml-3">({filteredPosts.length})</span>
                </h2>
              </div>

              {filteredPosts.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                  {filteredPosts.map((post, index) => (
                    <motion.article
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="glass-morphism rounded-2xl overflow-hidden hover:shadow-2xl transition-all group"
                    >
                      <div className="relative h-56 overflow-hidden cursor-pointer">
                        <Image
                          src={post.image}
                          alt={post.title}
                          width={800}
                          height={500}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        {post.trending && (
                          <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1 shadow-lg">
                            <FireIcon className="w-3 h-3" />
                            TRENDING
                          </div>
                        )}
                        <div className="absolute top-4 left-4 flex gap-2">
                          <button
                            onClick={e => {
                              e.stopPropagation()
                              toggleLike(post.id)
                            }}
                            className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all"
                          >
                            {likedPosts.includes(post.id) ? (
                              <HeartIconSolid className="w-5 h-5 text-red-500" />
                            ) : (
                              <HeartIcon className="w-5 h-5 text-gray-700" />
                            )}
                          </button>
                          <button
                            onClick={e => {
                              e.stopPropagation()
                              toggleBookmark(post.id)
                            }}
                            className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all"
                          >
                            {bookmarkedPosts.includes(post.id) ? (
                              <BookmarkIconSolid className="w-5 h-5 text-blue-600" />
                            ) : (
                              <BookmarkIcon className="w-5 h-5 text-gray-700" />
                            )}
                          </button>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-xs px-3 py-1 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 font-semibold">
                            {post.category}
                          </span>
                          <div className="flex items-center gap-3 text-xs text-gray-500">
                            <span className="flex items-center gap-1">
                              <EyeIcon className="w-4 h-4" />
                              {post.views.toLocaleString()}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                          {post.excerpt}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map(tag => (
                            <span
                              key={tag}
                              className="text-xs px-2 py-1 rounded-full glass-morphism cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-900/30"
                              onClick={() => setSearchQuery(tag)}
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                          <div className="flex items-center gap-2">
                            <Image
                              src={post.author.avatar}
                              alt={post.author.name}
                              width={32}
                              height={32}
                              className="rounded-full"
                            />
                            <div>
                              <div className="flex items-center gap-1">
                                <span className="text-sm font-semibold">{post.author.name}</span>
                                {post.author.verified && (
                                  <CheckBadgeIcon className="w-4 h-4 text-blue-600" />
                                )}
                              </div>
                              <div className="flex items-center gap-2 text-xs text-gray-500">
                                <span>{post.date}</span>
                                <span>•</span>
                                <span>{post.readTime}</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-4 text-sm text-gray-500">
                            <span className="flex items-center gap-1">
                              <HeartIcon className="w-4 h-4" />
                              {post.likes + (likedPosts.includes(post.id) ? 1 : 0)}
                            </span>
                            <span className="flex items-center gap-1">
                              <ChatBubbleBottomCenterTextIcon className="w-4 h-4" />
                              {post.comments}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-xl text-gray-600 dark:text-gray-400">
                    No articles found matching your search.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto glass-morphism rounded-3xl p-12 text-center"
          >
            <NewspaperIcon className="w-16 h-16 mx-auto mb-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl font-bold mb-4">Never Miss an Update</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Get the latest automotive insights, guides, and news delivered to your inbox
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-full glass-morphism border-2 border-blue-200 dark:border-blue-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none"
              />
              <button className="btn-primary">Subscribe</button>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              Join 50,000+ subscribers. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
