module.exports = {
  pathPrefix: "/ctr",
  siteMetadata: {
    title: `Click Through Ratio (CTR) Calculator`,
    description: `Calculate your click through ratio and find out how your ads are doing`,
    author: `@akash191095`,
    siteUrl: `https://github.com/akash191095/ctr/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Click Through Ratio Calculator`,
        short_name: `CTR Calculator`,
        start_url: `/`,
        background_color: `#333`,
        theme_color: `#111`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-119249365-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
  ],
}
