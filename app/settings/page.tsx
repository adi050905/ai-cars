'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  BellIcon,
  MoonIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  KeyIcon,
  EnvelopeIcon,
  DevicePhoneMobileIcon,
} from '@heroicons/react/24/outline'

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    sms: false,
    newsletter: true,
  })

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showEmail: false,
    showPhone: false,
    dataSharing: true,
  })

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Settings</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your account preferences and settings
          </p>
        </motion.div>

        {/* Notifications Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-morphism rounded-2xl p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <BellIcon className="w-6 h-6 text-blue-600" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Notifications</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Email Notifications</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receive updates via email
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.email}
                  onChange={e => setNotifications({ ...notifications, email: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <div className="flex items-center gap-3">
                <BellIcon className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Push Notifications</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receive push notifications
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.push}
                  onChange={e => setNotifications({ ...notifications, push: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <div className="flex items-center gap-3">
                <DevicePhoneMobileIcon className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">SMS Notifications</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receive text message updates
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.sms}
                  onChange={e => setNotifications({ ...notifications, sms: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Newsletter</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Receive our weekly newsletter
                  </p>
                </div>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={notifications.newsletter}
                  onChange={e =>
                    setNotifications({ ...notifications, newsletter: e.target.checked })
                  }
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </motion.div>

        {/* Privacy Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass-morphism rounded-2xl p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <ShieldCheckIcon className="w-6 h-6 text-purple-600" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Privacy</h2>
          </div>

          <div className="space-y-4">
            <div className="p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <div className="mb-3">
                <p className="font-medium text-gray-900 dark:text-white">Profile Visibility</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Control who can see your profile
                </p>
              </div>
              <select
                value={privacy.profileVisibility}
                onChange={e => setPrivacy({ ...privacy, profileVisibility: e.target.value })}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
              >
                <option value="public">Public</option>
                <option value="friends">Friends Only</option>
                <option value="private">Private</option>
              </select>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Show Email Address</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Display your email on profile
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={privacy.showEmail}
                  onChange={e => setPrivacy({ ...privacy, showEmail: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Show Phone Number</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Display your phone on profile
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={privacy.showPhone}
                  onChange={e => setPrivacy({ ...privacy, showPhone: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>

            <div className="flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
              <div>
                <p className="font-medium text-gray-900 dark:text-white">Data Sharing</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Share data for better recommendations
                </p>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={privacy.dataSharing}
                  onChange={e => setPrivacy({ ...privacy, dataSharing: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
              </label>
            </div>
          </div>
        </motion.div>

        {/* Security Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass-morphism rounded-2xl p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <KeyIcon className="w-6 h-6 text-green-600" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Security</h2>
          </div>

          <div className="space-y-3">
            <button
              onClick={() => alert('Opening password change dialog...')}
              className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <KeyIcon className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Change Password</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Last changed 3 months ago
                  </p>
                </div>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <button
              onClick={() => alert('Opening 2FA setup...')}
              className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <ShieldCheckIcon className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">
                    Two-Factor Authentication
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Not enabled</p>
                </div>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            <button
              onClick={() => alert('Viewing connected devices...')}
              className="w-full flex items-center justify-between p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors text-left"
            >
              <div className="flex items-center gap-3">
                <DevicePhoneMobileIcon className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Connected Devices</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">3 active devices</p>
                </div>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Payment Settings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass-morphism rounded-2xl p-6 mb-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <CreditCardIcon className="w-6 h-6 text-yellow-600" />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Payment Methods</h2>
          </div>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded flex items-center justify-center">
                  <CreditCardIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">•••• •••• •••• 4242</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Expires 12/25</p>
                </div>
              </div>
              <button
                onClick={() => alert('Removing card...')}
                className="text-red-600 dark:text-red-400 hover:underline text-sm font-medium"
              >
                Remove
              </button>
            </div>

            <button
              onClick={() => alert('Adding new payment method...')}
              className="w-full p-4 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 transition-colors text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
            >
              + Add Payment Method
            </button>
          </div>
        </motion.div>

        {/* Save Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4"
        >
          <button
            onClick={() => alert('Settings saved successfully!')}
            className="flex-1 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
          >
            Save All Settings
          </button>
          <button
            onClick={() => window.location.reload()}
            className="px-8 py-4 border border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
          >
            Reset
          </button>
        </motion.div>
      </div>
    </div>
  )
}
