import type { TextProps } from './Text.types'

export default function Text({
  children,
  variant = 'body',
  className = '',
}: TextProps) {
  const variantStyles = {
    body: 'text-base text-gray-700 leading-relaxed',
    subheading: 'text-xl text-gray-600 leading-relaxed',
    description: 'text-lg text-gray-600 leading-relaxed',
    small: 'text-sm text-gray-600 leading-normal',
    caption: 'text-xs text-gray-500 leading-normal',
  }
  
  return (
    <p className={`${variantStyles[variant]} ${className}`}>
      {children}
    </p>
  )
}
