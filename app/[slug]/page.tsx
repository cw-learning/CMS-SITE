import { client } from '@/lib/sanity/client'
import { notFound } from 'next/navigation'
import { PageRenderer } from '@/components/organisms'
import type { SectionProps } from '@/components/organisms/PageRenderer'

type PageRouteProps = {
  params: Promise<{ slug: string }>
}

type PageDoc = {
  title: string
  description?: string | null
  sections?: SectionProps[]
}

// const PAGE_BY_SLUG_QUERY =
//   '*[_type == "page" && slug.current == $slug][0]{title, description}'
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

  if (!page) notFound()

  return (
    <div>
      <PageRenderer sections={page.sections} />
    </div>
  )
}