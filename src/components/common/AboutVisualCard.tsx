import SlashMark from './SlashMark'

export default function AboutVisualCard() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '480px',
        background: 'linear-gradient(145deg, var(--surface) 0%, var(--steel-50) 100%)',
        border: '1px solid var(--steel-200)',
        borderRadius: 'var(--radius-card)',
        padding: '36px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-card)',
      }}
    >
      {/* Subtle Dot Grid Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, rgba(56, 80, 104, 0.12) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          pointerEvents: 'none',
        }}
      />

      {/* Decorative Technical Schematics */}
      <svg
        viewBox="0 0 400 300"
        style={{
          position: 'absolute',
          top: 20,
          right: 20,
          width: '75%',
          height: '75%',
          pointerEvents: 'none',
          opacity: 0.65,
        }}
        aria-hidden="true"
      >
        <circle cx="260" cy="140" r="110" fill="none" stroke="var(--steel-200)" strokeWidth="1" strokeDasharray="3 6" />
        <circle cx="260" cy="140" r="70" fill="none" stroke="var(--steel-300)" strokeWidth="1" />
        <circle cx="260" cy="140" r="30" fill="none" stroke="var(--steel-500)" strokeWidth="1.5" />
        
        {/* Schematic Crosshairs */}
        <line x1="120" y1="140" x2="380" y2="140" stroke="var(--steel-200)" strokeWidth="1" />
        <line x1="260" y1="10" x2="260" y2="270" stroke="var(--steel-200)" strokeWidth="1" />

        {/* Orbiting Nodes */}
        <circle cx="260" cy="70" r="3" fill="var(--logo-steel)" />
        <circle cx="330" cy="140" r="3" fill="var(--logo-steel)" />
        <circle cx="260" cy="210" r="3" fill="var(--steel-500)" />
        <circle cx="190" cy="140" r="3" fill="var(--steel-500)" />
      </svg>

      {/* Brand Brush Slash Watermark */}
      <div
        style={{
          position: 'absolute',
          right: '15%',
          top: '8%',
          width: '90px',
          height: '280px',
          pointerEvents: 'none',
          opacity: 0.22,
          transform: 'rotate(-4deg)',
        }}
      >
        <SlashMark width={90} height={280} color="var(--logo-steel)" />
      </div>

      {/* Top Technical Metadata */}
      <div style={{ position: 'relative', zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: 'var(--logo-steel)',
          }}
        >
          FOUNDATIONAL PHILOSOPHY
        </span>
        <span
          style={{
            fontSize: '11px',
            fontFamily: 'var(--font-display)',
            color: 'var(--muted)',
            letterSpacing: '0.08em',
          }}
        >
          REF // INS-2026
        </span>
      </div>

      {/* Bottom Executive Quote Card */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          background: 'var(--surface)',
          border: '1px solid var(--steel-200)',
          borderRadius: 'var(--radius-sm)',
          padding: '24px 28px',
          boxShadow: '0 8px 24px rgba(20, 33, 47, 0.06)',
          marginTop: 'auto',
        }}
      >
        <p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '17px',
            fontWeight: 500,
            lineHeight: 1.45,
            color: 'var(--ink-800)',
            marginBottom: '14px',
            letterSpacing: '-0.01em',
          }}
        >
          &ldquo;Connecting technology with real business requirements through thoughtful engineering.&rdquo;
        </p>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div
            style={{
              width: '28px',
              height: '2px',
              backgroundColor: 'var(--logo-steel)',
            }}
          />
          <span
            style={{
              fontSize: '13px',
              fontWeight: 500,
              fontFamily: 'var(--font-body)',
              color: 'var(--muted)',
            }}
          >
            <strong style={{ color: 'var(--ink-800)' }}>Dr. S. Selvi</strong>, Proprietor, INSICLE
          </span>
        </div>
      </div>
    </div>
  )
}

