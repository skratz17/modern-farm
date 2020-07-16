import { QuantityTableRow } from './QuantityTableRow.js';

export const QuantityTable = harvest => {
  const domNode = document.querySelector('.container');

  const counts = getCounts(harvest);
  const countsArray = Object.keys(counts).map(type => ({ type, count: counts[type] }));

  const tableRowsHTML = countsArray.map(QuantityTableRow).join('\n');

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

/**
 * Given an array of plant objects, return object of the form: { [plant.type]: <count of occurences of that plant in input array> }
 * @param {Array} harvest Array of plant objects
 */
const getCounts = harvest => {
  const counts = {};

  harvest.forEach(plant => {
    const { type } = plant;

    const count = counts[type] ? counts[type] + 1 : 1;
    counts[type] = count;
  });

  return counts;
}