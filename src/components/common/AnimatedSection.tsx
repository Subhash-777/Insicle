import { ReactNode } from 'react'
import { motion } from 'motion/react'
import { fadeUp } from '@/animations/variants'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  delay?: number
  id?: string
  style?: React.CSSProperties
}

export default function AnimatedSection({ children, className, delay = 0, id, style }: AnimatedSectionProps) {
  // Respect prefers-reduced-motion
  const prefersReduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <motion.div
      id={id}
      variants={prefersReduced ? undefined : fadeUp}
      initial={prefersReduced ? undefined : 'hidden'}
      whileInView={prefersReduced ? undefined : 'visible'}
      viewport={{ once: true, amount: 0.1 }}
      transition={delay ? { delay, duration: 0.55, ease: [0.22, 1, 0.36, 1] } : undefined}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  )
}
