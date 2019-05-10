export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cd588a5e770ac82a200aadb',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages56754-studio',
                  apiId: '409965c0-64f4-4ee7-b857-8a8bb0933f7e'
                },
                {
                  buildHookId: '5cd588a57775a0f11c55b072',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages56754',
                  apiId: 'fa484e2a-bf11-455c-86dd-65c5852061eb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/simen/sanity-nextjs-landing-pages56754',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages56754.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
