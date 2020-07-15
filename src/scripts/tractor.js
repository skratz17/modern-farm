import { addPlant } from './field.js';

import { createAsparagus } from './seeds/asparagus.js';
import { createCorn } from './seeds/corn.js';
import { createPotato } from './seeds/potato.js';
import { createSoybean } from './seeds/soybean.js';
import { createSunflower } from './seeds/sunflower.js';
import { createWheat } from './seeds/wheat.js';

export const plantSeeds = plan => {
  plan.forEach(row => {
    row.forEach(plantType => {
      try {
        const seed = getSeed(plantType);
        addPlant(seed);
      }
      catch(e) {
        console.log(e.message);
      }
    });
  });
};

/**
 * Given a plant type, return that plant's corresponding seed as generated from one of the factory functions defined in seeds/ directory
 * Throws Error if plant type is not recognized as a valid plant type.
 * @param {String} plantType The name of the plant to grow
 */
const getSeed = plantType => {
  switch(plantType) {
    case 'Asparagus':
      return createAsparagus();
    case 'Corn':
      return createCorn();
    case 'Potato':
      return createPotato();
    case 'Soybean':
      return createSoybean();
    case 'Sunflower':
      return createSunflower();
    case 'Wheat':
      return createWheat();
    default:
      throw new Error(`${plantType} is not a valid plant type.`);
  }
}