'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheckIcon,
  LockClosedIcon,
  CheckBadgeIcon,
  DocumentTextIcon,
  CubeTransparentIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
} from '@heroicons/react/24/outline'

export default function BlockchainPage() {
  const benefits = [
    {
      icon: ShieldCheckIcon,
      title: 'Tamper-Proof Records',
      description:
        'Vehicle history stored on blockchain cannot be altered or deleted, ensuring complete transparency and trust.',
    },
    {
      icon: CheckBadgeIcon,
      title: 'Instant Verification',
      description:
        'Verify vehicle authenticity, ownership history, and accident records in seconds with blockchain-powered lookups.',
    },
    {
      icon: LockClosedIcon,
      title: 'Secure Transactions',
      description:
        'Smart contracts automate escrow and payment processing, eliminating fraud and reducing transaction costs.',
    },
    {
      icon: DocumentTextIcon,
      title: 'Complete History',
      description:
        'Access comprehensive vehicle records including maintenance, repairs, accidents, and ownership changes.',
    },
  ]

  const howItWorks = [
    {
      step: '1',
      title: 'Vehicle Registration',
      description:
        'Every vehicle is registered on the blockchain with a unique digital identity tied to its VIN.',
      icon: CubeTransparentIcon,
    },
    {
      step: '2',
      title: 'Record Updates',
      description:
        'All events (sales, repairs, accidents) are recorded as immutable transactions on the blockchain.',
      icon: DocumentTextIcon,
    },
    {
      step: '3',
      title: 'Smart Verification',
      description:
        'AI analyzes blockchain data to generate trust scores and flag potential issues instantly.',
      icon: CheckBadgeIcon,
    },
    {
      step: '4',
      title: 'Instant Access',
      description:
        'Buyers and sellers can access complete, verified vehicle history reports instantly.',
      icon: ClockIcon,
    },
  ]

  const stats = [
    { value: '15K+', label: 'Vehicles Verified', icon: CheckBadgeIcon },
    { value: '100%', label: 'Fraud Prevention', icon: ShieldCheckIcon },
    { value: '<3 sec', label: 'Verification Time', icon: ClockIcon },
    { value: '98%', label: 'User Trust Score', icon: UserGroupIcon },
  ]

  const useCases = [
    {
      title: 'Buying Used Cars',
      description:
        'Get complete confidence with verified history reports showing real accidents, repairs, and ownership.',
      example: 'Discover that "mint condition" car had 3 unreported accidents',
    },
    {
      title: 'Selling Your Vehicle',
      description:
        'Build buyer trust with blockchain-verified service records and maintenance history.',
      example: 'Prove your car has been professionally maintained every 5,000 miles',
    },
    {
      title: 'Insurance Claims',
      description:
        'Insurers verify accident history instantly, reducing fraud and processing time.',
      example: 'Process claims 10x faster with verified blockchain records',
    },
    {
      title: 'Fleet Management',
      description:
        'Track entire fleet histories, maintenance schedules, and usage patterns on blockchain.',
      example: 'Manage 1,000+ vehicles with real-time blockchain insights',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <CubeTransparentIcon className="w-20 h-20 mx-auto mb-6 text-blue-600 dark:text-blue-400" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Blockchain
              <span className="gradient-text"> Vehicle Verification</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Revolutionary blockchain technology creating tamper-proof vehicle records and
              transparent automotive transactions
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => alert('Starting blockchain verification...')}
                className="btn-primary"
              >
                Verify a Vehicle
              </button>
              <button onClick={() => alert('Viewing demo...')} className="btn-secondary">
                Watch Demo
              </button>
            </div>
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
                <stat.icon className="w-12 h-12 mx-auto mb-3 text-blue-600 dark:text-blue-400" />
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Blockchain for Vehicles?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Traditional vehicle records can be manipulated. Blockchain creates an immutable,
              transparent history.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-2xl p-8 text-center hover:scale-105 transition-transform"
              >
                <benefit.icon className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              From vehicle registration to instant verification in 4 simple steps
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            {howItWorks.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row items-center gap-8 mb-12"
              >
                <div className={`flex-shrink-0 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-3xl font-bold text-white shadow-lg">
                    {item.step}
                  </div>
                </div>
                <div
                  className={`glass-morphism rounded-2xl p-8 flex-grow ${
                    index % 2 === 1 ? 'md:order-1' : ''
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <item.icon className="w-12 h-12 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{item.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Real-World Applications</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              How blockchain verification solves real problems in automotive
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {useCases.map((useCase, index) => (
              <motion.div
                key={useCase.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-3">{useCase.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{useCase.description}</p>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border-l-4 border-blue-600">
                  <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                    💡 Example: {useCase.example}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <ChartBarIcon className="w-20 h-20 mx-auto mb-6" />
            <h2 className="text-4xl font-bold mb-6">Built on Trust & Transparency</h2>
            <p className="text-xl mb-8 opacity-90">
              Every transaction is recorded on an immutable, distributed ledger. No single entity
              can alter records. Complete transparency for buyers and sellers.
            </p>
            <div className="glass-morphism rounded-2xl p-8 backdrop-blur-lg">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-4xl font-bold mb-2">256-bit</div>
                  <div className="opacity-80">Encryption</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">1000+</div>
                  <div className="opacity-80">Network Nodes</div>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">99.99%</div>
                  <div className="opacity-80">Uptime</div>
                </div>
              </div>
            </div>
          </motion.div>
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
            <ShieldCheckIcon className="w-20 h-20 mx-auto mb-6 text-blue-600 dark:text-blue-400" />
            <h2 className="text-4xl font-bold mb-4">Start Verifying Today</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Get instant blockchain verification reports for any vehicle. See complete history,
              accident records, and ownership changes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button onClick={() => alert('Enter VIN to verify vehicle')} className="btn-primary">
                Verify a Vehicle
              </button>
              <button
                onClick={() => alert('Learn more about blockchain technology')}
                className="btn-secondary"
              >
                Learn More
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
