import { Heading, Text } from '@/components/atoms'
import type { FeatureCardProps } from './FeatureCard.types'

export default function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <article className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-1 overflow-hidden">
      <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500" aria-hidden="true" />      
      <Heading level="h3" className="text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
        {title}
      </Heading>
      <Text variant="description" className="text-gray-800 leading-relaxed">
        {description}
      </Text>
    </article>
  )
}
