import React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import BlogNavigation from "../components/blog-navigation";
import TagHeatmap from "../components/tag-heatmap";

const BlogsPage = ({ data, location }) => {
  const searchParams = new URLSearchParams(location.search);
  const tagFilter = searchParams.get("tag");

  const allPosts = data.allMarkdownRemark.nodes;
  const posts = tagFilter
    ? allPosts.filter(
        (post) =>
          post.frontmatter.tags && post.frontmatter.tags.includes(tagFilter)
      )
    : allPosts;

  return (
    <Layout>
      <div className="blogs-page">
        <h1 className="page-title">
          {tagFilter ? `Posts tagged with "${tagFilter}"` : "All Blog Posts"}
          {tagFilter && (
            <Link to="/blogs" className="clear-filter">
              (Clear filter)
            </Link>
          )}
        </h1>

        <div className="blogs-layout">
          <div className="blogs-main-content">
            {posts.length > 0 ? (
              <div className="blog-posts-list">
                {posts.map((post) => {
                  if (!post.frontmatter || !post.frontmatter.slug) {
                    return null;
                  }

                  const title = post.frontmatter.title || post.frontmatter.slug;
                  const featuredImg = post.frontmatter.featuredImage
                    ? getImage(
                        post.frontmatter.featuredImage.childImageSharp
                          .gatsbyImageData
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
                      {featuredImg && (
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
            ) : (
              <p>No blog posts found.</p>
            )}
          </div>
          <div className="blogs-sidebar">
            <BlogNavigation posts={posts} />
            <TagHeatmap posts={allPosts} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogsPage;

export const Head = () => <title>All Blogs | KonTheCat's Box</title>;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        fileAbsolutePath: {
          regex: "/src/content/(?!quotes|quick-things|author)/"
        }
      }
    ) {
      nodes {
        id
        excerpt(pruneLength: 160)
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          slug
          title
          featured
          tags
          featuredImage {
            childImageSharp {
              gatsbyImageData(width: 600, height: 300, layout: CONSTRAINED)
            }
          }
        }
      }
    }
  }
`;
