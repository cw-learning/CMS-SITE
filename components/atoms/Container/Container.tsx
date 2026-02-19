import type { ContainerProps } from './Container.types'

export default function Container({
  children,
  maxWidth = 'default',
  className = '',
}: ContainerProps) {
  const maxWidthStyles = {
    small: 'max-w-4xl',
    default: 'max-w-6xl',
    large: 'max-w-7xl',
    full: 'max-w-full',
  }
  
  return (
    <div className={`mx-auto ${maxWidthStyles[maxWidth]} ${className}`}>
      {children}
    </div>
  )
}
