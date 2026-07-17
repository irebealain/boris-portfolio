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
