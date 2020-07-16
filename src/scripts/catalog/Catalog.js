import { QuantityTable } from '../quantityTable/QuantityTable.js';
import { CatalogItem } from './CatalogItem.js';

const domNode = document.querySelector('.container');

export const Catalog = harvest => {
  const harvestHTML = harvest.map(CatalogItem).join('\n');

  domNode.innerHTML += harvestHTML;
}; 