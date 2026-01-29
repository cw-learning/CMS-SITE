import { client } from '@/lib/sanity/client'
import { notFound } from 'next/navigation'

export default async function Page({ params }: any) {
    const { slug } = await params
  // GROQ Query
  const query = `*[_type == "page" && slug.current == $slug][0]`
  const page = await client.fetch(query, { slug })

  // 404 if not found
  if (!page) return notFound()

  return (
    <div>
      <h1>{page.title}</h1>
      <p>{page.description}</p>
    </div>
  )
}
