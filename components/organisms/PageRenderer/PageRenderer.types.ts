import type {
  FeatureListSectionProps,
  HeroSectionProps,
  TextImageSectionProps,
} from '@/components/molecules'

export type SectionProps =
  | HeroSectionProps
  | TextImageSectionProps
  | FeatureListSectionProps

export interface PageRendererProps {
  sections?: SectionProps[]
}
