import type { Metadata, Viewport } from 'next'
import { Inter, Orbitron } from 'next/font/google'
import './globals.css'
import Providers from '@/components/Providers'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ScrollProgress from '@/components/ui/ScrollProgress'
import BackToTop from '@/components/ui/BackToTop'
import PageLoader from '@/components/ui/PageLoader'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' })

export const metadata: Metadata = {
  title: 'FutureCars - AI-Powered Automotive Platform',
  description:
    'Experience the future of car shopping with AI, AR/VR, blockchain, and intelligent recommendations',
  keywords: ['cars', 'AI', 'electric vehicles', 'AR', 'VR', 'blockchain', 'automotive'],
  authors: [{ name: 'FutureCars Team' }],
  creator: 'FutureCars',
  publisher: 'FutureCars',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://futurecars.example.com',
    title: 'FutureCars - AI-Powered Automotive Platform',
    description: 'Experience the future of car shopping',
    siteName: 'FutureCars',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FutureCars Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FutureCars - AI-Powered Automotive Platform',
    description: 'Experience the future of car shopping',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#0ea5e9' },
    { media: '(prefers-color-scheme: dark)', color: '#0c4a6e' },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}>
        <PageLoader />
        <ScrollProgress />
        <Providers>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
        <BackToTop />
      </body>
    </html>
  )
}
