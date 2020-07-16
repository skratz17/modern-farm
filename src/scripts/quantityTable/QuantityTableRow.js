import escape from '../utils/escapeHTML.js';

export const QuantityTableRow = plant => {
  const { type, count } = plant;

  return `
    <tr class="quantity-table-row">
      <td class="quantity-table-row__content">${escape(type)}</td>
      <td class="quantity-table-row__content">${escape(count)}</td>
    </tr>
  `;
};