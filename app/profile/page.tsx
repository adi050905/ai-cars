'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  UserCircleIcon,
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  CameraIcon,
  PencilIcon,
} from '@heroicons/react/24/outline'

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    bio: 'Electric vehicle enthusiast and early adopter of sustainable transportation.',
    memberSince: 'January 2024',
  })

  const [editedProfile, setEditedProfile] = useState(profile)

  const handleSave = () => {
    setProfile(editedProfile)
    setIsEditing(false)
    alert('Profile updated successfully!')
  }

  const handleCancel = () => {
    setEditedProfile(profile)
    setIsEditing(false)
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-4">My Profile</h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your account information and preferences
          </p>
        </motion.div>

        {/* Profile Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass-morphism rounded-2xl p-8 mb-8"
        >
          {/* Profile Picture Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
            <div className="relative group">
              <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                <UserCircleIcon className="w-24 h-24 text-white" />
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg">
                <CameraIcon className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                {profile.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">{profile.email}</p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
                  Premium Member
                </span>
                <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-full text-sm font-medium">
                  Member since {profile.memberSince}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsEditing(!isEditing)}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all flex items-center gap-2"
            >
              <PencilIcon className="w-5 h-5" />
              {isEditing ? 'Cancel Edit' : 'Edit Profile'}
            </button>
          </div>

          {/* Profile Details */}
          <div className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Full Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.name}
                  onChange={e => setEditedProfile({ ...editedProfile, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              ) : (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <UserCircleIcon className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900 dark:text-white">{profile.name}</span>
                </div>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email Address
              </label>
              {isEditing ? (
                <input
                  type="email"
                  value={editedProfile.email}
                  onChange={e => setEditedProfile({ ...editedProfile, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              ) : (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <EnvelopeIcon className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900 dark:text-white">{profile.email}</span>
                </div>
              )}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Phone Number
              </label>
              {isEditing ? (
                <input
                  type="tel"
                  value={editedProfile.phone}
                  onChange={e => setEditedProfile({ ...editedProfile, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              ) : (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <PhoneIcon className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900 dark:text-white">{profile.phone}</span>
                </div>
              )}
            </div>

            {/* Location */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Location
              </label>
              {isEditing ? (
                <input
                  type="text"
                  value={editedProfile.location}
                  onChange={e => setEditedProfile({ ...editedProfile, location: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              ) : (
                <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <MapPinIcon className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-900 dark:text-white">{profile.location}</span>
                </div>
              )}
            </div>

            {/* Bio */}
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Bio
              </label>
              {isEditing ? (
                <textarea
                  value={editedProfile.bio}
                  onChange={e => setEditedProfile({ ...editedProfile, bio: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                />
              ) : (
                <div className="px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <p className="text-gray-900 dark:text-white">{profile.bio}</p>
                </div>
              )}
            </div>

            {/* Save/Cancel Buttons */}
            {isEditing && (
              <div className="flex gap-4 pt-4">
                <button
                  onClick={handleSave}
                  className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                >
                  Cancel
                </button>
              </div>
            )}
          </div>
        </motion.div>

        {/* Account Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="glass-morphism rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">5</div>
            <p className="text-gray-600 dark:text-gray-400">Saved Cars</p>
          </div>
          <div className="glass-morphism rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">2</div>
            <p className="text-gray-600 dark:text-gray-400">Test Drives Scheduled</p>
          </div>
          <div className="glass-morphism rounded-2xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">1</div>
            <p className="text-gray-600 dark:text-gray-400">Active Reservations</p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
