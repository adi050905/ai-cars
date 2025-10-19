'use client'

import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate page load
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  if (!isLoading) return null

  return (
    <div className="fixed inset-0 z-[100] bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 flex items-center justify-center">
      <div className="text-center space-y-8">
        {/* Animated Logo/Icon */}
        <div className="relative">
          <div className="w-24 h-24 mx-auto">
            {/* Outer Ring */}
            <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-ping" />
            <div
              className="absolute inset-0 border-4 border-purple-500/30 rounded-full animate-ping"
              style={{ animationDelay: '0.2s' }}
            />

            {/* Inner Spinner */}
            <div className="relative w-full h-full flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-transparent border-t-blue-500 border-r-purple-500 rounded-full animate-spin" />
            </div>

            {/* Center Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                className="w-10 h-10 text-white animate-pulse"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-3">
          <h2 className="text-3xl font-bold text-white animate-pulse">FutureCars</h2>
          <div className="flex gap-2 justify-center">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
            <div
              className="w-2 h-2 bg-purple-500 rounded-full animate-bounce"
              style={{ animationDelay: '0.1s' }}
            />
            <div
              className="w-2 h-2 bg-pink-500 rounded-full animate-bounce"
              style={{ animationDelay: '0.2s' }}
            />
          </div>
          <p className="text-blue-200 text-sm">Loading your experience...</p>
        </div>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-slate-800 rounded-full mx-auto overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-slide" />
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(400%);
          }
        }
        .animate-slide {
          animation: slide 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
