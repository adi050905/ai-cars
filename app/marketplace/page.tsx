'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  ShoppingCartIcon,
  TagIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  MapPinIcon,
  ClockIcon,
  HeartIcon,
  ArrowTopRightOnSquareIcon,
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import Image from 'next/image'

// Sample marketplace listings
const marketplaceListings = [
  {
    id: 1,
    title: '2023 Tesla Model 3 Long Range',
    price: 42900,
    originalPrice: 47000,
    location: 'San Francisco, CA',
    mileage: 8500,
    year: 2023,
    seller: 'John D.',
    sellerRating: 4.9,
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&h=600&fit=crop',
    verified: true,
    features: ['Autopilot', 'Premium Interior', 'Full Self-Driving'],
    postedDate: '2 days ago',
  },
  {
    id: 2,
    title: '2022 Ford Mustang Mach-E GT',
    price: 54900,
    originalPrice: 59900,
    location: 'Austin, TX',
    mileage: 15200,
    year: 2022,
    seller: 'Sarah M.',
    sellerRating: 5.0,
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1612825173281-9a193378527e?w=800&h=600&fit=crop',
    verified: true,
    features: ['Performance Package', 'B&O Sound', 'Panoramic Roof'],
    postedDate: '1 week ago',
  },
  {
    id: 3,
    title: '2024 Hyundai IONIQ 5 N',
    price: 61500,
    originalPrice: 66000,
    location: 'Seattle, WA',
    mileage: 3200,
    year: 2024,
    seller: 'Mike R.',
    sellerRating: 4.8,
    condition: 'Mint',
    image: 'https://images.unsplash.com/photo-1617788138017-80ad40651399?w=800&h=600&fit=crop',
    verified: true,
    features: ['Track Mode', 'Fast Charging', 'N Performance Seats'],
    postedDate: '3 days ago',
  },
  {
    id: 4,
    title: '2023 Rivian R1T Adventure',
    price: 69000,
    originalPrice: 73000,
    location: 'Denver, CO',
    mileage: 12000,
    year: 2023,
    seller: 'Alex P.',
    sellerRating: 4.7,
    condition: 'Great',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800&h=600&fit=crop',
    verified: true,
    features: ['Quad Motor', 'Off-Road Package', 'Camp Kitchen'],
    postedDate: '5 days ago',
  },
  {
    id: 5,
    title: '2022 Kia EV6 GT-Line',
    price: 48900,
    originalPrice: 52000,
    location: 'Los Angeles, CA',
    mileage: 18500,
    year: 2022,
    seller: 'Emily K.',
    sellerRating: 4.9,
    condition: 'Excellent',
    image: 'https://images.unsplash.com/photo-1617469767053-d3b523a0b982?w=800&h=600&fit=crop',
    verified: true,
    features: ['800V Charging', 'AWD', 'Premium Package'],
    postedDate: '1 day ago',
  },
  {
    id: 6,
    title: '2023 BMW iX M60',
    price: 102900,
    originalPrice: 108900,
    location: 'Miami, FL',
    mileage: 9800,
    year: 2023,
    seller: 'David L.',
    sellerRating: 5.0,
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800&h=600&fit=crop',
    verified: true,
    features: ['Curved Display', 'Harman Kardon', 'xDrive AWD'],
    postedDate: '4 days ago',
  },
]

// External marketplace links
const externalMarketplaces = [
  {
    name: 'Autotrader',
    url: 'https://www.autotrader.com/cars-for-sale/electric',
    logo: '🚗',
    description: '1M+ listings nationwide',
  },
  {
    name: 'Cars.com',
    url: 'https://www.cars.com/shopping/results/?stock_type=used&makes[]=&models[]=&list_price_max=&maximum_distance=all&zip=&fuel_slugs[]=electric',
    logo: '🏎️',
    description: 'Best deals on EVs',
  },
  {
    name: 'Carvana',
    url: 'https://www.carvana.com/cars/electric-vehicles',
    logo: '🌐',
    description: 'Buy online, delivered',
  },
  {
    name: 'Tesla Used',
    url: 'https://www.tesla.com/inventory/used',
    logo: '⚡',
    description: 'Certified Pre-Owned',
  },
]

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [priceFilter, setPriceFilter] = useState('all')
  const [conditionFilter, setConditionFilter] = useState('all')

  const filteredListings = marketplaceListings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesPrice =
      priceFilter === 'all' ||
      (priceFilter === 'under50k' && listing.price < 50000) ||
      (priceFilter === '50k-75k' && listing.price >= 50000 && listing.price < 75000) ||
      (priceFilter === 'over75k' && listing.price >= 75000)
    const matchesCondition = conditionFilter === 'all' || listing.condition === conditionFilter

    return matchesSearch && matchesPrice && matchesCondition
  })

  return (
    <div className="min-h-screen bg-slate-950 relative overflow-hidden pt-20">
      {/* Animated Background Orbs */}
      <div className="bg-orb bg-orb-1"></div>
      <div className="bg-orb bg-orb-2"></div>
      <div className="bg-orb bg-orb-3"></div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-heading font-bold gradient-text-electric mb-4">
            <ShoppingCartIcon className="w-12 h-12 inline-block mr-4" />
            EV Marketplace
          </h1>
          <p className="text-xl text-slate-300 mb-6 max-w-3xl mx-auto">
            Buy certified pre-owned electric vehicles from trusted sellers
          </p>

          {/* Search and Filters */}
          <div className="max-w-4xl mx-auto glass-morphism-hover neon-border p-6 rounded-2xl">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search for vehicles..."
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700/50 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-electric-500 focus:border-transparent transition-all"
                />
              </div>

              <select
                value={priceFilter}
                onChange={e => setPriceFilter(e.target.value)}
                className="px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700/50 text-white focus:outline-none focus:ring-2 focus:ring-electric-500 transition-all"
              >
                <option value="all">All Prices</option>
                <option value="under50k">Under $50k</option>
                <option value="50k-75k">$50k - $75k</option>
                <option value="over75k">Over $75k</option>
              </select>

              <select
                value={conditionFilter}
                onChange={e => setConditionFilter(e.target.value)}
                className="px-4 py-3 rounded-lg bg-slate-900/50 border border-slate-700/50 text-white focus:outline-none focus:ring-2 focus:ring-electric-500 transition-all"
              >
                <option value="all">All Conditions</option>
                <option value="Mint">Mint</option>
                <option value="Like New">Like New</option>
                <option value="Excellent">Excellent</option>
                <option value="Great">Great</option>
              </select>
            </div>
          </div>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="floating-card p-6 rounded-xl text-center"
          >
            <p className="text-3xl md:text-4xl font-bold gradient-text-electric">
              {marketplaceListings.length}
            </p>
            <p className="text-slate-400 text-sm mt-2">Active Listings</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="floating-card p-6 rounded-xl text-center"
          >
            <p className="text-3xl md:text-4xl font-bold gradient-text-electric">$52K</p>
            <p className="text-slate-400 text-sm mt-2">Avg. Price</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="floating-card p-6 rounded-xl text-center"
          >
            <p className="text-3xl md:text-4xl font-bold gradient-text-electric">4.9★</p>
            <p className="text-slate-400 text-sm mt-2">Seller Rating</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="floating-card p-6 rounded-xl text-center"
          >
            <p className="text-3xl md:text-4xl font-bold gradient-text-electric">100%</p>
            <p className="text-slate-400 text-sm mt-2">Verified</p>
          </motion.div>
        </div>

        {/* Marketplace Listings */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold gradient-text mb-8">
            Featured Listings ({filteredListings.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredListings.map((listing, index) => (
              <motion.div
                key={listing.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-morphism-hover rounded-2xl overflow-hidden card-hover group"
              >
                <div className="relative h-48">
                  <Image
                    src={listing.image}
                    alt={listing.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  {listing.verified && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center shadow-glow-electric">
                      <SparklesIcon className="w-4 h-4 mr-1" />
                      Verified
                    </div>
                  )}
                  <button className="absolute top-3 left-3 glass-morphism p-2 rounded-full hover:scale-110 transition-transform">
                    <HeartIcon className="w-5 h-5 text-white" />
                  </button>
                  <div className="absolute bottom-3 left-3">
                    <p className="text-sm text-slate-300 mb-1">
                      <ClockIcon className="w-4 h-4 inline mr-1" />
                      {listing.postedDate}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 hover:gradient-text-electric transition-all">
                    {listing.title}
                  </h3>

                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <p className="text-3xl font-bold gradient-text-electric">
                        ${listing.price.toLocaleString()}
                      </p>
                      {listing.originalPrice > listing.price && (
                        <p className="text-sm text-slate-500 line-through">
                          ${listing.originalPrice.toLocaleString()}
                        </p>
                      )}
                    </div>
                    <span className="badge-primary text-xs">{listing.condition}</span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-slate-400">
                      <MapPinIcon className="w-4 h-4 mr-2 text-electric-400" />
                      {listing.location}
                    </div>
                    <div className="flex items-center text-sm text-slate-400">
                      <TagIcon className="w-4 h-4 mr-2 text-electric-400" />
                      {listing.year} • {listing.mileage.toLocaleString()} miles
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-slate-700/50">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-electric-500 to-primary-500 flex items-center justify-center mr-2">
                        <span className="text-xs font-bold text-white">
                          {listing.seller.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm text-white font-semibold">{listing.seller}</p>
                        <p className="text-xs text-gray-400">{listing.sellerRating}★ rating</p>
                      </div>
                    </div>
                    <Link
                      href={`/cars/${listing.id}`}
                      className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-colors"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* External Marketplaces */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 text-center">
            Browse More on Partner Sites
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {externalMarketplaces.map((marketplace, index) => (
              <motion.a
                key={index}
                href={marketplace.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="glass-morphism p-6 rounded-xl text-center hover:bg-white/20 transition-all group"
              >
                <div className="text-4xl mb-3">{marketplace.logo}</div>
                <h3 className="text-lg font-bold text-white mb-2 flex items-center justify-center">
                  {marketplace.name}
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 ml-2 text-purple-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </h3>
                <p className="text-sm text-gray-300">{marketplace.description}</p>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-12 text-center"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Want to Sell Your EV?</h2>
          <p className="text-white/90 text-lg mb-8">
            List your electric vehicle for free and reach thousands of verified buyers
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              List Your Vehicle
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
