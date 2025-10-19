import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'monospace'],
      },
      colors: {
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        },
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          700: '#7e22ce',
          800: '#6b21a8',
          900: '#581c87',
          950: '#3b0764',
        },
        electric: {
          50: '#ecfeff',
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        'float-slow': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 4s ease-in-out 1s infinite',
        glow: 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'scale-bounce': 'scaleBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        shimmer: 'shimmer 2s linear infinite',
        'shimmer-slow': 'shimmer 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        gradient: 'gradientShift 3s ease infinite',
        'gradient-slow': 'gradientShift 6s ease infinite',
        'gradient-x': 'gradientX 15s ease infinite',
        'gradient-y': 'gradientY 15s ease infinite',
        'gradient-xy': 'gradientXY 15s ease infinite',
        tilt: 'tilt 10s infinite linear',
        'border-beam': 'borderBeam 3s linear infinite',
        'text-shimmer': 'textShimmer 3s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          from: { boxShadow: '0 0 10px #0ea5e9, 0 0 20px #0ea5e9, 0 0 30px #0ea5e9' },
          to: { boxShadow: '0 0 20px #d946ef, 0 0 30px #d946ef, 0 0 40px #d946ef' },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(59, 130, 246, 0.3)',
          },
          '50%': {
            boxShadow:
              '0 0 40px rgba(139, 92, 246, 0.8), 0 0 60px rgba(139, 92, 246, 0.5), 0 0 80px rgba(139, 92, 246, 0.3)',
          },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          from: { opacity: '0', transform: 'translateY(-30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          from: { opacity: '0', transform: 'translateX(30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          from: { opacity: '0', transform: 'scale(0.95)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        scaleBounce: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '50%': { transform: 'scale(1.05)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        gradientX: {
          '0%, 100%': { backgroundPosition: 'left center' },
          '50%': { backgroundPosition: 'right center' },
        },
        gradientY: {
          '0%, 100%': { backgroundPosition: 'center top' },
          '50%': { backgroundPosition: 'center bottom' },
        },
        gradientXY: {
          '0%, 100%': { backgroundPosition: 'left top' },
          '25%': { backgroundPosition: 'right top' },
          '50%': { backgroundPosition: 'right bottom' },
          '75%': { backgroundPosition: 'left bottom' },
        },
        tilt: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(1deg)' },
          '75%': { transform: 'rotate(-1deg)' },
        },
        borderBeam: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        textShimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-radial-at-t': 'radial-gradient(ellipse at top, var(--tw-gradient-stops))',
        'gradient-radial-at-b': 'radial-gradient(ellipse at bottom, var(--tw-gradient-stops))',
        'gradient-radial-at-c': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'shimmer-gradient':
          'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
        'shimmer-gradient-dark':
          'linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)',
        'glass-gradient':
          'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
        'mesh-gradient': `
          radial-gradient(at 40% 20%, rgba(59, 130, 246, 0.3) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.3) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(236, 72, 153, 0.3) 0px, transparent 50%),
          radial-gradient(at 80% 50%, rgba(14, 165, 233, 0.3) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(16, 185, 129, 0.3) 0px, transparent 50%),
          radial-gradient(at 80% 100%, rgba(168, 85, 247, 0.3) 0px, transparent 50%)
        `,
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(59, 130, 246, 0.5)',
        'glow-md': '0 0 20px rgba(59, 130, 246, 0.5), 0 0 40px rgba(139, 92, 246, 0.3)',
        'glow-lg': '0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(139, 92, 246, 0.4)',
        'glow-xl': '0 0 40px rgba(59, 130, 246, 0.7), 0 0 80px rgba(139, 92, 246, 0.5)',
        'glow-electric': '0 0 20px rgba(6, 182, 212, 0.6), 0 0 40px rgba(6, 182, 212, 0.4)',
        'glow-success': '0 0 20px rgba(16, 185, 129, 0.6), 0 0 40px rgba(16, 185, 129, 0.4)',
        'glow-purple': '0 0 20px rgba(168, 85, 247, 0.6), 0 0 40px rgba(168, 85, 247, 0.4)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
        '4xl': '0 45px 100px -20px rgba(0, 0, 0, 0.4)',
        'inner-glow': 'inset 0 0 20px rgba(59, 130, 246, 0.3)',
      },
      blur: {
        xs: '2px',
        '3xl': '64px',
        '4xl': '128px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '112': '28rem',
        '128': '32rem',
      },
      scale: {
        '102': '1.02',
        '103': '1.03',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
export default config
