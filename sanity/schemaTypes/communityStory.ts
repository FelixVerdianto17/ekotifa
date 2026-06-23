export const communityStory = {
  name: 'communityStory',
  title: 'Community Story',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sourceUrl',
      title: 'Source URL',
      type: 'url',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'sourceName',
      title: 'Source Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image (Sanity)',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'imageUrl',
      title: 'External Image URL (Fallback if no Sanity Image)',
      type: 'url',
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Published', value: 'published' },
          { title: 'Draft', value: 'draft' },
        ],
        layout: 'radio',
      },
      initialValue: 'published',
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    },
  ],
};
