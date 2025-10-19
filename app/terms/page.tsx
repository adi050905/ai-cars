'use client'

import { motion } from 'framer-motion'
import { DocumentTextIcon, ScaleIcon, ShieldCheckIcon } from '@heroicons/react/24/outline'

export default function TermsPage() {
  const lastUpdated = 'October 18, 2025'

  const sections = [
    {
      title: '1. Acceptance of Terms',
      content: `By accessing and using FutureCars ("the Platform"), you agree to be bound by these Terms of Service. 
      If you do not agree to these terms, please do not use our services. We reserve the right to modify these terms at any time, 
      and your continued use constitutes acceptance of any changes.`,
    },
    {
      title: '2. User Accounts',
      content: `You must create an account to access certain features. You are responsible for maintaining the confidentiality 
      of your account credentials and for all activities under your account. You must be at least 18 years old to create an account. 
      You agree to provide accurate, current information and update it as necessary.`,
    },
    {
      title: '3. Buying & Selling Vehicles',
      subsections: [
        {
          subtitle: 'Seller Responsibilities',
          text: `Sellers must provide accurate vehicle information, including condition, history, and any known defects. 
          All listings must comply with local laws and regulations. Sellers are responsible for vehicle ownership documentation 
          and transfer procedures.`,
        },
        {
          subtitle: 'Buyer Responsibilities',
          text: `Buyers should conduct due diligence, including inspections and test drives. FutureCars facilitates connections 
          but is not a party to transactions. All sales are final between buyer and seller unless otherwise agreed.`,
        },
        {
          subtitle: 'Blockchain Verification',
          text: `Our blockchain verification service provides vehicle history data but does not guarantee accuracy or completeness. 
          Users should obtain independent vehicle history reports and inspections.`,
        },
      ],
    },
    {
      title: '4. AI & AR/VR Services',
      content: `Our AI recommendations and AR/VR experiences are provided "as is" for informational purposes. 
      While we strive for accuracy, we do not guarantee that AI recommendations will meet your needs. 
      AR/VR content is for visualization purposes and may not precisely represent actual vehicle appearance or features.`,
    },
    {
      title: '5. User Content & Conduct',
      content: `You retain ownership of content you post but grant us a license to use, display, and distribute it on our Platform. 
      You agree not to post content that is illegal, harmful, threatening, abusive, harassing, defamatory, vulgar, obscene, 
      or invasive of privacy. We reserve the right to remove content and terminate accounts that violate these terms.`,
    },
    {
      title: '6. Prohibited Activities',
      content: `You may not: (a) use the Platform for any illegal purpose; (b) attempt to gain unauthorized access to our systems; 
      (c) interfere with other users' experience; (d) scrape, copy, or download content without permission; 
      (e) impersonate others or misrepresent your affiliation; (f) post fraudulent listings or engage in deceptive practices.`,
    },
    {
      title: '7. Fees & Payments',
      content: `Certain services may require payment. All fees are non-refundable unless otherwise stated. 
      You authorize us to charge your payment method for applicable fees. We may change fees with 30 days notice. 
      Failed payments may result in service suspension. Transaction fees for vehicle sales may apply as specified in seller agreements.`,
    },
    {
      title: '8. Intellectual Property',
      content: `The Platform, including design, code, AI algorithms, AR/VR content, and trademarks, are owned by FutureCars 
      or our licensors. You may not copy, modify, distribute, or create derivative works without express written permission. 
      User-generated content remains the property of users, subject to our license to use it on the Platform.`,
    },
    {
      title: '9. Third-Party Services',
      content: `The Platform may integrate with third-party services (e.g., payment processors, mapping services, dealerships). 
      We are not responsible for third-party content or services. Your use of third-party services is subject to their terms. 
      We may receive commissions from third parties for referrals or transactions.`,
    },
    {
      title: '10. Disclaimers & Limitations',
      content: `THE PLATFORM IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND. WE DISCLAIM ALL WARRANTIES, 
      EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. 
      WE ARE NOT LIABLE FOR INDIRECT, INCIDENTAL, CONSEQUENTIAL DAMAGES ARISING FROM YOUR USE OF THE PLATFORM. 
      OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT YOU PAID US IN THE PAST 12 MONTHS.`,
    },
    {
      title: '11. Indemnification',
      content: `You agree to indemnify and hold harmless FutureCars, its officers, directors, employees, and agents from any claims, 
      damages, losses, or expenses (including attorneys' fees) arising from: (a) your use of the Platform; 
      (b) your violation of these terms; (c) your violation of any rights of another; (d) your posted content.`,
    },
    {
      title: '12. Dispute Resolution',
      subsections: [
        {
          subtitle: 'Arbitration Agreement',
          text: `Any disputes arising from these terms or your use of the Platform shall be resolved through binding arbitration 
          in accordance with the American Arbitration Association rules, rather than in court.`,
        },
        {
          subtitle: 'Class Action Waiver',
          text: `You agree to resolve disputes individually and waive the right to participate in class actions or 
          class-wide arbitrations.`,
        },
        {
          subtitle: 'Governing Law',
          text: `These terms are governed by the laws of the State of California, without regard to conflict of law principles. 
          Any arbitration shall take place in Santa Clara County, California.`,
        },
      ],
    },
    {
      title: '13. Termination',
      content: `We may suspend or terminate your account at any time for violations of these terms or for any reason. 
      You may terminate your account through settings. Upon termination, your right to use the Platform ceases immediately. 
      Provisions regarding ownership, disclaimers, indemnification, and dispute resolution survive termination.`,
    },
    {
      title: '14. Contact Information',
      content: `For questions about these Terms of Service, please contact us at legal@futurecars.com or write to us at: 
      FutureCars Legal Department, 123 Innovation Drive, Silicon Valley, CA 94025.`,
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
            <ScaleIcon className="w-20 h-20 mx-auto mb-6 text-blue-600 dark:text-blue-400" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Terms of
              <span className="gradient-text"> Service</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
              Please read these terms carefully before using our platform
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Last Updated: {lastUpdated}</p>
          </motion.div>
        </div>
      </section>

      {/* Summary */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="glass-morphism rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">Terms Summary</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Here's a quick overview of key points (please read the full terms below):
              </p>
              <ul className="space-y-3">
                {[
                  'You must be 18+ to use our services',
                  'Provide accurate information and follow community guidelines',
                  'We facilitate transactions but are not a party to them',
                  'AI recommendations and AR/VR content are for informational purposes',
                  'Respect intellectual property and user privacy',
                  'Disputes are resolved through arbitration in California',
                  'We may modify these terms with notice',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full Terms */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-morphism rounded-2xl p-8"
              >
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                {section.content && (
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                )}
                {section.subsections && (
                  <div className="space-y-4 mt-4">
                    {section.subsections.map((sub, idx) => (
                      <div key={idx}>
                        <h3 className="text-lg font-semibold mb-2">{sub.subtitle}</h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {sub.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Acceptance */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <DocumentTextIcon className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">By Using FutureCars, You Agree</h2>
            <p className="text-lg mb-6 opacity-90">
              Your continued use of our platform constitutes acceptance of these Terms of Service
              and our Privacy Policy. If you have questions, please contact our legal team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:legal@futurecars.com"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Legal Team
              </a>
              <a
                href="/privacy"
                className="inline-block bg-white/10 backdrop-blur-sm text-white border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors"
              >
                Read Privacy Policy
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
