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
      <section className={`p-10 
      flex flex-col md:flex-row gap-10 items-center justify-center ${isRight ? 'md:flex-row-reverse' : ''} 
      bg-white`}>

            <Text 
              variant="subheading" 
              className="text-gray-700 leading-relaxed text-lg bg-amber-100 p-5 rounded-xl 
              transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:bg-amber-200"
            >
              {text}
            </Text>
            {imageUrl && (
              <ResponsiveImage
                src={imageUrl}
                alt=""
                height={500}
                width={500}
                className="rounded-2xl shadow-xl transition-all duration-300 ease-in-out 
                hover:scale-110 hover:shadow-2xl hover:rotate-1"
              />
            )}
      </section>
  )
}
