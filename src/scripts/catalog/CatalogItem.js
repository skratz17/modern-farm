import escape from '../utils/escapeHTML.js';

export const CatalogItem = item => {
  const { type } = item;

  return `
    <section class="plant">${escape(type)}</section>
  `;
};