# mavhungu2.github.io

Business profile site for Isaac Mpharalala, served by GitHub Pages at https://mavhungu2.github.io.

## Adding a project

Add an entry to the right group in `js/site-data.js` and put its image in `assets/projects/`. Nothing else needs to change.

## Adding a contact form

Create a form at [Formspree](https://formspree.io), then add a `<form action="https://formspree.io/f/<id>" method="POST">` with labelled fields to the contact section of `index.html`.

## Custom domain

1. Add a `CNAME` file containing the domain, and set the domain under the repo's Settings > Pages.
2. Point the domain's DNS at GitHub Pages (A records for the apex, or a CNAME record to `mavhungu2.github.io` for a subdomain).
3. Update the canonical, `og:url` and `og:image` URLs at the top of `index.html`.
