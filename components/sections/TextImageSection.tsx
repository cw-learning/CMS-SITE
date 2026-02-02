import Image from 'next/image'
import { urlFor } from '@/sanity/lib/image'

import { TextImageSectionProps } from './TextImageSection.type'

export default function TextImageSection({ text, image, alignment }: TextImageSectionProps) {
  const isRight = alignment === 'right'
  
  return (
    <section className="py-16 px-4">
      <div className={`max-w-6xl mx-auto flex gap-8 items-center ${isRight ? 'flex-row-reverse' : ''}`}>
        <div className="flex-1">
          <p className="text-lg">{text}</p>
        </div>
        {image && (
          <div className="flex-1 relative h-64">
            <Image
              src={urlFor(image).url()}
              alt=""
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
      </div>
    </section>
  )
}