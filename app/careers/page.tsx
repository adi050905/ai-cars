'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  RocketLaunchIcon,
  HeartIcon,
  StarIcon,
  BriefcaseIcon,
  UserGroupIcon,
  LightBulbIcon,
  AcademicCapIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline'

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior AI/ML Engineer',
      department: 'Engineering',
      location: 'Remote / Silicon Valley',
      type: 'Full-time',
      description:
        'Build next-gen recommendation engines and computer vision systems for automotive AI.',
      requirements: [
        '5+ years Python/TensorFlow',
        'Experience with LLMs',
        'Automotive domain knowledge',
      ],
    },
    {
      title: 'Blockchain Developer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      description: 'Develop smart contracts and Web3 infrastructure for vehicle verification.',
      requirements: [
        'Solidity/Ethereum expertise',
        '3+ years blockchain',
        'Security best practices',
      ],
    },
    {
      title: 'Senior Product Designer',
      department: 'Design',
      location: 'Remote / Los Angeles',
      type: 'Full-time',
      description: 'Create delightful user experiences for our AR/VR showroom and mobile apps.',
      requirements: ['5+ years UX/UI design', 'Figma expertise', 'AR/VR design experience'],
    },
    {
      title: 'Full Stack Engineer',
      department: 'Engineering',
      location: 'Remote / Austin',
      type: 'Full-time',
      description:
        'Build scalable web applications using Next.js, React, and modern backend technologies.',
      requirements: ['React/Next.js mastery', 'Node.js/Python', 'AWS/Cloud experience'],
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote / Boston',
      type: 'Full-time',
      description: 'Analyze user behavior and build predictive models for market trends.',
      requirements: ['PhD or 5+ years experience', 'Python/R/SQL', 'ML pipeline development'],
    },
    {
      title: 'AR/VR Developer',
      department: 'Engineering',
      location: 'Remote / Seattle',
      type: 'Full-time',
      description: 'Create immersive 3D vehicle experiences using Unity, Unreal Engine, and WebXR.',
      requirements: ['Unity/Unreal Engine', '3D modeling', 'WebGL/Three.js'],
    },
  ]

  const benefits = [
    {
      icon: HeartIcon,
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, vision. Mental health support & gym membership.',
    },
    {
      icon: AcademicCapIcon,
      title: 'Learning & Growth',
      description:
        '$5,000 annual learning budget. Conference attendance. Internal mentorship program.',
    },
    {
      icon: GlobeAltIcon,
      title: 'Remote First',
      description: 'Work from anywhere. Flexible hours. Home office stipend. Annual team retreats.',
    },
    {
      icon: BriefcaseIcon,
      title: 'Equity & Compensation',
      description: 'Competitive salary. Generous equity packages. Annual bonuses. 401(k) matching.',
    },
    {
      icon: UserGroupIcon,
      title: 'Time Off',
      description:
        'Unlimited PTO. Paid parental leave. Company-wide shutdowns. Sabbatical program.',
    },
    {
      icon: LightBulbIcon,
      title: 'Innovation Time',
      description:
        '20% time for passion projects. Hackathons. Patent incentives. Side project support.',
    },
  ]

  const values = [
    {
      icon: StarIcon,
      title: 'Excellence',
      description: 'We set the bar high and support each other in reaching it.',
    },
    {
      icon: UserGroupIcon,
      title: 'Collaboration',
      description: 'Best ideas come from diverse teams working together.',
    },
    {
      icon: RocketLaunchIcon,
      title: 'Innovation',
      description: 'We experiment, fail fast, and learn faster.',
    },
    {
      icon: HeartIcon,
      title: 'Impact',
      description: 'Every role contributes to transforming transportation.',
    },
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
              Build the
              <span className="gradient-text"> Future of Automotive</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Join our mission to revolutionize car shopping with AI, AR/VR, and blockchain. We're
              looking for passionate innovators to shape the future of transportation.
            </p>
            <a href="#open-positions" className="btn-primary inline-block">
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Culture & Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              What it's like to work at FutureCars
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

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Benefits & Perks</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              We invest in our people because they're our greatest asset
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-2xl p-6"
              >
                <benefit.icon className="w-12 h-12 mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions Section */}
      <section id="open-positions" className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              {openPositions.length} roles across Engineering, Design, and Analytics
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-2xl p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 mb-3">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300">
                        {position.department}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300">
                        {position.type}
                      </span>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300">
                        {position.location}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-3">{position.description}</p>
                    <div className="space-y-1">
                      <p className="text-sm font-semibold">Key Requirements:</p>
                      <ul className="list-disc list-inside text-sm text-gray-600 dark:text-gray-400 space-y-1">
                        {position.requirements.map((req, idx) => (
                          <li key={idx}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <button
                    onClick={() =>
                      alert(
                        `Apply for ${position.title}\n\nPlease email your resume to careers@futurecars.com with the position title in the subject line.`
                      )
                    }
                    className="btn-primary whitespace-nowrap h-fit"
                  >
                    Apply Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
              Don't see a role that fits? We're always looking for exceptional talent.
            </p>
            <button
              onClick={() =>
                alert(
                  'Send your resume to careers@futurecars.com with "General Application" in the subject line.'
                )
              }
              className="btn-secondary"
            >
              Send Us Your Resume
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <RocketLaunchIcon className="w-20 h-20 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-4">Ready to Make an Impact?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join a team that's reshaping the automotive industry with cutting-edge technology
            </p>
            <a
              href="mailto:careers@futurecars.com"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
