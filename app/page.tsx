import dynamic from 'next/dynamic'
import Hero from '@/components/home/Hero'
import FeaturedCars from '@/components/home/FeaturedCars'
import SectionWrapper from '@/components/ui/SectionWrapper'

// Lazy load components below the fold for better initial page load
const AIFeatures = dynamic(() => import('@/components/home/AIFeatures'), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl" />
  ),
})
const ARVRShowcase = dynamic(() => import('@/components/home/ARVRShowcase'), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl" />
  ),
})
const TrendingDeals = dynamic(() => import('@/components/home/TrendingDeals'), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl" />
  ),
})
const EVDashboard = dynamic(() => import('@/components/home/EVDashboard'), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl" />
  ),
})
const CommunityHighlights = dynamic(() => import('@/components/home/CommunityHighlights'), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 rounded-2xl" />
  ),
})
const NewsAndBlogs = dynamic(() => import('@/components/home/NewsAndBlogs'), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl" />
  ),
})
const Statistics = dynamic(() => import('@/components/home/Statistics'), {
  loading: () => (
    <div className="h-96 animate-pulse bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl" />
  ),
})

export default function Home() {
  return (
    <div className="relative">
      {/* Hero Section with immersive 3D background */}
      <Hero />

      {/* AI-Powered Personalized Recommendations */}
      <SectionWrapper>
        <FeaturedCars />
      </SectionWrapper>

      {/* AI Features Showcase */}
      <SectionWrapper gradient="blue" pattern="dots">
        <AIFeatures />
      </SectionWrapper>

      {/* AR/VR Experience */}
      <SectionWrapper gradient="purple">
        <ARVRShowcase />
      </SectionWrapper>

      {/* Trending Deals & Predictions */}
      <SectionWrapper gradient="pink" pattern="grid">
        <TrendingDeals />
      </SectionWrapper>

      {/* EV Dashboard */}
      <SectionWrapper gradient="green">
        <EVDashboard />
      </SectionWrapper>

      {/* Platform Statistics */}
      <SectionWrapper pattern="dots">
        <Statistics />
      </SectionWrapper>

      {/* Community Highlights */}
      <SectionWrapper gradient="blue">
        <CommunityHighlights />
      </SectionWrapper>

      {/* AI-Generated News & Blogs */}
      <SectionWrapper className="pb-32">
        <NewsAndBlogs />
      </SectionWrapper>
    </div>
  )
}
