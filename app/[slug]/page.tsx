import { client } from '@/lib/sanity/client'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { PageRenderer } from '@/components/organisms'
import type { SectionProps } from '@/components/organisms/PageRenderer'
import { urlFor } from '@/sanity/lib/image'
import type { SanityImageSource } from '@sanity/image-url/lib/types/types'
import { Heading } from '@/components/atoms'



type PageRouteProps = {
  params: Promise<{ slug: string }>
}

type PageDoc = {
  title: string
  description?: string | null
  sections?: SectionProps[]
}
type LogoDoc = {
  title: string
  image: SanityImageSource
}
const LOGO_QUERY = `*[_type == "logo" && title == "CMS-SITE"][0]{
image}`


const PAGE_BY_SLUG_QUERY = `
*[_type == "page" && slug.current == $slug][0]{
  title,
  description,
  sections[]{
    _key,
    _type,
    heading,
    subheading,
    backgroundImage,
    text,
    image,
    alignment,
    features[]{
    _key,
      title,
      description
    }
  }
}
`

export default async function Page({ params }: PageRouteProps) {
  const { slug } = await params

  if (typeof slug !== 'string' || slug.length === 0) {
    notFound()
  }

  let page: PageDoc | null
  try {
    page = await client.fetch<PageDoc | null>(PAGE_BY_SLUG_QUERY, { slug })
  } catch {
    notFound()
  }

  const  logo = await client.fetch<LogoDoc | null>(LOGO_QUERY)



  if (!page) notFound()

  const imageUrl = logo?.image ? urlFor(logo.image).url() : null
  console.log('Fetched page data:', page.title)

  return (
    <>
    
    <div className="bg-linear-to-br from-gray-50 via-gray-500 to-gray-950">
      <header className="p-5 flex items-center gap-5 justify-center">
        {imageUrl && (
          <Image src={imageUrl} alt="Logo" width={48} height={48} className="h-12 w-auto rounded-lg shadow-lg" />
        )}
        <Heading level ='h1' className='text-black'>{page.title}</Heading>
      </header>
      <PageRenderer sections={page.sections} />
    </div>
    </>
  )
}