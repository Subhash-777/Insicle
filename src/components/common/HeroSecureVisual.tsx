import { motion } from 'motion/react'
import SlashMark from './SlashMark'

export default function HeroSecureVisual() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '540px',
        height: '460px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      aria-hidden="true"
    >
      {/* Background radial soft ambient glow (ink-900 / steel-500 blend, very faint) */}
      <div
        style={{
          position: 'absolute',
          width: '380px',
          height: '380px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(74, 123, 166, 0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Diagonal Brand Brush Slash cutting through the composition */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          right: '34%',
          top: '2%',
          width: '110px',
          height: '340px',
          pointerEvents: 'none',
          opacity: 0.55,
          transform: 'rotate(-4deg)',
          zIndex: 1,
        }}
      >
        <SlashMark width={110} height={340} color="var(--steel-300)" opacity={0.6} />
      </motion.div>

      {/* Main SVG Vector Composition: Shield, Lock, Graph Topology */}
      <svg
        viewBox="0 0 540 460"
        width="100%"
        height="100%"
        style={{ position: 'relative', zIndex: 2, overflow: 'visible' }}
      >
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4A7BA6" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#284058" stopOpacity="0.4" />
          </linearGradient>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#9FB3C8" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#9FB3C8" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#9FB3C8" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Concentric subtle radar rings */}
        <circle cx="270" cy="225" r="190" fill="none" stroke="rgba(159, 179, 200, 0.07)" strokeWidth="1" strokeDasharray="4 8" />
        <circle cx="270" cy="225" r="130" fill="none" stroke="rgba(159, 179, 200, 0.12)" strokeWidth="1" />
        <circle cx="270" cy="225" r="75" fill="none" stroke="rgba(74, 123, 166, 0.18)" strokeWidth="1" strokeDasharray="2 4" />

        {/* Outer Shield Geometry */}
        <path
          d="M 270 70 
             L 380 120 
             C 380 230, 340 310, 270 365 
             C 200 310, 160 230, 160 120 
             Z"
          fill="none"
          stroke="url(#shieldGrad)"
          strokeWidth="1.5"
        />

        {/* Inner Shield (Offset security boundary) */}
        <path
          d="M 270 95 
             L 360 136 
             C 360 225, 328 290, 270 338 
             C 212 290, 180 225, 180 136 
             Z"
          fill="none"
          stroke="rgba(159, 179, 200, 0.22)"
          strokeWidth="1"
          strokeDasharray="6 4"
        />

        {/* Network Constellation Graph Lines */}
        <g stroke="rgba(159, 179, 200, 0.28)" strokeWidth="1">
          {/* Top-left node connection */}
          <line x1="120" y1="160" x2="180" y2="136" />
          <line x1="120" y1="160" x2="160" y2="230" />
          {/* Top-right node connection */}
          <line x1="420" y1="150" x2="360" y2="136" />
          <line x1="420" y1="150" x2="380" y2="230" />
          {/* Cross connections */}
          <line x1="180" y1="136" x2="270" y2="195" />
          <line x1="360" y1="136" x2="270" y2="195" />
          <line x1="160" y1="230" x2="270" y2="255" />
          <line x1="380" y1="230" x2="270" y2="255" />
          {/* Bottom connections */}
          <line x1="270" y1="338" x2="270" y2="395" />
          <line x1="200" y1="360" x2="270" y2="365" />
          <line x1="340" y1="360" x2="270" y2="365" />
        </g>

        {/* Graph Nodes */}
        {/* Node 1: Left */}
        <circle cx="120" cy="160" r="3" fill="#9FB3C8" opacity="0.8" />
        <circle cx="120" cy="160" r="8" fill="none" stroke="#4A7BA6" strokeWidth="1" opacity="0.4" />

        {/* Node 2: Right */}
        <circle cx="420" cy="150" r="3" fill="#9FB3C8" opacity="0.8" />
        <circle cx="420" cy="150" r="8" fill="none" stroke="#4A7BA6" strokeWidth="1" opacity="0.4" />

        {/* Node 3: Bottom anchor */}
        <circle cx="270" cy="395" r="2.5" fill="#E8EEF4" opacity="0.9" />

        {/* Node 4 & 5: Lower flanks */}
        <circle cx="200" cy="360" r="2" fill="#9FB3C8" opacity="0.6" />
        <circle cx="340" cy="360" r="2" fill="#9FB3C8" opacity="0.6" />

        {/* Node 6 & 7: Shield shoulders */}
        <circle cx="180" cy="136" r="2.5" fill="#E8EEF4" opacity="0.75" />
        <circle cx="360" cy="136" r="2.5" fill="#E8EEF4" opacity="0.75" />

        {/* Central Verified Lock Node Container */}
        <g transform="translate(244, 198)">
          {/* Lock background glow pill */}
          <rect
            x="0"
            y="0"
            width="52"
            height="56"
            rx="8"
            fill="#1B2D40"
            stroke="#4A7BA6"
            strokeWidth="1.2"
          />
          {/* Shackle */}
          <path
            d="M 17 18 
               L 17 12 
               A 9 9 0 0 1 35 12 
               L 35 18"
            fill="none"
            stroke="#E8EEF4"
            strokeWidth="2"
            strokeLinecap="round"
          />
          {/* Keyhole */}
          <circle cx="26" cy="32" r="3" fill="#E8EEF4" />
          <path d="M 25 33 L 24 41 L 28 41 L 27 33 Z" fill="#E8EEF4" />
        </g>

        {/* Floating Technical Status Badges */}
        {/* Top Right: Protocol Spec */}
        <g transform="translate(345, 80)">
          <rect x="0" y="0" width="135" height="26" rx="4" fill="rgba(20, 33, 47, 0.85)" stroke="rgba(159, 179, 200, 0.3)" strokeWidth="1" />
          <circle cx="12" cy="13" r="3" fill="#1E7A4C" />
          <text x="22" y="17" fill="#E8EEF4" fontSize="9.5" fontFamily="var(--font-display)" fontWeight="500" letterSpacing="0.1em">
            ZERO-TRUST ARCH
          </text>
        </g>

        {/* Bottom Left: Verification Coordinates */}
        <g transform="translate(70, 275)">
          <rect x="0" y="0" width="145" height="26" rx="4" fill="rgba(20, 33, 47, 0.85)" stroke="rgba(159, 179, 200, 0.3)" strokeWidth="1" />
          <text x="10" y="17" fill="#9FB3C8" fontSize="9" fontFamily="var(--font-display)" fontWeight="500" letterSpacing="0.08em">
            NODE STATUS // VERIFIED
          </text>
        </g>
      </svg>
    </div>
  )
}

