require('dotenv').config()

const path = require('path')
const {
  WPGRAPHQL_URL,
  GATSBY_TITLE,
  GATSBY_SITE_URL,
  GATSBY_DESCRIPTION,
} = process.env

module.exports = {
  siteMetadata: {
    title: GATSBY_TITLE,
    siteUrl: GATSBY_SITE_URL,
    description: GATSBY_DESCRIPTION,
    author: '@unikorns',
  },
  plugins: [
    `gatsby-plugin-postcss`,
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`),
          require(`./tailwind.config.js`), // Optional: Load custom Tailwind CSS configuration
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '~': path.resolve(__dirname, 'src'),
        },
        extensions: [],
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: GATSBY_SITE_URL,
        sitemap: `${GATSBY_SITE_URL}/sitemap.xml`,
        policy: [{ userAgent: '*', disallow: '/' }],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: GATSBY_TITLE,
        short_name: GATSBY_TITLE,
        start_url: `/`,
        background_color: `#0A2533`,
        theme_color: `#00B481`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
      },
    },
  ],
}
