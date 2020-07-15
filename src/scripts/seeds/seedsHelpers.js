import { createAsparagus } from './asparagus.js';
import { createCorn } from './corn.js';
import { createPotato } from './potato.js';
import { createSoybean } from './soybean.js';
import { createSunflower } from './sunflower.js';
import { createWheat } from './wheat.js';

/**
 * Given a plant type, return that plant type's corresponding seed object.
 * Throws Error if plant type is not recognized as a valid plant type.
 * @param {String} plantType The name of the plant to obtain the seed for.
 */
export const getSeed = plantType => {
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