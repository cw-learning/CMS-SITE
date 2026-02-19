import type { FeatureCardProps } from '../FeatureCard/FeatureCard.types'

export interface FeatureListSectionProps {
  _key: string
  _type: 'featureListSection'
  features: FeatureCardProps[]
}
