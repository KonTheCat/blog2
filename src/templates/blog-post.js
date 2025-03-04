import React from "react";
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

export default function BlogPostTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const featuredImg = frontmatter.featuredImage
    ? getImage(frontmatter.featuredImage.childImageSharp.gatsbyImageData)
    : null;

  // Add featured image to the blog post if available

  return (
    <Layout>
      <article className="blog-post">
        <header className="blog-post-header">
          <h1 className="blog-post-title">{frontmatter.title}</h1>
          <p className="blog-post-date">{frontmatter.date}</p>
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="blog-post-tags">
              {frontmatter.tags.map((tag, index) => (
                <Link
                  key={index}
                  to={`/blogs?tag=${tag}`}
                  className="blog-post-tag"
                >
                  {tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        {featuredImg && (
          <div className="blog-post-featured-image">
            <GatsbyImage image={featuredImg} alt={frontmatter.title} />
          </div>
        )}

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="blog-post-footer">
          <Link to="/blogs" className="back-to-home">
            ← Back to All Blogs
          </Link>
        </div>
      </article>
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        featured
        tags
        featuredImage {
          childImageSharp {
            gatsbyImageData(width: 900, quality: 90)
          }
        }
      }
    }
  }
`;
