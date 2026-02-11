import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

export interface HeroSectionProps {
  _key: string
  _type: 'heroSection'
  heading: string
  subheading: string
  backgroundImage?: SanityImageSource
}
