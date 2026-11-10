import { useEffect, useRef } from 'react'

interface Node {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  pulseRadius?: number
  isPulseNode?: boolean
  baseAlpha: number
}

export default function GraphBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth)
    let height = (canvas.height = canvas.parentElement?.clientHeight || window.innerHeight)

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = canvas.parentElement?.clientWidth || window.innerWidth
      height = canvas.height = canvas.parentElement?.clientHeight || window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Initialize nodes
    const nodeCount = Math.floor((width * height) / 18000)
    const nodes: Node[] = []

    for (let i = 0; i < Math.max(25, Math.min(nodeCount, 60)); i++) {
      const isPulse = i % 7 === 0 // A few nodes get a thin ring pulse
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
        vy: prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1.5,
        pulseRadius: isPulse ? 2 : undefined,
        isPulseNode: isPulse,
        baseAlpha: Math.random() * 0.3 + 0.3,
      })
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)

          if (dist < 130) {
            // Edges --steel-300 (#9FB3C8) at <= 0.18 opacity
            const alpha = (1 - dist / 130) * 0.16
            ctx.strokeStyle = `rgba(159, 179, 200, ${alpha})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i]

        if (!prefersReducedMotion) {
          node.x += node.vx
          node.y += node.vy

          if (node.x < 0 || node.x > width) node.vx *= -1
          if (node.y < 0 || node.y > height) node.vy *= -1
        }

        // Draw node core: white and --steel-300 at 0.5 opacity
        ctx.fillStyle = i % 2 === 0 ? `rgba(255, 255, 255, ${node.baseAlpha})` : `rgba(159, 179, 200, ${node.baseAlpha})`
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
        ctx.fill()

        // Thin ring pulse (zero-trust "verified" nod) in --steel-500 (#4A7BA6)
        if (node.isPulseNode) {
          if (!prefersReducedMotion && node.pulseRadius !== undefined) {
            node.pulseRadius += 0.15
            if (node.pulseRadius > 14) {
              node.pulseRadius = node.radius
            }
          }
          const ringRadius = node.pulseRadius || 6
          const ringAlpha = Math.max(0, 1 - ringRadius / 14) * 0.4
          ctx.strokeStyle = `rgba(74, 123, 166, ${ringAlpha})`
          ctx.lineWidth = 1
          ctx.beginPath()
          ctx.arc(node.x, node.y, ringRadius, 0, Math.PI * 2)
          ctx.stroke()
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render)
      }
    }

    render()

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationFrameId) cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden="true"
    />
  )
}

