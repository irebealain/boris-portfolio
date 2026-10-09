export default {
  name: 'highlight',
  title: 'Showreel',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the Showreel'
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'string',
      description: 'Subtitle or category of the Showreel (e.g., "TVC")'
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail',
      type: 'image',
      description: 'Thumbnail image to display before playing the reel',
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
