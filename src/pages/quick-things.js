import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const QuickThingsPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout pageTitle={frontmatter.title}>
      <article className="blog-post">
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </Layout>
  );
};

export default QuickThingsPage;

export const Head = ({ data }) => (
  <title>{data.markdownRemark.frontmatter.title} | KonTheCat's Box</title>
);

export const pageQuery = graphql`
  query {
    markdownRemark(frontmatter: { slug: { eq: "/quick-things" } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
