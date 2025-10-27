export default {
    name: 'userOpinion',
    type: 'document',
    title: 'User Opinion',
    fields: [
      {
        name: 'name',
        type: 'string',
        title: 'Name',
        validation: (Rule: any) => Rule.required()
      },
      {
        name: 'email',
        type: 'string',
        title: 'Email',
        validation: (Rule: any) => Rule.required().email()
      },
      {
        name: 'avis',
        type: 'text',
        title: 'Avis',
        validation: (Rule: any) => Rule.required().min(10).max(500)
      },
      {
        name: 'approved',
        type: 'boolean',
        title: 'Approuvé',
        description: 'Cochez pour approuver et publier cet avis',
        initialValue: false
      },
      {
        name: 'createdAt',
        type: 'datetime',
        title: 'Created At',
        initialValue: () => new Date().toISOString()
      }
    ],
    preview: {
      select: {
        title: 'name',
        subtitle: 'avis',
        approved: 'approved'
      },
      prepare(selection: any) {
        const {title, subtitle, approved} = selection
        return {
          title: `${title} ${approved ? '✅' : '⏳'}`,
          subtitle: subtitle?.substring(0, 60) + '...'
        }
      }
    }
  }