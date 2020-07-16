import escape from '../utils/escapeHTML.js';

export const QuantityTableRow = plant => {
  const { type, count } = plant;

  return `
    <tr class="quantity-table-row">
      <td class="quantity-table-row__type">${escape(type)}</td>
      <td class="quantity-table-row__count">${escape(count)}</td>
    </tr>
  `;
};