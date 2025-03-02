import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export default function QuoteTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

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

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        author
        source
      }
    }
  }
`;
