require('dotenv').config()

const queries = require('./src/utils/algolia.queries')

module.exports = {
  siteMetadata: {
    title: 'My blog',
    position: 'Back-end Developer',
    description: 'A blog about back-end development and other cool stuff.',
    author: '@myblog',
    siteUrl: 'https://testando-gatsby.netlify.app'
  },
  plugins: [
    'gatsby-plugin-transition-link',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    // Needs to be the first to work with gatsby-remark-image
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'uploads',
        path: `${__dirname}/static/assets/img`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/posts`
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-relative-images',
            options: {
              name: 'uploads'
            }
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 900,
              linkImagesToOriginal: false
            }
          },
          'gatsby-remark-lazy-load',
          'gatsby-remark-prismjs'
        ]
      }
    },
    'gatsby-plugin-image',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-algolia-search',
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
        chunkSize: 10000,
        enablePartialUpdates: true
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Lauriel Mesquita',
        short_name: 'Lauriel',
        start_url: '/',
        background_color: '#16202C',
        theme_color: '#16202C',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-sitemap',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    'gatsby-plugin-netlify-cms'
  ]
}
