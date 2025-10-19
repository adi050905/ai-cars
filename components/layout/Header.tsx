'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { motion, AnimatePresence } from 'framer-motion'
import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
  SunIcon,
  MoonIcon,
  BellIcon,
  HeartIcon,
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  BookmarkIcon,
  TruckIcon,
  XCircleIcon,
} from '@heroicons/react/24/outline'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [showSearchModal, setShowSearchModal] = useState(false)
  const [showCartModal, setShowCartModal] = useState(false)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Sample cart items (in a real app, this would come from context/state management)
  const [cartItems] = useState([
    {
      id: 1,
      name: 'Tesla Model S Plaid',
      price: 135990,
      image: '/images/tesla-model-s.jpg',
      quantity: 1,
    },
    {
      id: 2,
      name: 'Porsche Taycan Turbo',
      price: 185000,
      image: '/images/porsche-taycan.jpg',
      quantity: 1,
    },
    {
      id: 3,
      name: 'Mercedes EQS 580',
      price: 125950,
      image: '/images/mercedes-eqs.jpg',
      quantity: 1,
    },
  ])

  const cartTotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // Sample cars for search
  const allCars = [
    { id: 1, name: 'Tesla Model S Plaid', brand: 'Tesla' },
    { id: 2, name: 'Porsche Taycan Turbo', brand: 'Porsche' },
    { id: 5, name: 'Mercedes EQS 580', brand: 'Mercedes' },
    { id: 7, name: 'BMW iX M60', brand: 'BMW' },
    { id: 10, name: 'Audi e-tron GT', brand: 'Audi' },
    { id: 13, name: 'Lucid Air Sapphire', brand: 'Lucid' },
    { id: 16, name: 'Rivian R1T', brand: 'Rivian' },
    { id: 18, name: 'Ford Mustang Mach-E', brand: 'Ford' },
    { id: 21, name: 'Hyundai IONIQ 5', brand: 'Hyundai' },
    { id: 24, name: 'Kia EV6 GT', brand: 'Kia' },
    { id: 27, name: 'Genesis Electrified GV70', brand: 'Genesis' },
    { id: 3, name: 'Tesla Model X', brand: 'Tesla' },
    { id: 4, name: 'Tesla Model Y', brand: 'Tesla' },
    { id: 6, name: 'Porsche Taycan 4S', brand: 'Porsche' },
    { id: 8, name: 'Mercedes EQE 350', brand: 'Mercedes' },
    { id: 9, name: 'Mercedes EQS SUV', brand: 'Mercedes' },
    { id: 11, name: 'BMW i4 M50', brand: 'BMW' },
    { id: 12, name: 'BMW i7 xDrive60', brand: 'BMW' },
    { id: 14, name: 'Audi Q4 e-tron', brand: 'Audi' },
    { id: 15, name: 'Audi e-tron S', brand: 'Audi' },
    { id: 17, name: 'Lucid Air Touring', brand: 'Lucid' },
    { id: 19, name: 'Rivian R1S', brand: 'Rivian' },
    { id: 20, name: 'Ford F-150 Lightning', brand: 'Ford' },
    { id: 22, name: 'Hyundai IONIQ 6', brand: 'Hyundai' },
    { id: 23, name: 'Hyundai IONIQ 5 N', brand: 'Hyundai' },
    { id: 25, name: 'Kia EV6', brand: 'Kia' },
    { id: 26, name: 'Kia EV9', brand: 'Kia' },
    { id: 28, name: 'Genesis GV60', brand: 'Genesis' },
    { id: 29, name: 'Polestar 2', brand: 'Polestar' },
    { id: 30, name: 'Polestar 3', brand: 'Polestar' },
  ]

  const filteredCars = searchQuery
    ? allCars.filter(
        car =>
          car.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          car.brand.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : []

  const removeFromCart = (id: number) => {
    alert(`Item ${id} removed from cart`)
  }

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Explore', href: '/cars' },
    { name: 'AR/VR', href: '/ar-vr' },
    { name: 'Marketplace', href: '/marketplace' },
    { name: 'EV Solutions', href: '/ev' },
    { name: 'Community', href: '/community' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-black/80 backdrop-blur-lg shadow-lg py-3 border-b border-gray-200 dark:border-gray-800'
          : 'bg-white/80 dark:bg-transparent backdrop-blur-md py-5'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg"
            >
              <span className="text-2xl font-bold text-white font-orbitron">FC</span>
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="text-2xl font-bold gradient-text font-orbitron">FutureCars</h1>
              <p className="text-xs text-gray-600 dark:text-gray-400">AI-Powered Platform</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigation.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {item.name}
                <span className="absolute -bottom-1 left-4 right-4 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </Link>
            ))}
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <button
              onClick={() => setShowSearchModal(true)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Search"
            >
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>

            {/* Notifications */}
            <button
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
              aria-label="Notifications"
            >
              <BellIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            {/* Favorites */}
            <button
              className="hidden sm:block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Favorites"
            >
              <HeartIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
            </button>

            {/* Cart */}
            <button
              onClick={() => setShowCartModal(true)}
              className="hidden sm:block p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
              aria-label="Cart"
            >
              <ShoppingCartIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-blue-600 text-white text-xs rounded-full flex items-center justify-center">
                {cartItems.length}
              </span>
            </button>

            {/* Theme Toggle */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <SunIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                ) : (
                  <MoonIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                )}
              </button>
            )}

            {/* User */}
            <div className="relative hidden sm:block">
              <button
                onClick={() => setShowProfileMenu(!showProfileMenu)}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Profile"
              >
                <UserCircleIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
              </button>

              {/* Profile Dropdown Menu */}
              <AnimatePresence>
                {showProfileMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-64 glass-morphism rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="p-4 border-b border-gray-200 dark:border-gray-700">
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">
                        John Doe
                      </p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">john.doe@email.com</p>
                    </div>

                    <div className="py-2">
                      <Link
                        href="/profile"
                        className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        <UserCircleIcon className="w-5 h-5 mr-3" />
                        My Profile
                      </Link>
                      <Link
                        href="/orders"
                        className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        <TruckIcon className="w-5 h-5 mr-3" />
                        My Orders
                      </Link>
                      <Link
                        href="/saved"
                        className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        <BookmarkIcon className="w-5 h-5 mr-3" />
                        Saved Cars
                      </Link>
                      <Link
                        href="/settings"
                        className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                        onClick={() => setShowProfileMenu(false)}
                      >
                        <Cog6ToothIcon className="w-5 h-5 mr-3" />
                        Settings
                      </Link>
                    </div>

                    <div className="border-t border-gray-200 dark:border-gray-700 py-2">
                      <button
                        onClick={() => {
                          setShowProfileMenu(false)
                          alert('Logged out successfully')
                        }}
                        className="flex items-center w-full px-4 py-3 text-sm text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors"
                      >
                        <ArrowRightOnRectangleIcon className="w-5 h-5 mr-3" />
                        Logout
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden mt-4 glass-morphism rounded-lg overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navigation.map(item => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Search Modal */}
        <AnimatePresence>
          {showSearchModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowSearchModal(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20"
            >
              <motion.div
                initial={{ scale: 0.95, y: -20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: -20 }}
                onClick={e => e.stopPropagation()}
                className="w-full max-w-2xl mx-4 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                {/* Search Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                  <div className="flex items-center space-x-4">
                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-500 dark:text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search for cars, brands, models..."
                      value={searchQuery}
                      onChange={e => setSearchQuery(e.target.value)}
                      autoFocus
                      className="flex-1 bg-transparent text-lg outline-none text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                    />
                    <button
                      onClick={() => setShowSearchModal(false)}
                      className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <XMarkIcon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                    </button>
                  </div>
                </div>

                {/* Search Results */}
                <div className="max-h-96 overflow-y-auto p-4 bg-white dark:bg-gray-900">
                  {searchQuery === '' ? (
                    <div className="text-center py-12">
                      <MagnifyingGlassIcon className="w-16 h-16 text-gray-400 dark:text-gray-600 mx-auto mb-4" />
                      <p className="text-gray-600 dark:text-gray-400">
                        Start typing to search for cars...
                      </p>
                    </div>
                  ) : filteredCars.length > 0 ? (
                    <div className="space-y-2">
                      {filteredCars.map(car => (
                        <Link
                          key={car.id}
                          href={`/cars/${car.id}`}
                          onClick={() => {
                            setShowSearchModal(false)
                            setSearchQuery('')
                          }}
                          className="flex items-center p-4 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mr-4">
                            <span className="text-white font-bold text-sm">
                              {car.brand.substring(0, 2).toUpperCase()}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                              {car.name}
                            </h4>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{car.brand}</p>
                          </div>
                          <svg
                            className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400"
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
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-gray-600 dark:text-gray-400">
                        No cars found for "{searchQuery}"
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Cart Modal */}
        <AnimatePresence>
          {showCartModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowCartModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                onClick={e => e.stopPropagation()}
                className="w-full max-w-2xl glass-morphism rounded-2xl shadow-2xl overflow-hidden"
              >
                {/* Cart Header */}
                <div className="p-6 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <ShoppingCartIcon className="w-6 h-6 text-blue-600" />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      Shopping Cart
                    </h3>
                    <span className="px-2 py-1 text-xs bg-blue-600 text-white rounded-full">
                      {cartItems.length} items
                    </span>
                  </div>
                  <button
                    onClick={() => setShowCartModal(false)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>

                {/* Cart Items */}
                <div className="max-h-96 overflow-y-auto p-6 space-y-4">
                  {cartItems.map(item => (
                    <div
                      key={item.id}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50"
                    >
                      <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                        <span className="text-white font-bold">
                          {item.name.substring(0, 2).toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white">{item.name}</h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          ${item.price.toLocaleString()}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                      >
                        <XCircleIcon className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Cart Footer */}
                <div className="p-6 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-semibold text-gray-900 dark:text-white">
                      Total
                    </span>
                    <span className="text-2xl font-bold gradient-text">
                      ${cartTotal.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={() => setShowCartModal(false)}
                      className="flex-1 px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                    >
                      Continue Shopping
                    </button>
                    <button
                      onClick={() => {
                        setShowCartModal(false)
                        alert('Proceeding to checkout...')
                      }}
                      className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
