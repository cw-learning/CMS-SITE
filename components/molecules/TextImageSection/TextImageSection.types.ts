import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface TextImageSectionProps {
  _key: string
  _type: 'textImageSection'
  text: string
  image?: SanityImageSource
  alignment: 'left' | 'right'
}
