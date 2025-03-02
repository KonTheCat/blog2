# KonTheCat's Box - Gatsby Blog

A static Gatsby blog site that uses Markdown files for content. This project was created to replace a Ghost blog with a simpler, more maintainable solution.

## Features

### Content Structure

- **Blog Posts**: Main content written in Markdown files with frontmatter for metadata
- **Author Page**: Information about the blog author
- **Quotes Page**: Collection of favorite quotes
- **Quick Things Page**: Short-form content and quick notes

### Site Organization

- **Home Page**: Displays featured blog posts
- **Blogs Page**: Shows all blog posts with hierarchical navigation by year/month
- **Dark Theme**: Modern dark aesthetic with clean typography and spacing

### Technical Features

- **Markdown Support**: Content is written in Markdown files for easy editing
- **Image Handling**: Support for featured images and inline images in blog posts
- **Responsive Design**: Mobile-friendly layout that adapts to different screen sizes
- **Centralized Configuration**: Site metadata and tagline managed in gatsby-config.js

## Project Structure

```
blog2/
├── gatsby-browser.js     # Browser-specific configurations
├── gatsby-config.js      # Gatsby configuration and site metadata
├── gatsby-node.js        # Gatsby Node API implementations for page creation
├── src/
│   ├── components/       # Reusable React components
│   │   ├── blog-navigation.js  # Hierarchical blog navigation component
│   │   └── layout.js     # Main layout component with header and footer
│   ├── config/           # Site-wide configuration
│   │   └── site-config.js # Configuration values
│   ├── content/          # Markdown content files
│   │   ├── author.md     # Author page content
│   │   ├── quotes.md     # Quotes page content
│   │   ├── quick-things.md # Quick things page content
│   │   └── *.md          # Blog post files
│   ├── images/           # Image assets
│   │   └── blog/         # Blog post images
│   ├── pages/            # Page components
│   │   ├── 404.js        # Not found page
│   │   ├── author.js     # Author page component
│   │   ├── blogs.js      # All blogs listing page
│   │   ├── index.js      # Home page component
│   │   ├── quick-things.js # Quick things page component
│   │   └── quotes.js     # Quotes page component
│   ├── styles/           # CSS styles
│   │   └── global.css    # Global styles
│   └── templates/        # Page templates
│       └── blog-post.js  # Blog post template
└── package.json          # Project dependencies and scripts
```

## Content Management

### Adding a New Blog Post

1. Create a new Markdown file in the `src/content/` directory
2. Add frontmatter with title, date, slug, and optional featured image
3. Set `featured: true` in frontmatter to display the post on the home page
4. Write your content in Markdown format

Example frontmatter:

```markdown
---
title: "My New Blog Post"
date: "2025-03-02"
slug: "/my-new-post"
featuredImage: "../images/blog/my-image.jpg"
featured: true
---
```

### Adding Images

1. Place images in the `src/images/blog/` directory
2. Reference them in your Markdown content or frontmatter

## Development

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Available Scripts

- `npm run develop` - Start the development server
- `npm run build` - Build the production-ready site
- `npm run serve` - Serve the production build locally
- `npm run clean` - Clean the cache and public directories

## Technologies Used

- Gatsby.js
- React
- GraphQL
- Markdown (with gatsby-transformer-remark)
- CSS

## Poetic Summary

### Based on the AI log so far, GPT-4o had this to say:

In the realm of corporate dreams, where code and pixels dance,
A saga unfolds, of a blog's grand advance.
In the year twenty-twenty-five, on a March morning bright,
A Gatsby blog was born, replacing Ghost's spectral light.

With Markdown scrolls and structured halls, the project took its form,
Components and templates crafted, a digital norm.
A layout reusable, a template for each post,
Global CSS adorned, a site to proudly boast.

Pages unfurled like banners, home, blog, and author’s tale,
A 404 for wanderers, when paths would sometimes fail.
Content flowed in Markdown, with metadata's grace,
Images handled deftly, each post found its place.

Yet the journey was not over, enhancements came in waves,
Featured images and styling, the blog's visage it saves.
Dark mode's shadowy embrace, a theme both bold and stark,
Hover effects and animations, a user’s journey to embark.

The blog moved to the root, aesthetics redefined,
A modern layout emerged, with shadows intertwined.
Navigation grew in stature, hierarchical and grand,
A dedicated blogs page, a well-organized land.

In the footer, a line of wit, "Vibed with Claude 3.7 Sonnet,"
A nod to the digital muse, in this corporate sonnet.
Thus, the blog stands ready, a testament to code,
In the epic of the internet, its story is bestowed..
