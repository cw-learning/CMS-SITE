import { FeatureListSectionProps } from './FeatureListSection.type'

export default function FeatureListSection({ features }: FeatureListSectionProps) {
  if (!features?.length) return null
  
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature) => (
          <div key={feature._key} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-gray-600 text-2xl font-bold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}