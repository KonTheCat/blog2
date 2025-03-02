import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const NotFoundPage = () => {
  return (
    <Layout pageTitle="Page Not Found">
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1>404: Not Found</h1>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <p>
          <Link to="/">Go back to the homepage</Link>
        </p>
      </div>
    </Layout>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not Found | KonTheCat's Box</title>;
