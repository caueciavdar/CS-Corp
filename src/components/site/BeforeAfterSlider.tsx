import { useRef, useState } from 'react'

export type BeforeAfterSliderProps = {
  beforeSrc?: string
  afterSrc?: string
  beforeAlt?: string
  afterAlt?: string
  beforeLabel?: string
  afterLabel?: string
}

const clamp = (value: number) => Math.min(100, Math.max(0, value))

export default function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt = 'Before project photo',
  afterAlt = 'After project photo',
  beforeLabel = 'Before',
  afterLabel = 'After',
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)

  const updatePosition = (clientX: number) => {
    const bounds = sliderRef.current?.getBoundingClientRect()
    if (!bounds) return
    setPosition(clamp(((clientX - bounds.left) / bounds.width) * 100))
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return

    event.preventDefault()
    setPosition((current) => clamp(current + (event.key === 'ArrowRight' ? 1 : -1)))
  }

  return (
    <div className="comparison" ref={sliderRef} onPointerMove={(event) => { if (event.buttons > 0) updatePosition(event.clientX) }}>
      <div className="comparison__panel comparison__panel--after">
        {afterSrc ? <img src={afterSrc} alt={afterAlt} draggable="false" decoding="async" fetchPriority="high" /> : <div className="comparison__placeholder" aria-hidden="true" />}
        <span>{afterLabel}</span>
      </div>
      <div className="comparison__panel comparison__panel--before" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        {beforeSrc ? <img src={beforeSrc} alt={beforeAlt} draggable="false" decoding="async" fetchPriority="high" /> : <div className="comparison__placeholder" aria-hidden="true" />}
        <span>{beforeLabel}</span>
      </div>
      <button className="comparison__handle" style={{ left: `${position}%` }} type="button" role="slider" aria-label="Compare before and after images" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(position)} aria-valuetext={`${Math.round(position)}% after image revealed`} onKeyDown={handleKeyDown} onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); updatePosition(event.clientX) }} onPointerMove={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) updatePosition(event.clientX) }}>
        <span aria-hidden="true">↔</span>
      </button>
    </div>
  )
}
