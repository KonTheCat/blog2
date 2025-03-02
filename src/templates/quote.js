import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";

export default function QuoteTemplate({ id }) {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        nodes {
          id
          html
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            author
            source
          }
        }
      }
    }
  `);

  // Find the specific quote by id
  const quote = data.allMarkdownRemark.nodes.find((node) => node.id === id);

  // If no quote is found, return a simple message
  if (!quote) {
    return (
      <Layout>
        <article className="blog-post">
          <div>Quote not found</div>
          <div className="blog-post-footer">
            <Link to="/quotes" className="back-to-home">
              ← Back to Quotes
            </Link>
          </div>
        </article>
      </Layout>
    );
  }

  const { frontmatter, html } = quote;

  return (
    <Layout>
      <article className="blog-post">
        <div className="quote-content">"{html}"</div>
        <div className="quote-author">{frontmatter.author}</div>
        {frontmatter.source && (
          <div className="quote-source">{frontmatter.source}</div>
        )}

        <div className="blog-post-footer">
          <Link to="/quotes" className="back-to-home">
            ← Back to Quotes
          </Link>
        </div>
      </article>
    </Layout>
  );
}
