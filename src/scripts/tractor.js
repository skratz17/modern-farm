import { addPlant } from './field.js';
import { getSeedFactoryFunction } from './seeds/seedsHelpers.js';

export const plantSeeds = plan => {
  plan.forEach(row => {
    row.forEach(plantType => {
      try {
        const seedFactoryFunction = getSeedFactoryFunction(plantType);
        addPlant(seedFactoryFunction());
      }
      catch(e) {
        console.log(e.message);
      }
    });
  });
};