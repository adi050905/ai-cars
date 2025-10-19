import Link from 'next/link'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

interface ActionCardProps {
  title: string
  description: string
  icon?: React.ReactNode
  href?: string
  onClick?: () => void
  variant?: 'primary' | 'secondary' | 'electric' | 'success'
  className?: string
}

export default function ActionCard({
  title,
  description,
  icon,
  href,
  onClick,
  variant = 'primary',
  className = '',
}: ActionCardProps) {
  const variants = {
    primary: 'from-blue-600 to-purple-600 hover:shadow-purple-500/50',
    secondary: 'from-purple-600 to-pink-600 hover:shadow-pink-500/50',
    electric: 'from-cyan-500 to-blue-600 hover:shadow-blue-500/50',
    success: 'from-emerald-500 to-teal-500 hover:shadow-teal-500/50',
  }

  const content = (
    <>
      <div className="flex items-start gap-4 mb-4">
        {icon && (
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center">
            {icon}
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-white/80 text-sm leading-relaxed">{description}</p>
        </div>
      </div>

      <div className="flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
        <span>Learn more</span>
        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </div>
    </>
  )

  const baseClasses = `
    group relative overflow-hidden
    bg-gradient-to-br ${variants[variant]}
    rounded-2xl p-6
    shadow-xl hover:shadow-2xl
    hover:scale-[1.02] active:scale-[0.98]
    transition-all duration-300 ease-out
    cursor-pointer
    ${className}
  `

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
        {/* Shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 -translate-x-full" />
      </Link>
    )
  }

  return (
    <button onClick={onClick} className={baseClasses}>
      {content}
      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 group-hover:translate-x-full transition-all duration-700 -translate-x-full" />
    </button>
  )
}
