import React from "react";
import { Link } from "gatsby";

const TagHeatmap = ({ posts }) => {
  // Extract all tags from posts
  const allTags = posts.reduce((tags, post) => {
    if (post.frontmatter.tags && Array.isArray(post.frontmatter.tags)) {
      post.frontmatter.tags.forEach((tag) => {
        if (tag) {
          tags[tag] = (tags[tag] || 0) + 1;
        }
      });
    }
    return tags;
  }, {});

  // Convert to array for sorting
  const tagArray = Object.entries(allTags).map(([tag, count]) => ({
    tag,
    count,
  }));

  // Sort by count (descending)
  tagArray.sort((a, b) => b.count - a.count);

  // Calculate font sizes based on count
  const minCount = Math.min(...tagArray.map((item) => item.count));
  const maxCount = Math.max(...tagArray.map((item) => item.count));
  const minSize = 0.8;
  const maxSize = 1.8;

  const calculateSize = (count) => {
    if (maxCount === minCount) return (minSize + maxSize) / 2;
    return (
      minSize +
      ((count - minCount) / (maxCount - minCount)) * (maxSize - minSize)
    );
  };

  return (
    <div className="tag-heatmap">
      <h2 className="nav-title">Tags</h2>
      <div className="tag-cloud">
        {tagArray.map(({ tag, count }) => (
          <Link
            key={tag}
            to={`/blogs?tag=${tag}`}
            className="tag-cloud-item"
            style={{ fontSize: `${calculateSize(count)}rem` }}
          >
            {tag} <span className="tag-count">{count}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TagHeatmap;
