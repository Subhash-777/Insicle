interface SlashMarkProps {
  className?: string
  width?: number
  height?: number
  color?: string
  opacity?: number
}

export default function SlashMark({
  className = '',
  width = 10,
  height = 24,
  color = 'var(--logo-steel)',
  opacity = 1,
}: SlashMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 96"
      width={width}
      height={height}
      className={className}
      style={{ opacity, display: 'inline-block', verticalAlign: 'middle', flexShrink: 0 }}
      aria-hidden="true"
    >
      <path
        d="M30.8 4.8 L33.4 1.6 L37.8 2.2 L38.4 5.4 L42.2 4.2 L44.4 6.2 L43.8 9.8 L45.4 12.6 L38.0 36.2 L29.5 59.5 L19.2 81.4 L17.2 83.2 L15.2 80.6 L11.6 88.6 L8.4 93.8 L6.6 92.2 L6.0 87.4 L3.4 90.0 L2.2 87.6 L7.8 68.2 L15.5 45.2 L24.2 21.6 Z"
        fill={color}
      />
    </svg>
  )
}
