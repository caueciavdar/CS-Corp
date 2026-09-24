import type { HTMLAttributes } from 'react'

type SectionProps = HTMLAttributes<HTMLElement> & {
  spacing?: 'default' | 'compact'
}

export default function Section({
  className = '',
  spacing = 'default',
  ...props
}: SectionProps) {
  const classes = ['section', spacing === 'compact' && 'section--compact', className]
    .filter(Boolean)
    .join(' ')

  return <section className={classes} {...props} />
}
