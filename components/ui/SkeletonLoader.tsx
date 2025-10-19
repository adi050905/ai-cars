export default function SkeletonCard() {
  return (
    <div className="glass-morphism rounded-2xl p-6 animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-48 bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl mb-4" />

      {/* Title skeleton */}
      <div className="h-6 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg mb-3 w-3/4" />

      {/* Text skeletons */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg w-full" />
        <div className="h-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg w-5/6" />
      </div>

      {/* Button skeleton */}
      <div className="h-10 bg-gradient-to-r from-slate-700 to-slate-600 rounded-xl w-full" />
    </div>
  )
}

export function SkeletonGrid({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <SkeletonCard key={i} />
      ))}
    </div>
  )
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
  return (
    <div className="space-y-3 animate-pulse">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className="h-4 bg-gradient-to-r from-slate-700 to-slate-600 rounded-lg"
          style={{ width: `${100 - i * 10}%` }}
        />
      ))}
    </div>
  )
}
