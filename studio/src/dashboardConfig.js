export default {
  widgets: [
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
                  buildHookId: '604d241653c698c673efeb3f',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-yweoev5k',
                  apiId: '1dea996e-b862-4fa7-b64e-6bd9ae6fd526'
                },
                {
                  buildHookId: '604d2417648d6c5a229ccc1d',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-byu4x2cx',
                  apiId: '6202810e-49fc-46e9-afba-b39bdced7e69'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hectormago/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-byu4x2cx.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
