import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

import { HeroSectionProps } from './HeroSection.type'

export default function HeroSection({ heading, subheading, backgroundImage }: HeroSectionProps) {
  return (
    <section className="relative min-h-[125vh] flex items-center justify-center">
      {backgroundImage && (
        <Image
          src={urlFor(backgroundImage).url()}
          alt=""
          fill
          className="object-cover z-0"
          priority
        />
      )}

      {/* Text content with black box behind it */}
      <div className="relative z-20 p-6 rounded-lg text-center text-white">
        {/* Black box behind text */}
        <div className="absolute inset-0 bg-black bg-opacity-60 rounded-lg -z-10" />
        
        <h1 className="text-5xl font-bold">{heading}</h1>
        <p className="text-xl mt-4">{subheading}</p>
      </div>
    </section>
  )
}