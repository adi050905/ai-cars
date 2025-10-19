'use client'

import { useState } from 'react'
import Image from 'next/image'

interface OptimizedImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  quality?: number
  fill?: boolean
  width?: number
  height?: number
  sizes?: string
  fallbackText?: string
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
}

export default function OptimizedImage({
  src,
  alt,
  className = '',
  priority = false,
  quality = 80,
  fill = false,
  width,
  height,
  sizes,
  fallbackText,
  objectFit = 'cover',
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  if (imageError) {
    return (
      <div
        className={`${className} bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center`}
      >
        <div className="text-center text-white p-4">
          <div className="text-lg font-bold">{fallbackText || 'Image'}</div>
        </div>
      </div>
    )
  }

  return (
    <>
      {isLoading && (
        <div
          className={`${className} absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 animate-pulse`}
        />
      )}
      <Image
        src={src}
        alt={alt}
        className={`${className} ${
          isLoading ? 'opacity-0' : 'opacity-100'
        } transition-opacity duration-300`}
        style={{ objectFit }}
        priority={priority}
        quality={quality}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        sizes={sizes}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setImageError(true)
          setIsLoading(false)
        }}
      />
    </>
  )
}
