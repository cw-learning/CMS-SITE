import type { HeadingProps } from './Heading.types'

export default function Heading({
  children,
  level = 'h2',
  size,
  className = '',
}: HeadingProps) {
  const Tag = level
  
  const sizeStyles = {
    h1: 'text-5xl md:text-6xl font-bold tracking-tight',
    h2: 'text-4xl md:text-5xl font-bold tracking-tight',
    h3: 'text-3xl font-bold tracking-tight',
    h4: 'text-2xl font-semibold tracking-tight',
    h5: 'text-xl font-semibold',
    h6: 'text-lg font-semibold',
  }
  
  const defaultSize = size ?? level
  
  return (
    <Tag className={`${sizeStyles[defaultSize]} ${className}`}>
      {children}
    </Tag>
  )
}
