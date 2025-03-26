import {defineField, defineType} from 'sanity'
import { CaseIcon } from '@sanity/icons'

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  icon: CaseIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'name',
      },
      validation: (rule) => rule
        .required()
        .error(`Required to generate a page on the website`),
      hidden: ({document}) => !document?.name,
    }),
    defineField({
      name: 'image',
      type: 'array',
      of: [{type: 'image'}],
    }),
    defineField({
      name: 'short_description',
      type: 'string',
    }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{type: 'block'}],
    }),
    defineField({
      name: 'date',
      type: 'datetime',
      options: {
        dateFormat: 'YYYY-MM',
      },
    }),
  ],
  // preview: {
  //   select: {
  //     name: 'name',
  //     venue: 'venue.name',
  //     artist: 'headline.name',
  //     date: 'date',
  //     image: 'image',
  //   },
  //   prepare({name, venue, artist, date, image}) {
  //     const nameFormatted = name || 'Untitled event'
  //     const dateFormatted = date
  //       ? new Date(date).toLocaleDateString(undefined, {
  //           month: 'short',
  //           day: 'numeric',
  //           year: 'numeric',
  //           hour: 'numeric',
  //           minute: 'numeric',
  //         })
  //       : 'No date'
  
  //     return {
  //       title: artist ? `${nameFormatted} (${artist})` : nameFormatted,
  //       subtitle: venue ? `${dateFormatted} at ${venue}` : dateFormatted,
  //       media: image || CalendarIcon,
  //     }
  //   },
  // },
})