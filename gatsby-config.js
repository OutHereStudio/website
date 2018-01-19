module.exports = {
  siteMetadata: {
    title: 'Out Here Studio',
    description:
      'Creative software studio making digital experiences to bring people closer together with each other, their community, and the natural world.',
    author: 'Louis DeScioli',
    copyright: 'Out Here Studio LLC',
    keywords: [
      'software',
      'games',
      'mobile',
      'augmented reality',
      'mixed reality',
      'mobile games',
      'iOS',
      'out here archery',
      'out here'
    ]
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown/`,
        name: 'markdown-pages'
      }
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-resolve-src`,
    `@jacobmischka/gatsby-plugin-react-svg`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-104606402-1'
      }
    }
  ]
};
