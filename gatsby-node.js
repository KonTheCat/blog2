/**
 * Implement Gatsby's Node APIs in this file.
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const path = require("path");

// Define custom schema to handle optional fields
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  const typeDefs = `
    type MarkdownRemarkFrontmatter {
      title: String
      date: Date! @dateformat
      slug: String!
      featuredImage: File @fileByRelativePath
      author: String
      source: String
      featured: Boolean
    }
  `;
  createTypes(typeDefs);
};

// Create pages dynamically
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve(`src/templates/blog-post.js`);

  // Query for markdown nodes to use in creating pages
  const result = await graphql(`
    query {
      allMarkdownRemark {
        nodes {
          id
          frontmatter {
            slug
          }
          fileAbsolutePath
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create pages for each markdown file
  const posts = result.data.allMarkdownRemark.nodes;
  posts.forEach((post) => {
    // Extract the slug from the frontmatter
    let slug = post.frontmatter.slug;

    // Skip creating pages for quotes, quick-things, and author markdown files
    if (
      post.fileAbsolutePath.includes("/content/quotes/") ||
      post.fileAbsolutePath.includes("/content/quick-things/") ||
      post.fileAbsolutePath.includes("/content/author/") ||
      slug === "/author" ||
      slug === "/quotes" ||
      slug === "/quick-things"
    ) {
      return;
    }

    // If the slug starts with "/blog/", remove it to move to root
    if (slug.startsWith("/blog/")) {
      slug = slug.replace("/blog/", "/");
    }

    createPage({
      path: slug,
      component: blogPostTemplate,
      context: {
        id: post.id,
      },
    });
  });
};
