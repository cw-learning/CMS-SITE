import Image from 'next/image'
import type { ResponsiveImageProps } from './ResponsiveImage.types'

export default function ResponsiveImage({
  src,
  alt,
  fill = false,
  priority = false,
  className = '',
  objectFit = 'cover',
  width,
  height,
}: ResponsiveImageProps) {
  const objectFitClass = {
    cover: 'object-cover',
    contain: 'object-contain',
    fill: 'object-fill',
    none: 'object-none',
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        className={`${objectFitClass[objectFit]} ${className}`}
        priority={priority}
      />
    )
  }

  if (!width || !height) {
    console.warn('ResponsiveImage: width and height are required when fill is false')
    return null
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={`${objectFitClass[objectFit]} ${className}`}
      priority={priority}
    />
  )
}
