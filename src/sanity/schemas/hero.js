export default {
  name: 'hero',
  title: 'Hero Settings',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title for the hero section (e.g., "Main Hero")'
    },
    {
      name: 'heroMediaType',
      title: 'Hero Media Type',
      type: 'string',
      options: {
        list: [
          { title: 'Image', value: 'image' },
          { title: 'Video', value: 'video' }
        ],
        layout: 'radio'
      },
      initialValue: 'image'
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'The background image for the main hero section',
      options: {
        hotspot: true
      },
      hidden: ({ document }) => document?.heroMediaType === 'video'
    },
    {
      name: 'heroVideo',
      title: 'Hero Video',
      type: 'file',
      description: 'The background video for the main hero section',
      options: {
        accept: 'video/*'
      },
      hidden: ({ document }) => document?.heroMediaType !== 'video'
    }
  ]
}
