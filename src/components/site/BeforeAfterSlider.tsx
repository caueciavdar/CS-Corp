import { useRef, useState } from 'react'

type BeforeAfterSliderProps = { beforeLabel?: string; afterLabel?: string }

export default function BeforeAfterSlider({ beforeLabel = 'Before', afterLabel = 'After' }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)

  const updatePosition = (clientX: number) => {
    const bounds = sliderRef.current?.getBoundingClientRect()
    if (!bounds) return
    setPosition(Math.min(100, Math.max(0, ((clientX - bounds.left) / bounds.width) * 100)))
  }

  return (
    <div className="comparison" ref={sliderRef} onPointerMove={(event) => { if (event.buttons > 0) updatePosition(event.clientX) }}>
      <div className="comparison__panel comparison__panel--after"><span>{afterLabel}</span><strong>Real project photo<br />coming soon</strong></div>
      <div className="comparison__panel comparison__panel--before" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}><span>{beforeLabel}</span><strong>Real project photo<br />coming soon</strong></div>
      <button className="comparison__handle" style={{ left: `${position}%` }} type="button" aria-label="Compare before and after images" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(position)} onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); updatePosition(event.clientX) }} onPointerMove={(event) => { if (event.currentTarget.hasPointerCapture(event.pointerId)) updatePosition(event.clientX) }}>
        <span aria-hidden="true">↔</span>
      </button>
    </div>
  )
}
