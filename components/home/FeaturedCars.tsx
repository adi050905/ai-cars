'use client'

import { useState, useEffect, memo, useCallback, useMemo } from 'react'
import { motion } from 'framer-motion'
import axios from 'axios'
import Link from 'next/link'
import OptimizedImage from '@/components/ui/OptimizedImage'
import { HeartIcon, EyeIcon, BoltIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'

interface Car {
  _id: string
  make: string
  model: string
  year: number
  price: number
  fuel_type: string
  image: string
  eco_score?: number
  safety_rating?: number
}

// Mock data constant - moved outside component for better performance
// Using optimized Unsplash URLs with compression and proper sizing
const MOCK_CARS: Car[] = [
  {
    _id: '1',
    make: 'Tesla',
    model: 'Model 3',
    year: 2024,
    price: 42990,
    fuel_type: 'Electric',
    image:
      'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=600&h=400&fit=crop&auto=format&q=80',
    eco_score: 9.5,
    safety_rating: 5,
  },
  {
    _id: '2',
    make: 'BMW',
    model: 'i4',
    year: 2024,
    price: 55400,
    fuel_type: 'Electric',
    image:
      'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&h=400&fit=crop&auto=format&q=80',
    eco_score: 9.2,
    safety_rating: 5,
  },
  {
    _id: '3',
    make: 'Audi',
    model: 'e-tron GT',
    year: 2024,
    price: 102700,
    fuel_type: 'Electric',
    image:
      'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=600&h=400&fit=crop&auto=format&q=80',
    eco_score: 9.0,
    safety_rating: 5,
  },
]

// Memoized car card component for better performance
const CarCard = memo(function CarCard({
  car,
  index,
  isFavorite,
  onToggleFavorite,
}: {
  car: Car
  index: number
  isFavorite: boolean
  onToggleFavorite: (id: string) => void
}) {
  const handleFavoriteClick = useCallback(() => {
    onToggleFavorite(car._id)
  }, [car._id, onToggleFavorite])

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="glass-morphism rounded-2xl overflow-hidden card-hover">
        {/* Image */}
        <div className="relative h-56 bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
          <OptimizedImage
            src={car.image}
            alt={`${car.year} ${car.make} ${car.model}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            priority={index < 3}
            quality={80}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            fallbackText={`${car.make} ${car.model}`}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 z-10" />

          {/* Badges */}
          <div className="absolute top-4 left-4 space-y-2 z-20">
            {car.fuel_type === 'Electric' && (
              <span className="inline-flex items-center space-x-1 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                <BoltIcon className="w-4 h-4" />
                <span>EV</span>
              </span>
            )}
            {car.eco_score && car.eco_score > 9 && (
              <span className="block bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                Eco-Friendly
              </span>
            )}
          </div>

          {/* Favorite Button */}
          <button
            onClick={handleFavoriteClick}
            className="absolute top-4 right-4 p-2 glass-morphism rounded-full hover:scale-110 transition-transform z-20"
            aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
          >
            {isFavorite ? (
              <HeartSolidIcon className="w-6 h-6 text-red-500" />
            ) : (
              <HeartIcon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">
            {car.year} {car.make} {car.model}
          </h3>

          <div className="flex items-center justify-between mb-4">
            <span className="text-2xl font-bold gradient-text">${car.price.toLocaleString()}</span>
            <span className="text-sm px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full">
              {car.fuel_type}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-400 mb-4">
            <div className="flex items-center space-x-4">
              {car.safety_rating && <span>⭐ {car.safety_rating}.0 Safety</span>}
              {car.eco_score && <span>🌱 {car.eco_score} Eco</span>}
            </div>
          </div>

          <div className="flex space-x-2">
            <Link href={`/cars/${car._id}`} className="flex-1 btn-primary text-center text-sm py-2">
              View Details
            </Link>
            <Link
              href={`/ar-vr/${car._id}`}
              className="px-4 py-2 glass-morphism rounded-lg hover:bg-purple-100 dark:hover:bg-purple-900 transition-colors"
              aria-label="View in AR"
            >
              <EyeIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  )
})

const FeaturedCars = memo(function FeaturedCars() {
  const [cars, setCars] = useState<Car[]>(MOCK_CARS)
  const [loading, setLoading] = useState(false) // Start with false since we show mock data
  const [favorites, setFavorites] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Fetch real data in background without blocking UI
    const fetchCars = async () => {
      try {
        if (process.env.NEXT_PUBLIC_API_URL) {
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/cars?limit=6`)
          if (response.data.cars && response.data.cars.length > 0) {
            setCars(response.data.cars)
          }
        }
      } catch (error) {
        // Silently fail - already showing mock data
      }
    }
    fetchCars()
  }, [])

  const toggleFavorite = useCallback((carId: string) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev)
      if (newFavorites.has(carId)) {
        newFavorites.delete(carId)
      } else {
        newFavorites.add(carId)
      }
      return newFavorites
    })
  }, [])

  // Memoize displayed cars to prevent unnecessary re-renders
  const displayedCars = useMemo(() => cars.slice(0, 6), [cars])

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold font-orbitron mb-4"
        >
          AI-Recommended For You
        </motion.h2>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Personalized selections based on your preferences and browsing history
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map(i => (
            <div key={i} className="glass-morphism rounded-2xl h-96 animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCars.map((car, index) => (
            <CarCard
              key={car._id}
              car={car}
              index={index}
              isFavorite={favorites.has(car._id)}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
      )}

      <div className="text-center mt-12">
        <Link href="/cars" className="btn-secondary inline-block">
          View All Cars
        </Link>
      </div>
    </div>
  )
})

export default FeaturedCars
