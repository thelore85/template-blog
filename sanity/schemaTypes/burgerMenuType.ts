export const burgerMenuType = {
  name: 'burger',
  type: 'document',
  title: 'Burger Menu',
  fields: [
    {
      name: 'logo',
      type: 'image',
      title: 'Logo',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description',
    },
    {
      name: 'links',
      type: 'array',
      title: 'Links',
      of: [
        {
          type: 'object',
          title: 'Link',
          fields: [
            {
              name: 'label',
              type: 'string',
              title: 'Link Label',
            },
            {
              name: 'url',
              type: 'url',
              title: 'URL',
              description: 'Use this field for external links.',
            },
            {
              name: 'slug',
              type: 'string',
              title: 'Slug',
              description: 'Use this field for internal links.',
            },
          ],
          preview: {
            select: {
              title: 'label',
              subtitle: 'url',
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title', // Seleziona il titolo del menu
      subtitle: 'description', // Seleziona la descrizione
      media: 'logo', // Seleziona il logo per l'anteprima
    },
    prepare({title, subtitle, media}: any) {
      return {
        title: title || 'No Title', // Default se non c'è titolo
        subtitle: subtitle || 'No Description', // Default se non c'è descrizione
        media, // Immagine di preview (logo)
      }
    },
  },
}
