export const careerPost = {
  name: 'careerPost',
  title: 'Career Post',
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
      name: 'type',
      title: 'Job Type',
      type: 'string',
      description: 'e.g., Internship, Full-time, Part-time',
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'requirements',
      title: 'Requirements',
      type: 'text',
    },
    {
      name: 'googleFormUrl',
      title: 'Google Form URL',
      type: 'url',
    },
    {
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      initialValue: true,
    },
    {
      name: 'publishedDate',
      title: 'Published Date',
      type: 'date',
    },
  ],
};
