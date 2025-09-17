# Scroll Animation Pattern for Rallo Landing Page

## Core Principle
All animations are **scroll-based transformations** - they move forward on scroll down, reverse on scroll up. NO opacity animations, just pure movement.

## Standard Implementation

### 1. Hook Usage
```typescript
const { ref: scrollRef, progress } = useUnifiedScrollAnimation({
  animationDistance: 400,  // Pixels of scrolling to complete animation
  startOffset: 100,        // Start 100px before center
  debugName: "SectionName"
});
```

### 2. Animation Triggering
- **Trigger Point**: Center of viewport (not top!)
- **Start**: When element is `startOffset` pixels before viewport center
- **Complete**: After scrolling `animationDistance` pixels
- **Progress**: 0 to 1 based on scroll position

### 3. Standard Movements

#### Edge-to-Center Pattern (Most Common)
```typescript
// Text slides from left edge
const textMovement = -150 + (progress * 150);

// Image slides from right edge  
const imageMovement = 150 - (progress * 150);
```

#### Apply to Elements
```tsx
<div style={{ transform: `translateX(${textMovement}px)` }}>
  {/* Text content */}
</div>

<div style={{ transform: `translateX(${imageMovement}px)` }}>
  {/* Image content */}
</div>
```

## Key Values

- **Animation Distance**: 400-500px (standard)
- **Start Offset**: 100px (gives smooth entry)
- **Edge Movement**: 150px from each side
- **Center Movement**: 75px for subtle shifts

## How It Works

1. **Viewport Center Calculation**: 
   - Element center = `elementRect.top + (elementRect.height / 2)`
   - Distance from center = `viewportCenter - elementCenter`
   - Progress = `(distanceFromCenter + startOffset) / animationDistance`

2. **Movement Formula**:
   - Start position + (progress × total distance)
   - Left edge: `-150 + (progress * 150)` → moves right
   - Right edge: `150 - (progress * 150)` → moves left

## Example Section

```typescript
export const NewSection = () => {
  const { ref: scrollRef, progress } = useUnifiedScrollAnimation({
    animationDistance: 400,
    startOffset: 100,
    debugName: "NewSection"
  });
  
  // Elements slide 150px from edges to center
  const leftElement = -150 + (progress * 150);
  const rightElement = 150 - (progress * 150);
  
  return (
    <section ref={scrollRef}>
      <div style={{ transform: `translateX(${leftElement}px)` }}>
        Left content
      </div>
      <div style={{ transform: `translateX(${rightElement}px)` }}>
        Right content
      </div>
    </section>
  );
};
```

## Important Notes

- **No Opacity**: Pure position transforms only
- **Reversible**: Scrolling up reverses the animation
- **Performance**: Use `transform` not `left/top` for GPU acceleration
- **Consistency**: All sections use the same trigger mechanism