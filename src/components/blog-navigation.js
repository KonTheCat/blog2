import React, { useState } from "react";
import { Link } from "gatsby";

const BlogNavigation = ({ posts }) => {
  // Group posts by year and month
  const groupedPosts = posts.reduce((acc, post) => {
    const date = new Date(post.frontmatter.date);
    const year = date.getFullYear();
    const month = date.getMonth();

    if (!acc[year]) {
      acc[year] = {};
    }

    if (!acc[year][month]) {
      acc[year][month] = [];
    }

    acc[year][month].push(post);
    return acc;
  }, {});

  // Sort years in descending order
  const sortedYears = Object.keys(groupedPosts).sort((a, b) => b - a);

  // Track expanded years and months
  const [expandedYears, setExpandedYears] = useState({});
  const [expandedMonths, setExpandedMonths] = useState({});

  // Toggle year expansion
  const toggleYear = (year) => {
    setExpandedYears({
      ...expandedYears,
      [year]: !expandedYears[year],
    });
  };

  // Toggle month expansion
  const toggleMonth = (yearMonth) => {
    setExpandedMonths({
      ...expandedMonths,
      [yearMonth]: !expandedMonths[yearMonth],
    });
  };

  // Month names
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className="blog-navigation">
      <h2 className="nav-title">Blog Archive</h2>
      <ul className="year-list">
        {sortedYears.map((year) => (
          <li key={year} className="year-item">
            <button
              className="year-toggle"
              onClick={() => toggleYear(year)}
              aria-expanded={expandedYears[year]}
            >
              <span className="toggle-icon">
                {expandedYears[year] ? "▼" : "►"}
              </span>
              {year}
            </button>

            {expandedYears[year] && (
              <ul className="month-list">
                {Object.keys(groupedPosts[year])
                  .sort((a, b) => b - a) // Sort months in descending order
                  .map((month) => {
                    const yearMonth = `${year}-${month}`;
                    return (
                      <li key={yearMonth} className="month-item">
                        <button
                          className="month-toggle"
                          onClick={() => toggleMonth(yearMonth)}
                          aria-expanded={expandedMonths[yearMonth]}
                        >
                          <span className="toggle-icon">
                            {expandedMonths[yearMonth] ? "▼" : "►"}
                          </span>
                          {monthNames[month]}
                        </button>

                        {expandedMonths[yearMonth] && (
                          <ul className="post-list">
                            {groupedPosts[year][month].map((post) => (
                              <li key={post.id} className="post-item">
                                <Link
                                  to={post.frontmatter.slug}
                                  className="post-link"
                                >
                                  {post.frontmatter.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    );
                  })}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogNavigation;
