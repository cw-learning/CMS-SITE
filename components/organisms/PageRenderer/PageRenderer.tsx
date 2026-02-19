import {
  HeroSection,
  FeatureListSection,
  TextImageSection,
} from '@/components/molecules'
import type { SectionProps } from './PageRenderer.types'
import { Container } from '@/components/atoms'

const SECTION_MAP: {
  [K in SectionProps['_type']]: React.ComponentType<
    Extract<SectionProps, { _type: K }>
  >
} = {
  heroSection: HeroSection,
  textImageSection: TextImageSection,
  featureListSection: FeatureListSection,
}

export default function PageRenderer({ sections }: { sections?: SectionProps[] }) {
  if (!sections?.length) return null

  return (
    <>
    <Container className='flex flex-col gap-5 p-5 *:rounded-xl *:shadow-2xl bg-gray-500'>
      {sections.map((section) => {
        const Component = SECTION_MAP[section._type] as React.ComponentType<
          typeof section
        >
        
        if (!Component) {
          console.warn(`No component found for type: ${section._type}`)
          return null
        }

        return <Component key={section._key} {...section} />
      })}
      </Container>
    </>
  )
}
