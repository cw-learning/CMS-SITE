import { defineField, defineType } from "sanity"

export default defineType({
  name: 'featureListSection',
  title: 'Feature List Section',
  type: 'object',
  fields: [
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', type: 'string' },
            { name: 'description', type: 'text' },
          ],
        },
      ],
    }),
  ],
});
