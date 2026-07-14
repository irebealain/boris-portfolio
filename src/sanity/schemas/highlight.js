export default {
  name: 'highlight',
  title: 'Highlight (Hero & Showreel)',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title for the highlight (e.g., "Main Hero Settings")'
    },
    {
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      description: 'The background image for the main hero section',
      options: {
        hotspot: true
      }
    },
    {
      name: 'showreelVideoType',
      title: 'Showreel Video Source Type',
      type: 'string',
      options: {
        list: [
          { title: 'Upload File', value: 'file' },
          { title: 'External URL (YouTube, Vimeo, MP4 link)', value: 'url' }
        ],
        layout: 'radio'
      },
      initialValue: 'url'
    },
    {
      name: 'showreelVideoFile',
      title: 'Showreel Video File',
      type: 'file',
      options: {
        accept: 'video/*'
      },
      hidden: ({ document }) => document?.showreelVideoType !== 'file'
    },
    {
      name: 'showreelVideoUrl',
      title: 'Showreel Video URL',
      type: 'url',
      hidden: ({ document }) => document?.showreelVideoType !== 'url'
    }
  ]
}
