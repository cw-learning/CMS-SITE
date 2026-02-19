export interface ResponsiveImageProps {
  src: string
  alt: string
  fill?: boolean
  priority?: boolean
  className?: string
  objectFit?: 'cover' | 'contain' | 'fill' | 'none'
  width?: number
  height?: number
}
