'use client'

import { motion } from 'framer-motion'
import {
  NewspaperIcon,
  DocumentTextIcon,
  PhotoIcon,
  TrophyIcon,
  MegaphoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'

export default function PressPage() {
  const pressReleases = [
    {
      date: 'October 15, 2025',
      title: 'FutureCars Surpasses 50,000 Active Users Milestone',
      excerpt:
        'Platform experiences 300% growth in Q3 2025, solidifying position as leading AI-powered automotive marketplace.',
      category: 'Company News',
      link: '#release-1',
    },
    {
      date: 'September 28, 2025',
      title: 'FutureCars Launches Revolutionary Blockchain Vehicle Verification',
      excerpt:
        'New blockchain technology provides tamper-proof vehicle history, setting new industry standard for transparency.',
      category: 'Product Launch',
      link: '#release-2',
    },
    {
      date: 'August 10, 2025',
      title: 'FutureCars Raises $50M Series B Funding Round',
      excerpt:
        'Led by Sequoia Capital and Andreessen Horowitz to accelerate AI development and expand to 50 new cities.',
      category: 'Funding',
      link: '#release-3',
    },
    {
      date: 'July 5, 2025',
      title: 'FutureCars AR/VR Showroom Reaches 1 Million Virtual Test Drives',
      excerpt:
        'Immersive virtual reality experiences transform how consumers shop for cars, reducing showroom visits by 60%.',
      category: 'Milestone',
      link: '#release-4',
    },
    {
      date: 'May 20, 2025',
      title: 'FutureCars Partners with Tesla, Ford, and GM for Direct EV Sales',
      excerpt:
        'Strategic partnerships enable direct-to-consumer EV sales through AI-powered platform.',
      category: 'Partnership',
      link: '#release-5',
    },
    {
      date: 'April 3, 2025',
      title: 'FutureCars Named "Best Automotive Startup" by TechCrunch',
      excerpt:
        'Award recognizes innovation in AI, AR/VR, and blockchain technology for automotive industry.',
      category: 'Award',
      link: '#release-6',
    },
  ]

  const mediaKitItems = [
    {
      icon: PhotoIcon,
      title: 'Brand Assets',
      description: 'Logos, colors, typography guidelines',
      action: 'Download ZIP',
      size: '12 MB',
    },
    {
      icon: DocumentTextIcon,
      title: 'Company Fact Sheet',
      description: 'Key statistics, timeline, leadership',
      action: 'Download PDF',
      size: '2 MB',
    },
    {
      icon: PhotoIcon,
      title: 'Product Screenshots',
      description: 'High-resolution platform images',
      action: 'Download ZIP',
      size: '45 MB',
    },
    {
      icon: NewspaperIcon,
      title: 'Press Releases',
      description: 'All announcements and news',
      action: 'View Archive',
      size: '',
    },
  ]

  const coverage = [
    {
      outlet: 'TechCrunch',
      headline: '"FutureCars is revolutionizing car shopping with AI"',
      date: 'Oct 12, 2025',
      logo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=300&h=100&fit=crop',
    },
    {
      outlet: 'The Verge',
      headline: '"The future of automotive retail is here"',
      date: 'Sept 25, 2025',
      logo: 'https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=300&h=100&fit=crop',
    },
    {
      outlet: 'Forbes',
      headline: '"How FutureCars is disrupting the $1T auto industry"',
      date: 'Aug 18, 2025',
      logo: 'https://images.unsplash.com/photo-1586339949216-35c2747e1994?w=300&h=100&fit=crop',
    },
    {
      outlet: 'Wired',
      headline: '"Blockchain meets automotive in FutureCars platform"',
      date: 'July 30, 2025',
      logo: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=100&fit=crop',
    },
  ]

  const awards = [
    { name: 'Best Automotive Startup 2025', organization: 'TechCrunch Disrupt' },
    { name: 'Innovation in AI Award', organization: 'AI Summit' },
    { name: 'Top 50 Startups to Watch', organization: 'Forbes' },
    { name: 'Best UX Design', organization: 'Webby Awards' },
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
            <MegaphoneIcon className="w-20 h-20 mx-auto mb-6 text-blue-600 dark:text-blue-400" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Press &<span className="gradient-text"> Media</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Latest news, announcements, and media resources from FutureCars
            </p>
          </motion.div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto glass-morphism rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Media Inquiries</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  For press inquiries, interviews, or media kits, contact our press team
                </p>
              </div>
              <a
                href="mailto:press@futurecars.com"
                className="btn-primary inline-flex items-center gap-2"
              >
                <EnvelopeIcon className="w-5 h-5" />
                press@futurecars.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Latest Press Releases</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Recent announcements and company news
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={release.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-2xl p-6 hover:shadow-2xl transition-all cursor-pointer"
                onClick={() => alert(`Opening press release: ${release.title}`)}
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {release.date}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                        {release.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                      {release.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">{release.excerpt}</p>
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 font-semibold whitespace-nowrap hover:underline">
                    Read More →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Coverage */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">In The News</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              What leading publications are saying about us
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {coverage.map((item, index) => (
              <motion.div
                key={item.outlet}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-xl p-6"
              >
                <img src={item.logo} alt={item.outlet} className="h-8 mb-4" />
                <p className="text-lg font-semibold mb-2">{item.headline}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{item.date}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <TrophyIcon className="w-16 h-16 mx-auto mb-6 text-yellow-500" />
            <h2 className="text-4xl font-bold mb-12">Awards & Recognition</h2>

            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <motion.div
                  key={award.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-morphism rounded-xl p-6"
                >
                  <div className="text-4xl mb-3">🏆</div>
                  <h3 className="text-xl font-bold mb-2">{award.name}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{award.organization}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Media Kit</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Download our brand assets and company materials
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {mediaKitItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-xl p-6 hover:scale-105 transition-transform cursor-pointer"
                onClick={() => alert(`Downloading ${item.title}...`)}
              >
                <item.icon className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                <div className="flex items-center justify-between">
                  <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                    {item.action}
                  </button>
                  {item.size && <span className="text-sm text-gray-500">{item.size}</span>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
