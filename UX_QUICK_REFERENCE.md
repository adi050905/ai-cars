# 🎯 UX Quick Reference Card

## 🚀 Components

### ScrollProgress

```tsx
// Auto-imported in layout.tsx
// Shows at top of screen automatically
```

### BackToTop

```tsx
// Auto-imported in layout.tsx
// Shows after 500px scroll
```

### PageLoader

```tsx
// Auto-imported in layout.tsx
// Shows for 1.5s on initial load
```

### SectionWrapper

```tsx
<SectionWrapper gradient="blue" pattern="dots">
  <YourContent />
</SectionWrapper>

// Gradients: blue | purple | pink | green | none
// Patterns: dots | grid | none
```

### Toast Notifications

```tsx
const { showToast } = useToast()

showToast('Success!', 'success') // ✅ Green
showToast('Error!', 'error') // ❌ Red
showToast('Warning!', 'warning') // ⚠️ Orange
showToast('Info!', 'info') // ℹ️ Blue
```

### SkeletonLoader

```tsx
import { SkeletonGrid, SkeletonText, SkeletonCard } from '@/components/ui/SkeletonLoader'

{
  loading ? <SkeletonGrid count={6} /> : <Content />
}
{
  loading ? <SkeletonText lines={3} /> : <Text />
}
```

### ActionCard

```tsx
<ActionCard
  title="Title"
  description="Description"
  icon={<Icon />}
  href="/path"
  variant="primary" // primary | secondary | electric | success
/>
```

### LoadingSpinner

```tsx
import LoadingSpinner, { FullPageLoader } from '@/components/ui/LoadingSpinner'

<LoadingSpinner size="md" variant="primary" text="Loading..." />
<FullPageLoader text="Please wait..." />

// Sizes: sm | md | lg | xl
// Variants: primary | electric | success
```

---

## 🎨 CSS Classes

### Buttons

```css
.btn-primary      /* Blue → Purple → Pink gradient */
/* Blue → Purple → Pink gradient */
.btn-secondary    /* Outlined with hover */
.btn-electric     /* Cyan → Blue gradient */
.btn-success; /* Emerald → Teal gradient */
```

### Cards

```css
.glass-morphism         /* Dark glass effect */
/* Dark glass effect */
.glass-morphism-hover   /* With enhanced hover */
.card-hover            /* Scale + shadow hover */
.card-3d               /* 3D transform hover */
.floating-card; /* With float animation */
```

### Text

```css
.gradient-text          /* Standard gradient */
/* Standard gradient */
.gradient-text-electric /* Electric blue gradient */
.gradient-text-success; /* Green gradient */
```

### Badges

```css
.badge                 /* Base badge */
/* Base badge */
.badge-primary         /* Blue-purple */
.badge-success         /* Green */
.badge-warning         /* Orange */
.badge-glow; /* Pulsing glow */
```

### Effects

```css
.neon-border           /* Animated gradient border */
/* Animated gradient border */
.neon-glow            /* Blue-purple glow */
.neon-glow-green      /* Green glow */
.shimmer              /* Shimmer overlay */
.ripple-effect; /* Click ripple */
```

### Backgrounds

```css
.bg-gradient-mesh      /* Multi-color gradients */
/* Multi-color gradients */
.bg-pattern-dots       /* Dot pattern */
.bg-pattern-grid; /* Grid pattern */
```

---

## 🎭 Animations

### Entrance

```css
.animate-fade-in          /* Fade + upward slide */
/* Fade + upward slide */
.animate-fade-in-up       /* Larger upward */
.animate-scale-in         /* Scale effect */
.animate-slide-in-left    /* Slide from left */
.animate-slide-in-right   /* Slide from right */
.card-entrance; /* Card entrance */
```

### Continuous

```css
.animate-float           /* Gentle floating */
/* Gentle floating */
.animate-pulse           /* Pulse effect */
.animate-spin            /* Rotation */
.pulse-glow             /* Pulsing glow */
.animate-gradient; /* Gradient shift */
```

### Stagger

```css
.stagger-1   /* 0.1s delay */
/* 0.1s delay */
.stagger-2   /* 0.2s delay */
.stagger-3   /* 0.3s delay */
.stagger-4   /* 0.4s delay */
.stagger-5   /* 0.5s delay */
.stagger-6; /* 0.6s delay */
```

**Example**:

```tsx
<div className="animate-fade-in stagger-1">Item 1</div>
<div className="animate-fade-in stagger-2">Item 2</div>
<div className="animate-fade-in stagger-3">Item 3</div>
```

---

## 🎯 Common Patterns

### Loading State

```tsx
{
  isLoading ? <SkeletonGrid count={6} /> : <DataGrid data={data} />
}
```

### Action Feedback

```tsx
const handleSubmit = async () => {
  try {
    await saveData()
    showToast('Saved successfully!', 'success')
  } catch (error) {
    showToast('Failed to save', 'error')
  }
}
```

### Animated Section

```tsx
<SectionWrapper gradient="blue" pattern="dots">
  <div className="container mx-auto">
    <h2 className="gradient-text mb-8">Section Title</h2>
    <div className="grid gap-6">
      {items.map((item, i) => (
        <div
          key={item.id}
          className={`card-hover glass-morphism p-6 rounded-2xl card-entrance stagger-${i + 1}`}
        >
          {item.content}
        </div>
      ))}
    </div>
  </div>
</SectionWrapper>
```

### Premium Button

```tsx
<button className="btn-primary ripple-effect">Get Started</button>
```

### Premium Card

```tsx
<div className="glass-morphism-hover card-hover rounded-2xl p-6 card-entrance">
  <h3 className="gradient-text-electric mb-2">Card Title</h3>
  <p className="text-slate-300">Card content</p>
</div>
```

---

## 🎨 Color Palette

### Primary Gradients

- **Blue → Purple → Pink**: `from-blue-600 via-purple-600 to-pink-600`
- **Cyan → Blue**: `from-cyan-500 to-blue-600`
- **Emerald → Teal**: `from-emerald-500 to-teal-500`
- **Amber → Orange**: `from-amber-500 to-orange-500`

### Variables

```css
--ev-blue: #0ea5e9
--ev-purple: #a855f7
--ev-green: #10b981
--ev-cyan: #06b6d4
```

---

## 📱 Responsive Classes

### Breakpoints

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up
- `xl:` - 1280px and up
- `2xl:` - 1536px and up

### Common Patterns

```tsx
className="
  text-2xl md:text-4xl lg:text-5xl
  px-4 md:px-8 lg:px-12
  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
"
```

---

## ⚡ Performance Tips

1. Use `loading="lazy"` on images
2. Use dynamic imports for below-fold content
3. Prefer CSS animations over JS
4. Use Intersection Observer for scroll triggers
5. Debounce scroll/resize handlers

---

## ♿ Accessibility

### Focus States

All interactive elements have visible focus rings:

```css
*:focus-visible {
  @apply ring-2 ring-blue-500 dark:ring-purple-500 ring-offset-2;
}
```

### Keyboard Navigation

- Tab: Move forward
- Shift+Tab: Move backward
- Enter: Activate
- Escape: Close modals

### Screen Readers

- Use semantic HTML
- Add ARIA labels
- Include alt text
- Use descriptive links

---

## 🎪 Special Effects

### Glassmorphism

```tsx
<div className="glass-morphism backdrop-blur-xl rounded-2xl p-6">Content</div>
```

### Neon Glow

```tsx
<div className="neon-border neon-glow p-6 rounded-xl">Content</div>
```

### Floating Animation

```tsx
<div className="floating-card p-6 rounded-2xl">Content</div>
```

### 3D Card

```tsx
<div className="card-3d glass-morphism p-6 rounded-2xl">Content</div>
```

---

## 📚 Documentation

Full guides available:

- `UX_ENHANCEMENTS.md` - Complete guide
- `UX_IMPROVEMENTS.md` - Summary
- `UX_COMPLETE_SUMMARY.md` - Implementation details

---

**Quick Start**: Just copy and paste the examples above!

**Status**: ✅ Production Ready
**Last Updated**: October 2025
