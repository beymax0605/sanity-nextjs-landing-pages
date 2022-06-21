export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62b121ca7e4d5045fe5e9403',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-p7zvpeaj',
                  apiId: '3e6c02de-610c-4047-b7fc-148d93d9ac95'
                },
                {
                  buildHookId: '62b121ca6fa84c477458426a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-codfecpc',
                  apiId: '40392c14-36df-4eaa-9bce-879c69bc7750'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/beymax0605/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-codfecpc.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
