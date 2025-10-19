'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  TruckIcon,
  CheckCircleIcon,
  ClockIcon,
  XCircleIcon,
  MapPinIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline'

export default function OrdersPage() {
  const [orders] = useState([
    {
      id: 'ORD-2024-001',
      carName: 'Tesla Model S Plaid',
      brand: 'Tesla',
      price: 135990,
      status: 'delivered',
      orderDate: '2024-09-15',
      deliveryDate: '2024-10-01',
      trackingNumber: 'TRK-2024-TS-001',
      deliveryAddress: '123 Main St, San Francisco, CA 94102',
    },
    {
      id: 'ORD-2024-002',
      carName: 'Porsche Taycan Turbo',
      brand: 'Porsche',
      price: 185000,
      status: 'in-transit',
      orderDate: '2024-10-05',
      estimatedDelivery: '2024-10-25',
      trackingNumber: 'TRK-2024-PT-002',
      deliveryAddress: '456 Oak Ave, San Francisco, CA 94103',
    },
    {
      id: 'ORD-2024-003',
      carName: 'Mercedes EQS 580',
      brand: 'Mercedes',
      price: 125950,
      status: 'processing',
      orderDate: '2024-10-12',
      estimatedDelivery: '2024-11-05',
      trackingNumber: 'TRK-2024-ME-003',
      deliveryAddress: '789 Pine St, San Francisco, CA 94104',
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'delivered':
        return (
          <span className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full text-sm font-medium">
            <CheckCircleIcon className="w-4 h-4" />
            Delivered
          </span>
        )
      case 'in-transit':
        return (
          <span className="flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium">
            <TruckIcon className="w-4 h-4" />
            In Transit
          </span>
        )
      case 'processing':
        return (
          <span className="flex items-center gap-2 px-4 py-2 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full text-sm font-medium">
            <ClockIcon className="w-4 h-4" />
            Processing
          </span>
        )
      case 'cancelled':
        return (
          <span className="flex items-center gap-2 px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-full text-sm font-medium">
            <XCircleIcon className="w-4 h-4" />
            Cancelled
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <TruckIcon className="w-10 h-10 text-blue-600" />
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">My Orders</h1>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Track and manage your vehicle orders</p>
        </motion.div>

        {/* Orders Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
        >
          <div className="glass-morphism rounded-xl p-6 text-center">
            <div className="text-3xl font-bold gradient-text mb-2">3</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Total Orders</p>
          </div>
          <div className="glass-morphism rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">1</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Delivered</p>
          </div>
          <div className="glass-morphism rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">1</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">In Transit</p>
          </div>
          <div className="glass-morphism rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">1</div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Processing</p>
          </div>
        </motion.div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order, index) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1 }}
              className="glass-morphism rounded-2xl p-6 hover:shadow-2xl transition-all duration-300"
            >
              {/* Order Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {order.carName}
                  </h3>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span>Order #{order.id}</span>
                    <span>•</span>
                    <span>Placed on {new Date(order.orderDate).toLocaleDateString()}</span>
                  </div>
                </div>
                {getStatusBadge(order.status)}
              </div>

              {/* Order Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <MapPinIcon className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                        Delivery Address
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {order.deliveryAddress}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CalendarIcon className="w-5 h-5 text-gray-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                        {order.status === 'delivered' ? 'Delivered On' : 'Estimated Delivery'}
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {order.status === 'delivered'
                          ? new Date(order.deliveryDate!).toLocaleDateString()
                          : new Date(order.estimatedDelivery!).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Tracking Number
                    </p>
                    <p className="text-sm text-blue-600 dark:text-blue-400 font-mono">
                      {order.trackingNumber}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                      Total Amount
                    </p>
                    <p className="text-2xl font-bold gradient-text">
                      ${order.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-6 border-t border-gray-200 dark:border-gray-700">
                <button
                  onClick={() => alert(`Tracking details for ${order.trackingNumber}`)}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
                >
                  Track Order
                </button>
                <Link
                  href={`/cars/${order.id.split('-')[2]}`}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
                >
                  View Vehicle Details
                </Link>
                <button
                  onClick={() => alert('Downloading invoice...')}
                  className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
                >
                  Download Invoice
                </button>
                {order.status === 'processing' && (
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to cancel this order?')) {
                        alert('Order cancelled')
                      }
                    }}
                    className="px-6 py-3 border border-red-300 dark:border-red-600 text-red-600 dark:text-red-400 rounded-xl font-semibold hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors ml-auto"
                  >
                    Cancel Order
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-8 glass-morphism rounded-2xl p-8 text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Need Help with Your Order?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            Our customer support team is available 24/7 to assist you with any questions or concerns
            about your orders.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => alert('Opening live chat...')}
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all"
            >
              Live Chat Support
            </button>
            <button
              onClick={() => alert('Calling support...')}
              className="px-8 py-3 border border-gray-300 dark:border-gray-600 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors text-gray-700 dark:text-gray-300"
            >
              Call: 1-800-FUTURE-CAR
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
