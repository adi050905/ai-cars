'use client'

import { createContext, useContext, useState, useCallback } from 'react'
import {
  XMarkIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from '@heroicons/react/24/outline'

type ToastType = 'success' | 'error' | 'info' | 'warning'

interface Toast {
  id: string
  message: string
  type: ToastType
}

interface ToastContextType {
  showToast: (message: string, type?: ToastType) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within ToastProvider')
  }
  return context
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([])

  const showToast = useCallback((message: string, type: ToastType = 'info') => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts(prev => [...prev, { id, message, type }])

    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== id))
    }, 5000)
  }, [])

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id))
  }

  const getIcon = (type: ToastType) => {
    switch (type) {
      case 'success':
        return <CheckCircleIcon className="w-6 h-6" />
      case 'error':
        return <ExclamationCircleIcon className="w-6 h-6" />
      case 'warning':
        return <ExclamationCircleIcon className="w-6 h-6" />
      default:
        return <InformationCircleIcon className="w-6 h-6" />
    }
  }

  const getStyles = (type: ToastType) => {
    switch (type) {
      case 'success':
        return 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white'
      case 'error':
        return 'bg-gradient-to-r from-red-500 to-pink-500 text-white'
      case 'warning':
        return 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
      default:
        return 'bg-gradient-to-r from-blue-500 to-purple-500 text-white'
    }
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast Container */}
      <div className="fixed top-20 right-4 z-[60] space-y-2 max-w-md">
        {toasts.map(toast => (
          <div
            key={toast.id}
            className={`
              ${getStyles(toast.type)}
              px-6 py-4 rounded-xl shadow-2xl
              flex items-center gap-3
              animate-slide-in-right
              backdrop-blur-sm
            `}
          >
            {getIcon(toast.type)}
            <p className="flex-1 font-medium">{toast.message}</p>
            <button
              onClick={() => removeToast(toast.id)}
              className="hover:bg-white/20 rounded-lg p-1 transition-colors"
            >
              <XMarkIcon className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>

      <style jsx>{`
        @keyframes slide-in-right {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in-right {
          animation: slide-in-right 0.3s ease-out;
        }
      `}</style>
    </ToastContext.Provider>
  )
}
