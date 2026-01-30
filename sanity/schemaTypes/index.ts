import { type SchemaTypeDefinition } from 'sanity'
import page from './page'
import heroSection from './sections/heroSection'
import textImageSection from './sections/textImageSection'
import featureListSection from './sections/featureListSection'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, heroSection, textImageSection, featureListSection],
}
