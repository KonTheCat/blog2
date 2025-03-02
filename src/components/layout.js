import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const Layout = ({ children, pageTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          description
        }
      }
    }
  `);

  const { description } = data.site.siteMetadata;
  return (
    <div className="site-container">
      <header className="site-header">
        <div className="header-content">
          <nav className="site-nav">
            <ul className="nav-links">
              <li className="nav-item">
                <Link
                  to="/"
                  className="nav-link"
                  activeClassName="nav-link-active"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/blogs"
                  className="nav-link"
                  activeClassName="nav-link-active"
                >
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/author"
                  className="nav-link"
                  activeClassName="nav-link-active"
                >
                  Author
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/quick-things"
                  className="nav-link"
                  activeClassName="nav-link-active"
                >
                  Quick Things
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/quotes"
                  className="nav-link"
                  activeClassName="nav-link-active"
                >
                  Quotes
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main className="site-main">
        {pageTitle && <h1 className="page-title">{pageTitle}</h1>}
        {children}
      </main>
      <footer className="site-footer">
        <div className="footer-content">
          <p className="copyright">
            © {new Date().getFullYear()} KonTheCat's Box
          </p>
          <p className="footer-vibed">
            Vibed with Claude 3.7 Sonnet and Cline, I don't really front-end
            like this at all.
          </p>
          <p className="footer-tagline">{description}</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
