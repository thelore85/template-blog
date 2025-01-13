// schemas/hero.ts
export const heroType = {
  name: 'hero',
  type: 'document',
  title: 'Hero',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Background Image',
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
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      name: 'button1',
      type: 'object',
      title: 'Button 1',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Button Label',
        },
        {
          name: 'url',
          type: 'url',
          title: 'Button URL',
        },
      ],
    },
    {
      name: 'button2',
      type: 'object',
      title: 'Button 2',
      fields: [
        {
          name: 'label',
          type: 'string',
          title: 'Button Label',
        },
        {
          name: 'url',
          type: 'url',
          title: 'Button URL',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title', // Seleziona il titolo
      subtitle: 'subtitle', // Seleziona il sottotitolo
      media: 'image', // Seleziona l'immagine per l'anteprima
    },

    prepare({title, subtitle, media}: any) {
      return {
        title: title || 'No Title', // Default se non c'è titolo
        subtitle: subtitle || 'No Subtitle', // Default se non c'è sottotitolo
        media, // Immagine di preview
      }
    },
  },
}
