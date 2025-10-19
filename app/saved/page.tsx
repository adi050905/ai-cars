'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { HeartIcon, TrashIcon, ShoppingCartIcon, CalendarIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

export default function SavedCarsPage() {
  const [savedCars, setSavedCars] = useState<any[]>([])

  // Load saved cars from localStorage on mount
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedCars') || '[]')
    setSavedCars(saved)
  }, [])

  const removeCar = (id: string) => {
    const filtered = savedCars.filter(car => car.id !== id)
    setSavedCars(filtered)
    localStorage.setItem('savedCars', JSON.stringify(filtered))
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <HeartSolidIcon className="w-10 h-10 text-red-500" />
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">Saved Cars</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">
            You have {savedCars.length} saved {savedCars.length === 1 ? 'car' : 'cars'}
          </p>
        </motion.div>

        {/* Saved Cars Grid */}
        {savedCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {savedCars.map((car, index) => (
              <motion.div
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism rounded-2xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                {/* Car Image */}
                <div className="relative h-48 bg-gray-800 overflow-hidden">
                  {car.image ? (
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                      <span className="text-6xl font-bold text-white opacity-20">
                        {car.brand.substring(0, 2).toUpperCase()}
                      </span>
                    </div>
                  )}
                  <div className="absolute top-4 right-4">
                    <button
                      onClick={() => removeCar(car.id)}
                      className="w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors group"
                    >
                      <TrashIcon className="w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-white" />
                    </button>
                  </div>
                </div>

                {/* Car Details */}
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                      {car.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{car.brand}</p>
                  </div>

                  <div className="mb-4">
                    <p className="text-2xl font-bold gradient-text">
                      ${car.price.toLocaleString()}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                      Saved on {new Date(car.savedDate).toLocaleDateString()}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Link
                      href={`/cars/${car.id}`}
                      className="flex-1 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all text-center text-sm"
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => alert(`Added ${car.name} to cart!`)}
                      className="p-3 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                      title="Add to Cart"
                    >
                      <ShoppingCartIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </button>
                    <button
                      onClick={() => alert(`Test drive scheduled for ${car.name}!`)}
                      className="p-3 border border-gray-300 dark:border-gray-600 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors"
                      title="Schedule Test Drive"
                    >
                      <CalendarIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-morphism rounded-2xl p-12 text-center"
          >
            <HeartIcon className="w-24 h-24 text-gray-300 dark:text-gray-600 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              No Saved Cars Yet
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
              Start exploring our collection and save your favorite electric vehicles for easy
              access later.
            </p>
            <Link
              href="/cars"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Explore Cars
            </Link>
          </motion.div>
        )}

        {/* Quick Actions */}
        {savedCars.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 glass-morphism rounded-2xl p-6"
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                onClick={() => alert('Comparing saved cars...')}
                className="px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors text-gray-700 dark:text-gray-300"
              >
                Compare All Saved Cars
              </button>
              <button
                onClick={() => alert('Creating collection...')}
                className="px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors text-gray-700 dark:text-gray-300"
              >
                Create Collection
              </button>
              <button
                onClick={() => alert('Sharing list...')}
                className="px-6 py-4 border border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-green-50 dark:hover:bg-green-900/20 transition-colors text-gray-700 dark:text-gray-300"
              >
                Share My List
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}
