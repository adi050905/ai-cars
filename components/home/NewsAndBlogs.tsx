'use client'

import { motion } from 'framer-motion'
import {
  NewspaperIcon,
  SparklesIcon,
  ArrowTrendingUpIcon,
  LightBulbIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'

interface NewsArticle {
  id: string
  category: string
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  image: string
  trending?: boolean
}

export default function NewsAndBlogs() {
  const articles: NewsArticle[] = [
    {
      id: '1',
      category: 'AI Technology',
      title: 'How AI is Revolutionizing Electric Vehicle Battery Management',
      excerpt:
        'Machine learning algorithms are now predicting battery health with 95% accuracy, extending EV lifespan by up to 30%...',
      author: 'Dr. Sarah Chen',
      date: 'Oct 15, 2025',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800',
      trending: true,
    },
    {
      id: '2',
      category: 'Market Insights',
      title: 'EV Sales Surge 45% in Q3 2025: What This Means for Traditional Automakers',
      excerpt:
        'The latest market data shows unprecedented growth in electric vehicle adoption, with analysts predicting full market dominance by 2030...',
      author: 'Michael Rodriguez',
      date: 'Oct 14, 2025',
      readTime: '8 min',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800',
      trending: true,
    },
    {
      id: '3',
      category: 'Innovation',
      title: 'Solid-State Batteries: The Game Changer Coming in 2026',
      excerpt:
        'Major breakthroughs in solid-state battery technology promise 1000+ mile ranges and 10-minute charging times...',
      author: 'Prof. James Wilson',
      date: 'Oct 13, 2025',
      readTime: '6 min',
      image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800',
    },
    {
      id: '4',
      category: 'Sustainability',
      title: 'Carbon Neutral Manufacturing: Tesla and Rivian Lead the Charge',
      excerpt:
        'How leading EV manufacturers are achieving net-zero emissions in their production facilities through renewable energy...',
      author: 'Emma Green',
      date: 'Oct 12, 2025',
      readTime: '7 min',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800',
    },
    {
      id: '5',
      category: 'Autonomous Driving',
      title: 'Level 4 Autonomy Approved for Public Roads in 5 More States',
      excerpt:
        'Regulatory approvals expand as self-driving technology proves safer than human drivers in extensive testing...',
      author: 'Alex Turner',
      date: 'Oct 11, 2025',
      readTime: '4 min',
      image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800',
      trending: true,
    },
    {
      id: '6',
      category: 'Industry News',
      title: 'Volkswagen Announces $50 Billion Investment in EV Infrastructure',
      excerpt:
        'The German automaker commits to building 100,000 new charging stations across Europe and North America by 2027...',
      author: 'Lisa Schmidt',
      date: 'Oct 10, 2025',
      readTime: '5 min',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    },
  ]

  const aiInsights = [
    {
      icon: ArrowTrendingUpIcon,
      title: 'Market Prediction',
      insight: 'AI forecasts 60% EV market share by 2028',
    },
    {
      icon: LightBulbIcon,
      title: 'Energy Optimization',
      insight: 'Smart charging reduces costs by 40% on average',
    },
    {
      icon: SparklesIcon,
      title: 'Tech Breakthrough',
      insight: 'New graphene batteries achieve 2000+ cycles',
    },
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
          Latest News & <span className="gradient-text">AI Insights</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
          Stay updated with the latest trends, innovations, and AI-powered analysis in the EV
          industry
        </p>
      </motion.div>

      {/* AI Insights Bar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
        {aiInsights.map((insight, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-4 text-white flex items-center gap-4"
          >
            <insight.icon className="w-10 h-10 flex-shrink-0" />
            <div>
              <h4 className="font-bold text-sm mb-1">{insight.title}</h4>
              <p className="text-sm text-white/90">{insight.insight}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Featured Article */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="relative rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px]">
          <img
            src={articles[0].image}
            alt={articles[0].title}
            className="w-full h-full object-cover"
            loading="eager"
            referrerPolicy="no-referrer"
            onError={e => {
              const target = e.target as HTMLImageElement
              target.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1200'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end">
            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  TRENDING
                </span>
                <span className="text-white/80 text-sm">{articles[0].category}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                {articles[0].title}
              </h3>
              <p className="text-white/90 text-lg mb-6 max-w-3xl">{articles[0].excerpt}</p>
              <div className="flex items-center gap-6 text-white/80 text-sm mb-6">
                <span>{articles[0].author}</span>
                <span>•</span>
                <span>{articles[0].date}</span>
                <span>•</span>
                <span>{articles[0].readTime} read</span>
              </div>
              <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Read Full Article
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Article Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {articles.slice(1).map((article, index) => (
          <motion.article
            key={article.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={e => {
                  const target = e.target as HTMLImageElement
                  target.src = 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800'
                }}
              />
              {article.trending && (
                <div className="absolute top-3 right-3 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  <ArrowTrendingUpIcon className="w-3 h-3" />
                  Trending
                </div>
              )}
              <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold">
                {article.category}
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  <p className="font-semibold text-gray-700 dark:text-gray-300">{article.author}</p>
                  <p>
                    {article.date} • {article.readTime}
                  </p>
                </div>
                <button className="text-blue-600 dark:text-blue-400 font-semibold text-sm hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Newsletter CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center text-white"
      >
        <NewspaperIcon className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h3>
        <p className="text-lg text-white/90 mb-6 max-w-2xl mx-auto">
          Get AI-curated news, exclusive insights, and market analysis delivered to your inbox every
          week
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-6 py-4 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            onClick={() => alert('Newsletter signup feature coming soon!')}
            className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            Subscribe Now
          </button>
        </div>
      </motion.div>
    </div>
  )
}
