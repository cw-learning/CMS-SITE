import HeroSection from './sections/HeroSection'
import TextImageSection from './sections/TextImageSection'
import FeatureListSection from './sections/FeatureListSection'
import type { SectionProps } from './PageRenderer.type'

export const sectionMap: { [K in SectionProps['_type']]: React.ComponentType<Extract<SectionProps, { _type: K }>> } = {

  heroSection: HeroSection,
  textImageSection: TextImageSection,
  featureListSection: FeatureListSection
}
