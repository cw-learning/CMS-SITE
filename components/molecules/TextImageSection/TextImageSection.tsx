import { urlFor } from '@/sanity/lib/image'
import { Text, Container, ResponsiveImage } from '@/components/atoms'
import type { TextImageSectionProps } from './TextImageSection.types'

export default function TextImageSection({
  text,
  image,
  alignment,
}: TextImageSectionProps) {
  const isRight = alignment === 'right'
  const imageUrl = image ? urlFor(image).url() : null
  
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white">
      <Container>
        <article
          className={`flex flex-col md:flex-row gap-10 items-center ${isRight ? 'md:flex-row-reverse' : ''}`}
        >
          <aside className="flex-1 bg-gradient-to-br from-white to-gray-50 p-10 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
            <Text variant="description" className="text-gray-700 leading-relaxed text-lg">{text}</Text>
          </aside>
          {imageUrl && (
            <figure className="flex-1 relative h-80 group">
              <span className="absolute -inset-2 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition-opacity duration-300" aria-hidden="true" />
              <ResponsiveImage
                src={imageUrl}
                alt=""
                fill
                className="rounded-2xl shadow-xl relative z-10 group-hover:scale-105 transition-transform duration-300"
              />
            </figure>
          )}
        </article>
      </Container>
    </section>
  )
}
