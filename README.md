### Description

A personal portfolio website built with React. 

### Features

- Fully Responsive
- Multi-Page Layout
- Contact Form With EmailJs
- React-Bootstrap
- Edit Content From One Place

### Setup

Install required dependencies

<pre>npm install</pre>

Start the server

<pre>npm start</pre>

### Deployment

This site is configured to deploy to GitHub Pages using GitHub Actions. The deployment workflow is defined in `.github/workflows/deploy.yml`.

The site uses HashRouter for navigation, which is compatible with GitHub Pages. This ensures that all routes work correctly when deployed to GitHub Pages.

### Content Management

Modify pages content in `src/content_option.js`.

### Development Notes

- The site uses React Router with HashRouter for navigation
- The deployment workflow builds the site and deploys it to the gh-pages branch
- Custom domain configuration is handled by adding a CNAME file to the build directory

### Credits

This site was built using a React portfolio template. Thanks to the original creator for the foundation.
