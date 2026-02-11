import { Container } from '@/components/atoms'
import FeatureCard from '@/components/molecules/FeatureCard'
import type { FeatureListSectionProps } from './FeatureListSection.types'

export default function FeatureListSection({ features }: FeatureListSectionProps) {
  if (!features?.length) return null
  
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50/30 to-purple-50/30">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <FeatureCard
              key={feature._key}
              _key={feature._key}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </Container>
    </section>
  )
}
