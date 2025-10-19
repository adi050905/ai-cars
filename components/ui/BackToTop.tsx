'use client'

import { useEffect, useState } from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/outline'

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-4 rounded-full
            bg-gradient-to-r from-blue-600 to-purple-600
            text-white shadow-xl shadow-purple-500/50
            hover:shadow-2xl hover:scale-110 hover:rotate-12
            active:scale-95
            transition-all duration-300 ease-out
            group"
          aria-label="Back to top"
        >
          <ArrowUpIcon className="w-6 h-6 group-hover:animate-bounce" />
        </button>
      )}
    </>
  )
}
