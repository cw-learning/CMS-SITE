import { sectionMap } from './sectionMap'

import { PageRendererProps } from './PageRenderer.type'


export default function PageRenderer({ sections }: PageRendererProps) {
  if (!sections?.length) return null

  return (
    <>
      {sections.map((section, index) => {
        const Component = sectionMap[section._type] as React.ComponentType<typeof section>
        
        if (!Component) {
          console.warn(`No component found for type: ${section._type}`)
          return null
        }
        
        return <Component key={`${section._type}-${index}`} {...section} />
      })}
    </>
  )
}