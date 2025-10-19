'use client'

import { motion } from 'framer-motion'
import { ShieldCheckIcon, LockClosedIcon, EyeIcon, BellIcon } from '@heroicons/react/24/outline'

export default function PrivacyPage() {
  const lastUpdated = 'October 18, 2025'

  const sections = [
    {
      title: 'Information We Collect',
      icon: EyeIcon,
      content: [
        {
          subtitle: 'Account Information',
          text: 'When you create an account, we collect your name, email address, phone number, and payment information.',
        },
        {
          subtitle: 'Usage Data',
          text: 'We collect information about how you interact with our platform, including pages visited, features used, and search queries.',
        },
        {
          subtitle: 'Device Information',
          text: 'We collect device identifiers, browser type, operating system, and IP address for security and analytics.',
        },
        {
          subtitle: 'Location Data',
          text: 'With your permission, we collect location data to show nearby dealerships and vehicles.',
        },
      ],
    },
    {
      title: 'How We Use Your Information',
      icon: LockClosedIcon,
      content: [
        {
          subtitle: 'Service Delivery',
          text: 'We use your information to provide and improve our AI-powered car recommendations, AR/VR experiences, and marketplace services.',
        },
        {
          subtitle: 'Personalization',
          text: 'Your data helps us personalize your experience, including customized search results and tailored recommendations.',
        },
        {
          subtitle: 'Communication',
          text: 'We send you updates about your transactions, new features, and promotional offers (you can opt out anytime).',
        },
        {
          subtitle: 'Security',
          text: 'We use blockchain technology and encryption to protect your data and verify vehicle authenticity.',
        },
      ],
    },
    {
      title: 'Data Sharing & Disclosure',
      icon: ShieldCheckIcon,
      content: [
        {
          subtitle: 'With Your Consent',
          text: 'We share your information with third parties only when you explicitly consent, such as connecting you with dealerships.',
        },
        {
          subtitle: 'Service Providers',
          text: 'We work with trusted partners who help us operate our platform, including payment processors and cloud hosting services.',
        },
        {
          subtitle: 'Legal Requirements',
          text: 'We may disclose information when required by law or to protect our rights and the safety of our users.',
        },
        {
          subtitle: 'Business Transfers',
          text: 'In the event of a merger or acquisition, your data may be transferred to the new entity with the same privacy protections.',
        },
      ],
    },
    {
      title: 'Your Privacy Rights',
      icon: BellIcon,
      content: [
        {
          subtitle: 'Access & Portability',
          text: 'You can request a copy of all data we have about you in a machine-readable format.',
        },
        {
          subtitle: 'Correction',
          text: 'You can update or correct your personal information at any time through your account settings.',
        },
        {
          subtitle: 'Deletion',
          text: 'You have the right to request deletion of your personal data, subject to legal retention requirements.',
        },
        {
          subtitle: 'Opt-Out',
          text: 'You can opt out of marketing communications and certain data collection practices at any time.',
        },
      ],
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
            <ShieldCheckIcon className="w-20 h-20 mx-auto mb-6 text-blue-600 dark:text-blue-400" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Privacy
              <span className="gradient-text"> Policy</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Your privacy is important to us. This policy explains how we collect, use, and protect
              your personal information.
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Key Points */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-morphism rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-6">Key Privacy Highlights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">End-to-End Encryption</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      All sensitive data is encrypted in transit and at rest
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">No Data Selling</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      We never sell your personal information to third parties
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Full Control</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Access, update, or delete your data anytime
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
                      ✓
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">GDPR & CCPA Compliant</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      We comply with all major privacy regulations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-2xl p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  <section.icon className="w-12 h-12 text-blue-600 dark:text-blue-400" />
                  <h2 className="text-3xl font-bold">{section.title}</h2>
                </div>
                <div className="space-y-6">
                  {section.content.map((item, idx) => (
                    <div key={idx}>
                      <h3 className="text-xl font-semibold mb-2">{item.subtitle}</h3>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.text}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Topics */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Additional Information</h2>

            <div className="space-y-6">
              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Cookies & Tracking</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We use cookies and similar technologies to improve your experience, analyze usage
                  patterns, and deliver personalized content. You can control cookie preferences
                  through your browser settings.
                </p>
              </div>

              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Children's Privacy</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Our services are not intended for children under 13. We do not knowingly collect
                  personal information from children. If you believe we have collected data from a
                  child, please contact us immediately.
                </p>
              </div>

              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">International Data Transfers</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Your information may be transferred to and processed in countries other than your
                  own. We ensure appropriate safeguards are in place to protect your data in
                  accordance with this policy.
                </p>
              </div>

              <div className="glass-morphism rounded-xl p-6">
                <h3 className="text-xl font-bold mb-3">Policy Updates</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We may update this policy periodically. We'll notify you of significant changes
                  via email or through our platform. Continued use of our services after changes
                  constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto glass-morphism rounded-2xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Questions About Your Privacy?</h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              If you have any questions about this privacy policy or how we handle your data, please
              don't hesitate to contact our privacy team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="mailto:privacy@futurecars.com" className="btn-primary">
                Email Privacy Team
              </a>
              <a href="/help" className="btn-secondary">
                Visit Help Center
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
