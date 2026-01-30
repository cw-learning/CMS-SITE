import { client } from '@/lib/sanity/client'
import { notFound } from 'next/navigation'

type PageRouteProps = {
  params: Promise<{ slug: string }>
}

type PageDoc = {
  title: string
  description?: string | null
  sections?: any[] //newly added for testing
}

// const PAGE_BY_SLUG_QUERY =
//   '*[_type == "page" && slug.current == $slug][0]{title, description}'
const PAGE_BY_SLUG_QUERY = `
*[_type == "page" && slug.current == $slug][0]{
  title,
  description,
  sections[]{
    _type,
    heading,
    subheading,
    backgroundImage,
    text,
    image,
    alignment,
    features[]{
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
    console.log('PAGE DATA:', page)
  } catch {
    notFound()
  }

  if (!page) notFound()

  return (
    <div>
      <h1>{page.title}</h1>
      <p>{page.description}</p>
      <pre>{JSON.stringify(page.sections, null, 2)}</pre>
    </div>
  )
}