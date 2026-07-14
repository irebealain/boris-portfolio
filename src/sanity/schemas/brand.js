export default {
  name: 'brand',
  title: 'Brand',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: Rule => Rule.required()
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'invertLogo',
      title: 'Invert Logo for Dark Mode',
      type: 'boolean',
      description: 'Toggle this if the logo is dark and needs to be inverted to white on the website.',
      initialValue: false
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number'
    }
  ]
}
