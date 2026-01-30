import HeroSection from './sections/HeroSection'
import TextImageSection from './sections/TextImageSection'
import FeatureListSection from './sections/FeatureListSection'

export const sectionMap = {
  heroSection: HeroSection,
  textImageSection: TextImageSection,
  featureListSection: FeatureListSection
} as const

export type SectionType = keyof typeof sectionMap