'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

interface Car {
  _id: string
  make: string
  model: string
  year: number
  price: number
  image: string
  type: string
  features: string[]
}

export default function CarsPage() {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [showFilters, setShowFilters] = useState(false)
  const [selectedType, setSelectedType] = useState('All')
  const [priceRange, setPriceRange] = useState({ min: 0, max: 200000 })

  useEffect(() => {
    fetchCars()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const fetchCars = async () => {
    try {
      setLoading(true)
      // Premium curated collection - 10 best electric vehicles
      const mockCars: Car[] = [
        // Tesla Model S Plaid - Ultimate Performance
        {
          _id: '1',
          make: 'Tesla',
          model: 'Model S Plaid',
          year: 2024,
          price: 89990,
          image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=1200&h=800&fit=crop',
          type: 'Electric',
          features: ['Autopilot Advanced', '1,020 HP', '0-60 in 1.99s', '396 mi range'],
        },
        // Porsche Taycan Turbo S - Luxury Performance
        {
          _id: '2',
          make: 'Porsche',
          model: 'Taycan Turbo S',
          year: 2024,
          price: 185000,
          image:
            'https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200&h=800&fit=crop',
          type: 'Electric',
          features: ['Sport Chrono Package', '750 HP', '0-60 in 2.6s', '201 mi range'],
        },
        // Mercedes EQS 580 - Ultimate Luxury
        {
          _id: '5',
          make: 'Mercedes-Benz',
          model: 'EQS 580',
          year: 2024,
          price: 125950,
          image:
            'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&h=800&fit=crop',
          type: 'Electric',
          features: ['MBUX Hyperscreen', '516 HP', 'Air Suspension', '340 mi range'],
        },
        // BMW iX M60 - Performance SUV
        {
          _id: '7',
          make: 'BMW',
          model: 'iX M60',
          year: 2024,
          price: 108900,
          image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&h=800&fit=crop',
          type: 'Electric',
          features: ['M Sport Package', '619 HP', 'xDrive AWD', '288 mi range'],
        },
        // Audi e-tron GT - Electric Gran Turismo
        {
          _id: '4',
          make: 'Audi',
          model: 'e-tron GT',
          year: 2024,
          price: 145900,
          image:
            'https://images.unsplash.com/photo-1614200187524-dc4b892acf16?w=1200&h=800&fit=crop',
          type: 'Electric',
          features: ['Quattro AWD', '522 HP', '0-60 in 3.9s', '238 mi range'],
        },
        // Lucid Air Sapphire - Tri-Motor Beast
        {
          _id: '6',
          make: 'Lucid',
          model: 'Air Sapphire',
          year: 2024,
          price: 249000,
          image:
            'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&h=800&fit=crop',
          type: 'Electric',
          features: ['Tri-Motor', '1,234 HP', '0-60 in 1.89s', '427 mi range'],
        },
        // Rivian R1T - Adventure Truck
        {
          _id: '8',
          make: 'Rivian',
          model: 'R1T',
          year: 2024,
          price: 73000,
          image:
            'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=1200&h=800&fit=crop',
          type: 'Electric',
          features: ['Quad Motor', '835 HP', 'Off-Road Mode', '314 mi range'],
        },
        // Ford Mustang Mach-E GT - Electric Muscle
        {
          _id: '10',
          make: 'Ford',
          model: 'Mustang Mach-E GT',
          year: 2024,
          price: 59900,
          image:
            'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=1200&h=800&fit=crop',
          type: 'Electric',
          features: ['Performance Edition', '480 HP', '0-60 in 3.5s', '270 mi range'],
        },
        // Hyundai IONIQ 5 N - Hot Hatch Performance
        {
          _id: '3',
          make: 'Hyundai',
          model: 'IONIQ 5 N',
          year: 2024,
          price: 66000,
          image:
            'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=1200&h=800&fit=crop',
          type: 'Electric',
          features: ['N Performance', '641 HP', 'Track Mode', '221 mi range'],
        },
        // Kia EV6 GT - Sporty Crossover
        {
          _id: '9',
          make: 'Kia',
          model: 'EV6 GT',
          year: 2024,
          price: 61600,
          image:
            'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=1200&h=800&fit=crop',
          type: 'Electric',
          features: ['GT Performance', '576 HP', '0-60 in 3.4s', '206 mi range'],
        },
      ]
      setCars(mockCars)
    } catch (error) {
      console.error('Error fetching cars:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredCars = cars.filter(car => {
    const matchesSearch = `${car.make} ${car.model}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
    const matchesType = selectedType === 'All' || car.type === selectedType
    const matchesPrice = car.price >= priceRange.min && car.price <= priceRange.max
    return matchesSearch && matchesType && matchesPrice
  })

  const carTypes = ['All', ...Array.from(new Set(cars.map(car => car.type)))]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 pt-20">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-white mb-4">
            Elite Collection: <span className="text-blue-400">10 Premium EVs</span>
          </h1>
          <p className="text-xl text-gray-300 mb-2">
            Hand-picked luxury electric vehicles representing the pinnacle of performance and
            innovation
          </p>
          <p className="text-gray-400">
            Tesla • Porsche • Mercedes-Benz • BMW • Audi • Lucid • Rivian • Ford • Hyundai • Kia
          </p>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          <div className="flex-1 relative">
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by make or model..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            <FunnelIcon className="w-5 h-5" />
            Filters
          </button>
        </motion.div>

        {/* Filter Panel */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-white/10 backdrop-blur-md rounded-lg p-6 mb-8 border border-white/20"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Vehicle Type Filter */}
              <div>
                <label className="block text-white font-semibold mb-3">Vehicle Type</label>
                <div className="space-y-2">
                  {carTypes.map(type => (
                    <label key={type} className="flex items-center text-gray-300 cursor-pointer">
                      <input
                        type="radio"
                        name="type"
                        value={type}
                        checked={selectedType === type}
                        onChange={e => setSelectedType(e.target.value)}
                        className="mr-2"
                      />
                      {type}
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="block text-white font-semibold mb-3">
                  Price Range: ${priceRange.min.toLocaleString()} - $
                  {priceRange.max.toLocaleString()}
                </label>
                <div className="space-y-4">
                  <div>
                    <label className="text-gray-400 text-sm">Min Price</label>
                    <input
                      type="range"
                      min="0"
                      max="200000"
                      step="5000"
                      value={priceRange.min}
                      onChange={e =>
                        setPriceRange({ ...priceRange, min: parseInt(e.target.value) })
                      }
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="text-gray-400 text-sm">Max Price</label>
                    <input
                      type="range"
                      min="0"
                      max="200000"
                      step="5000"
                      value={priceRange.max}
                      onChange={e =>
                        setPriceRange({ ...priceRange, max: parseInt(e.target.value) })
                      }
                      className="w-full"
                    />
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div>
                <label className="block text-white font-semibold mb-3">Quick Actions</label>
                <div className="space-y-2">
                  <button
                    onClick={() => {
                      setSelectedType('All')
                      setPriceRange({ min: 0, max: 200000 })
                      setSearchTerm('')
                    }}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Reset All Filters
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Results Counter */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-6 text-center">
          <p className="text-gray-300 text-lg">
            Showing <span className="text-blue-400 font-bold">{filteredCars.length}</span> of{' '}
            <span className="font-bold">{cars.length}</span> vehicles
            {searchTerm && (
              <span className="text-gray-400">
                {' '}
                matching "<span className="text-white">{searchTerm}</span>"
              </span>
            )}
          </p>
        </motion.div>

        {/* Elite Cars Showcase */}
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Featured Hero Card - First Car */}
            {filteredCars.length > 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/30 hover:border-blue-400 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-96 lg:h-[600px] overflow-hidden">
                    <img
                      src={filteredCars[0].image}
                      alt={`${filteredCars[0].make} ${filteredCars[0].model}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
                    <div className="absolute top-6 left-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      ⭐ FEATURED
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                      {filteredCars[0].make}
                    </h2>
                    <h3 className="text-3xl lg:text-4xl font-semibold text-blue-400 mb-6">
                      {filteredCars[0].model}
                    </h3>
                    <p className="text-gray-300 text-lg mb-6">
                      Experience the pinnacle of electric performance and luxury.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      {filteredCars[0].features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-3"
                        >
                          <span className="text-blue-300 font-semibold text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm mb-1">Starting Price</p>
                        <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                          ${filteredCars[0].price.toLocaleString()}
                        </span>
                      </div>
                      <Link
                        href={`/cars/${filteredCars[0]._id}`}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-500/50 text-lg font-semibold"
                      >
                        Explore →
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Premium Grid - Remaining Cars */}
            {filteredCars.length > 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCars.slice(1).map((car, index) => (
                  <motion.div
                    key={car._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (index + 1) * 0.1 }}
                    className="group relative bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-blue-400 transition-all hover:scale-[1.02] cursor-pointer"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={car.image}
                        alt={`${car.make} ${car.model}`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-blue-500/80 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold">
                        {car.type}
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-1">{car.make}</h3>
                        <p className="text-blue-300 text-lg font-semibold">{car.model}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {car.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 px-3 py-1 rounded-full border border-blue-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-gray-400 text-xs mb-1">From</p>
                          <span className="text-2xl font-bold text-blue-400">
                            ${car.price.toLocaleString()}
                          </span>
                        </div>
                        <Link
                          href={`/cars/${car._id}`}
                          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-5 py-2 rounded-lg transition-all shadow-md hover:shadow-lg"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        )}

        {filteredCars.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-xl">No cars found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  )
}
