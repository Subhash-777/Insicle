interface SlashDividerProps {
  className?: string
  variant?: 'light' | 'dark'
}

export default function SlashDivider({ className = '', variant = 'light' }: SlashDividerProps) {
  const fillColor = variant === 'dark' ? '#14212F' : '#F7F8FA'

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '48px',
        overflow: 'hidden',
        lineHeight: 0,
        pointerEvents: 'none',
      }}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 48"
        preserveAspectRatio="none"
        style={{ width: '100%', height: '100%', display: 'block' }}
      >
        {/* Gentle diagonal paper cut transitioning between dark and light */}
        <polygon points="0,0 1200,48 0,48" fill={fillColor} />
      </svg>
    </div>
  )
}

