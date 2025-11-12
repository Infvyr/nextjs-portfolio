import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'projects',
  type: 'document',
  title: 'Projects',
  fields: [
    defineField({
      name: 'createdAt',
      title: 'Creation date',
      type: 'date',
      options: {
        dateFormat: 'DD-MM-YYYY',
        calendarTodayLabel: 'Today',
      },
    }),
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'category',
      type: 'array',
      title: 'Category',
      of: [{type: 'reference', to: {type: 'category'}}],
    }),
    defineField({
      name: 'stack',
      type: 'array',
      title: 'Stack',
      of: [{type: 'reference', to: {type: 'stack'}}],
    }),
    defineField({
      name: 'poster',
      title: 'Poster',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'images',
      title: 'Gallery',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      title: 'Repo URL',
      name: 'repoUrl',
      type: 'url',
    }),
    defineField({
      title: 'Live URL',
      name: 'liveUrl',
      type: 'url',
    }),
  ],
})
