import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";

export default function QuickThingTemplate({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

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

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
