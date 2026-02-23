import { type SchemaTypeDefinition } from 'sanity'
import page from './page'
import heroSection from './sections/heroSection'
import textImageSection from './sections/textImageSection'
import featureListSection from './sections/featureListSection'
import logo from './logo'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [page, logo, heroSection, textImageSection, featureListSection],
}
