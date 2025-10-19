interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'primary' | 'electric' | 'success'
  text?: string
}

export default function LoadingSpinner({
  size = 'md',
  variant = 'primary',
  text,
}: LoadingSpinnerProps) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-20 h-20',
  }

  const variants = {
    primary: 'border-t-blue-500 border-r-purple-500',
    electric: 'border-t-cyan-500 border-r-blue-500',
    success: 'border-t-emerald-500 border-r-teal-500',
  }

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div className="relative">
        {/* Outer ring */}
        <div className="absolute inset-0 border-4 border-slate-700/20 rounded-full" />

        {/* Spinning gradient ring */}
        <div
          className={`
            ${sizes[size]}
            border-4 border-transparent rounded-full
            ${variants[variant]}
            animate-spin
          `}
          style={{
            borderLeftColor: 'transparent',
            borderBottomColor: 'transparent',
          }}
        />
      </div>

      {text && <p className="text-sm text-slate-400 dark:text-slate-500 animate-pulse">{text}</p>}
    </div>
  )
}

export function FullPageLoader({ text = 'Loading...' }: { text?: string }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/80 backdrop-blur-sm">
      <LoadingSpinner size="xl" text={text} />
    </div>
  )
}
