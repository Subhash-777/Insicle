interface SlashMarkProps {
  className?: string
  width?: number
  height?: number
  color?: string
  opacity?: number
}

export default function SlashMark({
  className = '',
  width = 8,
  height = 22,
  color = 'var(--logo-steel)',
  opacity = 1,
}: SlashMarkProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 60 160"
      width={width}
      height={height}
      className={className}
      style={{ opacity, display: 'inline-block', verticalAlign: 'middle' }}
      aria-hidden="true"
    >
      <path
        d="M36 2 C37 2.5, 38.5 3, 39 5 C39.5 7, 39 9, 38 12
           C37 15, 36 18, 34.5 22 C33 26, 31 31, 29.5 36
           C27.5 42, 26 48, 24.5 54 C23 60, 21.5 67, 20 74
           C18.5 81, 17 88, 16 95 C15 102, 14 109, 13.5 115
           C13 121, 13 126, 13.5 130 C14 134, 15 138, 17 141
           C19 144, 21.5 146, 24 148 C26.5 150, 28 151, 28.5 152
           C29 153, 28 154, 26 154.5 C24 155, 21 155, 19 154.5
           C17 154, 16 152.5, 15.5 150.5 C15 148.5, 15.5 145, 16 141
           C16.5 137, 16.5 132, 16.5 127 C16.5 121, 17 114, 18 107
           C19 100, 20 93, 21.5 86 C23 79, 24.5 72, 26.5 65
           C28.5 58, 30 52, 32 46 C33.5 41, 34.5 36, 35.5 31
           C36.5 26.5, 37 21, 37 16 C37 12, 36.5 8, 36 5
           C35.5 3, 35 2, 36 2 Z"
        fill={color}
      />
    </svg>
  )
}

