'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  SparklesIcon,
  RocketLaunchIcon,
  UserGroupIcon,
  TrophyIcon,
  HeartIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

export default function AboutPage() {
  const milestones = [
    {
      year: '2023',
      title: 'Company Founded',
      description: 'Started with a vision to revolutionize car shopping',
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Launched our advanced AI recommendation engine',
    },
    {
      year: '2024',
      title: 'AR/VR Launch',
      description: 'Introduced immersive virtual showroom experiences',
    },
    {
      year: '2025',
      title: 'Blockchain Verified',
      description: 'Implemented blockchain vehicle verification system',
    },
  ]

  const values = [
    {
      icon: SparklesIcon,
      title: 'Innovation First',
      description:
        'We push boundaries with cutting-edge AI, AR/VR, and blockchain technology to create the best automotive platform.',
    },
    {
      icon: HeartIcon,
      title: 'Customer Obsessed',
      description:
        'Every decision we make is centered around making your car buying journey easier, faster, and more enjoyable.',
    },
    {
      icon: UserGroupIcon,
      title: 'Community Driven',
      description:
        'Our community of 50,000+ members drives innovation and helps others make informed decisions.',
    },
    {
      icon: GlobeAltIcon,
      title: 'Sustainable Future',
      description:
        'We champion electric vehicles and sustainable transportation solutions for a better tomorrow.',
    },
  ]

  const team = [
    {
      name: 'Sarah Chen',
      role: 'CEO & Founder',
      bio: 'Former Tesla AI Engineer with 10+ years in automotive tech',
      image: 'https://ui-avatars.com/api/?name=Sarah+Chen&background=3b82f6&color=fff&size=200',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'CTO',
      bio: 'Ex-Google AI researcher specializing in computer vision',
      image:
        'https://ui-avatars.com/api/?name=Marcus+Rodriguez&background=8b5cf6&color=fff&size=200',
    },
    {
      name: 'Aisha Patel',
      role: 'Head of Design',
      bio: 'Award-winning UX designer from Apple',
      image: 'https://ui-avatars.com/api/?name=Aisha+Patel&background=10b981&color=fff&size=200',
    },
    {
      name: 'James Kim',
      role: 'Head of Blockchain',
      bio: 'Blockchain architect with expertise in Web3',
      image: 'https://ui-avatars.com/api/?name=James+Kim&background=f59e0b&color=fff&size=200',
    },
  ]

  const stats = [
    { value: '50K+', label: 'Active Users' },
    { value: '15K+', label: 'Cars Listed' },
    { value: '98%', label: 'Satisfaction Rate' },
    { value: '$2.5B+', label: 'Cars Sold' },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10" />
        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Revolutionizing the
              <span className="gradient-text"> Future of Automotive</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We're building the world's most advanced AI-powered car platform, combining
              cutting-edge technology with exceptional user experience to transform how people buy,
              sell, and experience vehicles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="glass-morphism rounded-3xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
                  To democratize access to the perfect vehicle by leveraging artificial
                  intelligence, virtual reality, and blockchain technology - making car shopping
                  transparent, efficient, and enjoyable for everyone.
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  We believe that finding and buying a car should be as exciting as driving it.
                  That's why we've built a platform that combines personalization, trust, and
                  innovation to deliver an unmatched automotive experience.
                </p>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1485463611174-f302f6a5c1c9?w=800"
                  alt="Our Mission"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-2xl p-8 text-center hover:scale-105 transition-transform"
              >
                <value.icon className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Key milestones in our story</p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex gap-6 mb-12 relative"
              >
                <div className="flex-shrink-0 w-24 text-right">
                  <div className="text-3xl font-bold gradient-text">{milestone.year}</div>
                </div>
                <div className="relative flex-shrink-0 pt-2">
                  <div className="w-4 h-4 rounded-full bg-blue-600" />
                  {index < milestones.length - 1 && (
                    <div className="absolute top-6 left-1.5 w-0.5 h-20 bg-blue-600/30" />
                  )}
                </div>
                <div className="glass-morphism rounded-xl p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Experts from Tesla, Google, Apple, and leading tech companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <img src={member.image} alt={member.name} className="w-full h-64 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{member.bio}</p>
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
            className="glass-morphism rounded-3xl p-12 text-center"
          >
            <RocketLaunchIcon className="w-20 h-20 mx-auto mb-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl font-bold mb-4">Join Us on This Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals who share our passion for innovation
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/careers" className="btn-primary">
                View Open Positions
              </Link>
              <Link href="/community" className="btn-secondary">
                Join Our Community
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
