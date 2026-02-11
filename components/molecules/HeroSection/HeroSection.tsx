import { urlFor } from '@/sanity/lib/image'
import { Heading, Text, ResponsiveImage } from '@/components/atoms'
import type { HeroSectionProps } from './HeroSection.types'

export default function HeroSection({
  heading,
  subheading,
  backgroundImage,
}: HeroSectionProps) {
  const imageUrl = backgroundImage ? urlFor(backgroundImage).url() : null
  
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      {imageUrl && (
        <>
          <ResponsiveImage
            src={imageUrl}
            alt=""
            fill
            className="z-0 scale-105 animate-subtle-zoom"
            priority
          />
          <span className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-purple-900/60 to-pink-900/70 z-10" aria-hidden="true" />
        </>
      )}

      <header className="relative z-20 px-8 py-12 rounded-2xl text-center text-white max-w-5xl mx-4 backdrop-blur-md transform hover:scale-105 transition-transform duration-300">
        <span className="absolute inset-0 bg-white/10 rounded-2xl -z-10 shadow-2xl border border-white/20" aria-hidden="true" />
        
        <Heading level="h1" className="text-white drop-shadow-2xl mb-6 animate-fade-in">
          {heading}
        </Heading>
        <Text variant="subheading" className="text-gray-100 drop-shadow-lg animate-fade-in-delay">
          {subheading}
        </Text>
      </header>
    </section>
  )
}
