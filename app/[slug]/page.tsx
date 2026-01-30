import { client } from '@/lib/sanity/client'
import { notFound } from 'next/navigation'

type PageRouteProps = {
  params: Promise<{ slug: string }>
}

type PageDoc = {
  title: string
  description?: string | null
}

const PAGE_BY_SLUG_QUERY =
  '*[_type == "page" && slug.current == $slug][0]{title, description}'

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
      <h1>{page.title}</h1>
      <p>{page.description}</p>
    </div>
  )
}