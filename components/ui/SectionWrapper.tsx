'use client'

import { useEffect, useRef, useState } from 'react'

interface SectionWrapperProps {
  children: React.ReactNode
  className?: string
  gradient?: 'blue' | 'purple' | 'pink' | 'green' | 'none'
  pattern?: 'dots' | 'grid' | 'none'
  animated?: boolean
}

export default function SectionWrapper({
  children,
  className = '',
  gradient = 'none',
  pattern = 'none',
  animated = true,
}: SectionWrapperProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!animated) {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [animated])

  const gradientClasses = {
    blue: 'bg-gradient-to-b from-transparent via-blue-50/30 to-transparent dark:via-blue-950/20',
    purple:
      'bg-gradient-to-b from-transparent via-purple-50/30 to-transparent dark:via-purple-950/20',
    pink: 'bg-gradient-to-b from-transparent via-pink-50/30 to-transparent dark:via-pink-950/20',
    green:
      'bg-gradient-to-b from-transparent via-emerald-50/30 to-transparent dark:via-emerald-950/20',
    none: '',
  }

  const patternClasses = {
    dots: 'bg-pattern-dots',
    grid: 'bg-pattern-grid',
    none: '',
  }

  return (
    <section
      ref={sectionRef}
      className={`
        relative py-20 overflow-hidden
        ${gradientClasses[gradient]}
        ${patternClasses[pattern]}
        ${className}
        transition-all duration-700 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
      `}
    >
      {children}
    </section>
  )
}
