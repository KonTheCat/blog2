import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";

export default function QuickThingTemplate({ id }) {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          id
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  `);

  // Find the specific quick thing by id
  const quickThing = data.allMarkdownRemark.nodes.find(
    (node) => node.id === id
  );

  // If no quick thing is found, return a simple message
  if (!quickThing) {
    return (
      <Layout>
        <article className="blog-post">
          <div>Quick thing not found</div>
          <div className="blog-post-footer">
            <Link to="/quick-things" className="back-to-home">
              ← Back to Quick Things
            </Link>
          </div>
        </article>
      </Layout>
    );
  }

  const { frontmatter, html } = quickThing;

  return (
    <Layout>
      <article className="blog-post">
        <header className="blog-post-header">
          <h1 className="blog-post-title">{frontmatter.title}</h1>
          <p className="blog-post-date">
            {frontmatter.date} • <span className="read-time">2 min read</span>
          </p>
        </header>

        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <div className="blog-post-footer">
          <Link to="/quick-things" className="back-to-home">
            ← Back to Quick Things
          </Link>
        </div>
      </article>
    </Layout>
  );
}
