import { usePlantCounts } from './QuantityTableDataProvider.js';
import { QuantityTableRow } from './QuantityTableRow.js';

export const QuantityTable = harvest => {
  const domNode = document.querySelector('.container');

  const counts = usePlantCounts(harvest);

  const tableRowsHTML = counts.map(QuantityTableRow).join('\n');

  domNode.innerHTML += `
    <table class="quantity-table">
      <thead class="quantity-table-header">
        <tr class="quantity-table-header-row">
          <th class="quantity-table-header-row__content">Food</th>
          <th class="quantity-table-header-row__content">Quantity</th>
        </tr>
      </thead>
      <tbody class="quantity-table-body">
        ${tableRowsHTML}
      </tbody>
    </table>
  `;
};