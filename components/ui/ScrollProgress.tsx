'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setProgress(scrollPercent)
    }

    window.addEventListener('scroll', updateProgress)
    return () => window.removeEventListener('scroll', updateProgress)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-slate-200/20 dark:bg-slate-800/20">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 transition-all duration-150 ease-out shadow-lg shadow-blue-500/50"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
