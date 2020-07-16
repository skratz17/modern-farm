import escape from '../utils/escapeHTML.js';

export const CatalogItem = item => {
  const { type, id } = item;

  return `
    <section id=${id} class="plant">${escape(type)}</section>
  `;
};