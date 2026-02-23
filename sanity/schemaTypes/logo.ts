import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'logo',
  title: 'logo',
  type: 'document',
  fields: [
    defineField(
    {
      name: 'title',
      title: 'logo Title',
      type: 'string',
      validation: (Rule) => Rule.required()
    }),
    defineField(
        {
            name:'image',
            title:'Image',
            type:'image',
            options : {hotspot : true},
        }
    )
  ]
});
