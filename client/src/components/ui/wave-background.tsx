import { useRef, useEffect } from "react"
import { cn } from "@/lib/utils"

interface WavesProps {
  /**
   * Color of the wave lines
   */
  lineColor?: string
  /**
   * Background color of the container
   */
  backgroundColor?: string
  waveSpeedX?: number
  waveSpeedY?: number
  waveAmpX?: number
  waveAmpY?: number
  xGap?: number
  yGap?: number
  friction?: number
  tension?: number
  maxCursorMove?: number
  className?: string
}

class Grad {
  x: number
  y: number
  z: number
  
  constructor(x: number, y: number, z: number) {
    this.x = x
    this.y = y
    this.z = z
  }
  dot2(x: number, y: number) {
    return this.x * x + this.y * y
  }
}

class Noise {
  grad3: Grad[]
  p: number[]
  perm: number[]
  gradP: Grad[]
  
  constructor(seed = 0) {
    this.grad3 = [
      new Grad(1, 1, 0),
      new Grad(-1, 1, 0),
      new Grad(1, -1, 0),
      new Grad(-1, -1, 0),
      new Grad(1, 0, 1),
      new Grad(-1, 0, 1),
      new Grad(1, 0, -1),
      new Grad(-1, 0, -1),
      new Grad(0, 1, 1),
      new Grad(0, -1, 1),
      new Grad(0, 1, -1),
      new Grad(0, -1, -1),
    ]
    this.p = [
      151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225,
      140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247,
      120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177,
      33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165,
      71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211,
      133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25,
      63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
      135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217,
      226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206,
      59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248,
      152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22,
      39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218,
      246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241,
      81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157,
      184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93,
      222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180,
    ]
    this.perm = new Array(512)
    this.gradP = new Array(512)
    this.seed(seed)
  }
  seed(seed: number) {
    if (seed > 0 && seed < 1) seed *= 65536
    seed = Math.floor(seed)
    if (seed < 256) seed |= seed << 8
    for (let i = 0; i < 256; i++) {
      let v = i & 1 ? this.p[i] ^ (seed & 255) : this.p[i] ^ ((seed >> 8) & 255)
      this.perm[i] = this.perm[i + 256] = v
      this.gradP[i] = this.gradP[i + 256] = this.grad3[v % 12]
    }
  }
  fade(t: number) {
    return t * t * t * (t * (t * 6 - 15) + 10)
  }
  lerp(a: number, b: number, t: number) {
    return (1 - t) * a + t * b
  }
  perlin2(x: number, y: number) {
    let X = Math.floor(x),
      Y = Math.floor(y)
    x -= X
    y -= Y
    X &= 255
    Y &= 255
    const n00 = this.gradP[X + this.perm[Y]].dot2(x, y)
    const n01 = this.gradP[X + this.perm[Y + 1]].dot2(x, y - 1)
    const n10 = this.gradP[X + 1 + this.perm[Y]].dot2(x - 1, y)
    const n11 = this.gradP[X + 1 + this.perm[Y + 1]].dot2(x - 1, y - 1)
    const u = this.fade(x)
    return this.lerp(
      this.lerp(n00, n10, u),
      this.lerp(n01, n11, u),
      this.fade(y),
    )
  }
}

export function Waves({
  lineColor = "rgba(0, 0, 0, 0.17)", // Black at 17% opacity as requested
  backgroundColor = "transparent",
  waveSpeedX = 0.0125,
  waveSpeedY = 0.005,
  waveAmpX = 32,
  waveAmpY = 16,
  xGap = 10,
  yGap = 32,
  friction = 0.925,
  tension = 0.005,
  maxCursorMove = 100,
  className,
  onRef,
  isOverlay = false,
  sharedMouseRef,
}: WavesProps & { 
  onRef?: (api: { createRipple: (x: number, y: number) => void }) => void;
  isOverlay?: boolean;
  sharedMouseRef?: React.MutableRefObject<{ x: number; y: number } | null>;
}) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null)
  const boundingRef = useRef({ width: 0, height: 0, left: 0, top: 0 })
  const noiseRef = useRef(new Noise(Math.random()))
  const linesRef = useRef<any[]>([])
  
  // Use shared mouse ref if provided (for twin waves), otherwise create local one
  const localMouseRef = useRef({
    x: -10,
    y: 0,
    lx: 0,
    ly: 0,
    sx: 0,
    sy: 0,
    v: 0,
    vs: 0,
    a: 0,
    set: false,
  })
  const mouseRef = sharedMouseRef ? sharedMouseRef : localMouseRef
  
  const animationRef = useRef<number>()
  const updateMouseRef = useRef<((x: number, y: number) => void) | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return
    
    ctxRef.current = canvas.getContext("2d")

    function setSize() {
      if (!container || !canvas) return
      boundingRef.current = container.getBoundingClientRect()
      canvas.width = boundingRef.current.width
      canvas.height = boundingRef.current.height
    }

    function setLines() {
      const { width, height } = boundingRef.current
      linesRef.current = []
      const oWidth = width + 200,
        oHeight = height + 30
      const totalLines = Math.ceil(oWidth / xGap)
      const totalPoints = Math.ceil(oHeight / yGap)
      const xStart = (width - xGap * totalLines) / 2
      const yStart = (height - yGap * totalPoints) / 2
      for (let i = 0; i <= totalLines; i++) {
        const pts = []
        for (let j = 0; j <= totalPoints; j++) {
          pts.push({
            x: xStart + xGap * i,
            y: yStart + yGap * j,
            wave: { x: 0, y: 0 },
            cursor: { x: 0, y: 0, vx: 0, vy: 0 },
          })
        }
        linesRef.current.push(pts)
      }
    }

    function movePoints(time: number) {
      const lines = linesRef.current
      const mouse = mouseRef.current
      const noise = noiseRef.current
      lines.forEach((pts) => {
        pts.forEach((p: any) => {
          const move =
            noise.perlin2(
              (p.x + time * waveSpeedX) * 0.002,
              (p.y + time * waveSpeedY) * 0.0015,
            ) * 12
          p.wave.x = Math.cos(move) * waveAmpX
          p.wave.y = Math.sin(move) * waveAmpY

          const dx = p.x - mouse.sx,
            dy = p.y - mouse.sy
          const dist = Math.hypot(dx, dy),
            l = Math.max(175, mouse.vs)
          if (dist < l) {
            const s = 1 - dist / l
            const f = Math.cos(dist * 0.001) * s
            p.cursor.vx += Math.cos(mouse.a) * f * l * mouse.vs * 0.00065
            p.cursor.vy += Math.sin(mouse.a) * f * l * mouse.vs * 0.00065
          }

          p.cursor.vx += (0 - p.cursor.x) * tension
          p.cursor.vy += (0 - p.cursor.y) * tension
          p.cursor.vx *= friction
          p.cursor.vy *= friction
          p.cursor.x += p.cursor.vx * 2
          p.cursor.y += p.cursor.vy * 2

          p.cursor.x = Math.min(
            maxCursorMove,
            Math.max(-maxCursorMove, p.cursor.x),
          )
          p.cursor.y = Math.min(
            maxCursorMove,
            Math.max(-maxCursorMove, p.cursor.y),
          )
        })
      })
    }

    function moved(point: any, withCursor = true) {
      const x = point.x + point.wave.x + (withCursor ? point.cursor.x : 0)
      const y = point.y + point.wave.y + (withCursor ? point.cursor.y : 0)
      return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10 }
    }

    function drawLines() {
      const { width, height } = boundingRef.current
      const ctx = ctxRef.current
      if (!ctx) return
      
      ctx.clearRect(0, 0, width, height)
      
      // Only draw lines if not an overlay (overlay is invisible)
      if (!isOverlay) {
        ctx.beginPath()
        ctx.strokeStyle = lineColor
        linesRef.current.forEach((points) => {
          let p1 = moved(points[0], false)
          ctx.moveTo(p1.x, p1.y)
          points.forEach((p, idx) => {
            const isLast = idx === points.length - 1
            p1 = moved(p, !isLast)
            const p2 = moved(
              points[idx + 1] || points[points.length - 1],
              !isLast,
            )
            ctx.lineTo(p1.x, p1.y)
            if (isLast) ctx.moveTo(p2.x, p2.y)
          })
        })
        ctx.stroke()
      }
    }

    function tick(t: number) {
      const mouse = mouseRef.current
      if (!mouse) {
        console.error('❌ No mouse ref in tick!');
        return;
      }

      mouse.sx += (mouse.x - mouse.sx) * 0.1
      mouse.sy += (mouse.y - mouse.sy) * 0.1

      const dx = mouse.x - mouse.lx,
        dy = mouse.y - mouse.ly
      const d = Math.hypot(dx, dy)
      mouse.v = d
      mouse.vs += (d - mouse.vs) * 0.1
      mouse.vs = Math.min(100, mouse.vs)
      mouse.lx = mouse.x
      mouse.ly = mouse.y
      mouse.a = Math.atan2(dy, dx)

      // Debug: Log significant mouse movement
      if (d > 2) { // Lower threshold to see any movement
        console.log(`🌊 Wave ${isOverlay ? 'OVERLAY' : 'VISIBLE'} detecting movement:`, {
          velocity: d.toFixed(1),
          mouseX: mouse.x.toFixed(0),
          mouseY: mouse.y.toFixed(0),
          smoothX: mouse.sx.toFixed(0),
          smoothY: mouse.sy.toFixed(0),
          isShared: !!sharedMouseRef
        });
      }

      if (container) {
        container.style.setProperty("--x", `${mouse.sx}px`)
        container.style.setProperty("--y", `${mouse.sy}px`)
      }

      movePoints(t)
      drawLines()
      animationRef.current = requestAnimationFrame(tick)
    }

    function onResize() {
      setSize()
      setLines()
    }
    function onMouseMove(e: MouseEvent) {
      updateMouse(e.clientX, e.clientY)
    }
    function onTouchMove(e: TouchEvent) {
      e.preventDefault()
      const touch = e.touches[0]
      updateMouse(touch.clientX, touch.clientY)
    }
    function updateMouse(x: number, y: number) {
      const mouse = mouseRef.current
      if (!mouse) {
        console.error('❌ No mouse ref available!');
        return;
      }
      
      const b = boundingRef.current
      
      // Calculate canvas coordinates
      mouse.x = x - b.left
      mouse.y = y - b.top
      
      // Debug logging
      if (Math.random() < 0.05) { // Log 5% of updates
        console.log('📍 Mouse position updated:', {
          isOverlay,
          canvasX: mouse.x,
          canvasY: mouse.y,
          boundingLeft: b.left,
          boundingTop: b.top,
          isShared: !!sharedMouseRef
        });
      }
      
      if (!mouse.set) {
        mouse.sx = mouse.x
        mouse.sy = mouse.y
        mouse.lx = mouse.x
        mouse.ly = mouse.y
        mouse.set = true
      }
    }
    
    // Store updateMouse in ref so it can be accessed from outside useEffect
    updateMouseRef.current = updateMouse

    // Create ripple effect at specific position
    function createRipple(x: number, y: number) {
      const b = boundingRef.current
      const lines = linesRef.current
      
      // Convert page coordinates to canvas coordinates
      const canvasX = x - b.left
      const canvasY = y - b.top
      
      // Create disturbance at this position
      lines.forEach((pts) => {
        pts.forEach((p: any) => {
          const dx = p.x - canvasX
          const dy = p.y - canvasY
          const dist = Math.hypot(dx, dy)
          
          // Create ripple effect within radius
          if (dist < 200) {
            const force = (1 - dist / 200) * 50
            const angle = Math.atan2(dy, dx)
            p.cursor.vx += Math.cos(angle) * force * 0.5
            p.cursor.vy += Math.sin(angle) * force * 0.5
          }
        })
      })
    }

    // Expose API via ref callback
    if (onRef) {
      onRef({ createRipple })
    }

    setSize()
    setLines()
    animationRef.current = requestAnimationFrame(tick)
    window.addEventListener("resize", onResize)
    
    // Only add global mouse listeners for the overlay
    if (isOverlay) {
      window.addEventListener("mousemove", onMouseMove)
      window.addEventListener("touchmove", onTouchMove, { passive: false })
      console.log('🎯 Overlay: Added global mouse listeners');
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      window.removeEventListener("resize", onResize)
      if (isOverlay) {
        window.removeEventListener("mousemove", onMouseMove)
        window.removeEventListener("touchmove", onTouchMove)
      }
    }
  }, [
    lineColor,
    backgroundColor,
    waveSpeedX,
    waveSpeedY,
    waveAmpX,
    waveAmpY,
    friction,
    tension,
    maxCursorMove,
    xGap,
    yGap,
    isOverlay,
  ])

  // Debug: Log component mount
  useEffect(() => {
    console.log(`🎯 Wave Component Mounted:`, {
      isOverlay,
      hasSharedRef: !!sharedMouseRef,
      className
    });
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={(e) => {
        // Only the overlay should capture events
        if (isOverlay && updateMouseRef.current) {
          updateMouseRef.current(e.clientX, e.clientY);
        }
      }}
      onMouseEnter={(e) => {
        if (isOverlay) {
          console.log('✅ Mouse entered overlay!');
        }
      }}
      onMouseLeave={(e) => {
        if (isOverlay) {
          console.log('❌ Mouse left overlay!');
        }
      }}
      style={{
        backgroundColor: isOverlay ? 'transparent' : backgroundColor,
        pointerEvents: isOverlay ? 'auto' : 'none', // Overlay captures events, visible doesn't
        // @ts-ignore - CSS custom properties
        "--x": "-0.5rem",
        "--y": "50%",
      }}
      className={cn(
        "absolute top-0 left-0 w-full h-full overflow-hidden",
        className,
      )}
    >
      {/* Only show cursor dot if not an overlay */}
      {!isOverlay && (
        <div
          className={cn(
            "absolute top-0 left-0 rounded-full",
            "w-2 h-2 bg-black/10",
          )}
          style={{
            transform:
              "translate3d(calc(var(--x) - 50%), calc(var(--y) - 50%), 0)",
            willChange: "transform",
          }}
        />
      )}
      <canvas ref={canvasRef} className="block w-full h-full" />
    </div>
  )
}