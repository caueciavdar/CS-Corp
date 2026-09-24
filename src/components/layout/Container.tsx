import type { HTMLAttributes } from 'react'

type ContainerProps = HTMLAttributes<HTMLDivElement> & {
  size?: 'default' | 'content'
}

export default function Container({
  className = '',
  size = 'default',
  ...props
}: ContainerProps) {
  const classes = ['container', size === 'content' && 'container--content', className]
    .filter(Boolean)
    .join(' ')

  return <div className={classes} {...props} />
}
