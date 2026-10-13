// Renders the project groups from site-data.js into #projects.
// All data is our own, so a template string over known fields is safe.
import { groups } from './site-data.js';

const NEW_TAB = '<span class="visually-hidden"> (opens in a new tab)</span>';

function projectCard({ title, url, description, tags, image }, icons) {
  const [width, height] = icons ? [512, 512] : [1200, 750];
  const action = url
    ? `<a class="btn btn--highlight" href="${url}" target="_blank" rel="noopener">Visit<span class="visually-hidden"> ${title}</span>${NEW_TAB}</a>`
    : '<span class="badge">In development</span>';
  return `
    <li class="project-card${icons ? ' project-card--icon' : ''}">
      <div class="project-media">
        <img src="${image}" alt="" width="${width}" height="${height}" loading="lazy" decoding="async">
      </div>
      <div class="project-body">
        <h4 class="project-title">${title}</h4>
        <p>${description}</p>
        <ul class="tags" aria-label="Built with">${tags.map((tag) => `<li>${tag}</li>`).join('')}</ul>
        <p class="card-action">${action}</p>
      </div>
    </li>`;
}

function renderProjects(container) {
  container.innerHTML = groups
    .map((group) => `
      <h3 class="group-title">${group.title}</h3>
      <ul class="project-grid">${group.projects.map((project) => projectCard(project, group.icons)).join('')}</ul>`)
    .join('');
}

renderProjects(document.getElementById('projects'));
