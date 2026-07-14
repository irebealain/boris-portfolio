export default {
  name: 'expertise',
  title: 'Expertise',
  type: 'document',
  fields: [
    {
      name: 'num',
      title: 'Number',
      type: 'string',
      description: 'e.g., "01", "02"',
      validation: Rule => Rule.required()
    },
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'desc',
      title: 'Description',
      type: 'text',
      validation: Rule => Rule.required()
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      description: 'e.g., DaVinci Resolve, ACES Pipeline'
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    }
  ]
}
