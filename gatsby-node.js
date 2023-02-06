/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

/**
//  * @type {import('gatsby').GatsbyNode['createPages']}
//  */
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }


// require('dotenv').config({
//   path: `.env.${process.env.NODE_ENV}`
// });

// const fetch = require('node-fetch');

// exports.sourceNodes = async ({
//   actions: { createNode },
//   createContentDigest
// }) => {
//   const url = 'https://api.api-ninjas.com/v1/dogs?energy=2&barking=1'
//   let min_height
//   const dog = 'whippet'
//   const response = await fetch(
//       url,
//     {
//       method: 'GET',
//       headers: {
//         'X-Api-Key': `${process.env.API_NINJA_API_KEY}`
//       },
//       contentType: 'application/json',
//     }
//   )

//   const data = await response.json();

//     console.log('#######################');
//   console.log(data);
//     console.log('#######################');
// }