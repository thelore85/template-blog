// schemas/page.ts
import {defineField} from 'sanity'

export const pageType = {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Page Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Page Description',
    },
    {
      name: 'components',
      type: 'array',
      title: 'Page Components',
      of: [
        {
          type: 'reference',
          to: [{type: 'hero'}], // Collega il componente Hero tramite un riferimento
        },
        // Aggiungi altri componenti come 'menu', 'team', ecc.
      ],
    },
  ],
}
