import escape from '../utils/escapeHTML.js';

export const CatalogItem = item => {
  const { type, id, icon } = item;

  return `
    <section id=${id} class="plant">
      <img src=${encodeURI(icon)}>
    </section>
  `;
};