import { addPlant } from './field.js';
import { getSeed } from './seeds/seedsHelpers.js';

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