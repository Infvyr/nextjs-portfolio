import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'stack',
  title: 'Stacks',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
  ],
})
