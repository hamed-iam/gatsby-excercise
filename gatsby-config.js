/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Just Recipes",
    description: "Nice and awesome recipe site",
    author: "@hamed_iam",
    person: { name: "hamed", age: 30 },
    simpleData: ["item 1", "item 1"],
    complexData: [
      { name: "John", age: 35 },
      { name: "Jane", age: 40 },
    ],
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
  ],
}
