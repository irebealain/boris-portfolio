export default {
  name: 'about',
  title: 'About',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'e.g., The Creator',
      initialValue: 'The Creator'
    },
    {
      name: 'image',
      title: 'Profile Image',
      type: 'image',
      options: { hotspot: true }
    },
    {
      name: 'story',
      title: 'Story Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      description: 'Add paragraphs for your story.'
    },
    {
      name: 'stats',
      title: 'Statistics',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'number', type: 'string', title: 'Number (e.g., 10+)' },
            { name: 'label', type: 'string', title: 'Label (e.g., Years)' },
            { name: 'link', type: 'string', title: 'Link (e.g., #sets)' }
          ]
        }
      ]
    }
  ]
}
