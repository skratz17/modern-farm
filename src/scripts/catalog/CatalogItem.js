import escape from '../utils/escapeHTML.js';

export const CatalogItem = item => {
  const { type, id, icon } = item;

  return `
    <section id=${id} class="plant">
      <img class="plant__icon" src=${encodeURI(icon)} alt="${escape(type)}">
    </section>
  `;
};