import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.nodes;
  const { description } = data.site.siteMetadata;

  // Get the most recent post as the featured post
  const featuredPost = posts.length > 0 ? posts[0] : null;
  // Get the rest of the posts
  const regularPosts = posts.length > 1 ? posts.slice(1) : [];

  return (
    <Layout>
      <div className="site-intro">
        <h1 className="site-title">KonTheCat's Box</h1>
        <p className="site-description">{description}</p>
      </div>

      {featuredPost &&
        featuredPost.frontmatter &&
        featuredPost.frontmatter.slug && (
          <div className="featured-post">
            <div className="featured-post-content">
              <h2 className="featured-post-title">
                <Link to={featuredPost.frontmatter.slug}>
                  {featuredPost.frontmatter.title}
                </Link>
              </h2>
              <p className="post-date">
                {featuredPost.frontmatter.date} •{" "}
                <span className="read-time">7 min read</span>
              </p>
              <p className="featured-post-excerpt">{featuredPost.excerpt}</p>
            </div>
          </div>
        )}

      {regularPosts.length > 0 && (
        <div>
          {regularPosts.map((post, index) => {
            if (!post.frontmatter || !post.frontmatter.slug) {
              return null;
            }

            const title = post.frontmatter.title || post.frontmatter.slug;
            const featuredImg = post.frontmatter.featuredImage
              ? getImage(
                  post.frontmatter.featuredImage.childImageSharp.gatsbyImageData
                )
              : null;

            return (
              <article key={post.id} className="blog-post-card">
                <div className="post-content">
                  <header>
                    <h2 className="post-title">
                      <Link
                        to={post.frontmatter.slug}
                        className="post-title-link"
                      >
                        {title}
                      </Link>
                    </h2>
                    <p className="post-date">
                      {post.frontmatter.date} •{" "}
                      <span className="read-time">5 min read</span>
                    </p>
                  </header>

                  <p className="post-excerpt">{post.excerpt}</p>
                </div>
                {featuredImg && index % 2 === 0 && (
                  <Link
                    to={post.frontmatter.slug}
                    className="featured-image-link"
                  >
                    <GatsbyImage
                      image={featuredImg}
                      alt={title}
                      className="featured-image"
                    />
                  </Link>
                )}
              </article>
            );
          })}
        </div>
      )}
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>KonTheCat's Box</title>;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        description
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        fileAbsolutePath: {
          regex: "/src/content/(?!quotes|quick-things|author)/"
        }
        frontmatter: { featured: { eq: true } }
      }
    ) {
      nodes {
        id
        excerpt(pruneLength: 160)
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 800, height: 400, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;
