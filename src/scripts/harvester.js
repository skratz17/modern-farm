export const harvestPlants = plants => {
  const seeds = [];

  plants.forEach(plant => {
    const { output, type } = plant;

    const harvestCount = type === 'Corn' ? output / 2 : output;

    for(let i = 0; i < harvestCount; i++) {
      seeds.push({ ...plant });
    }
  });

  return sortPlants(seeds);
};

/**
 * Given an array of plant objects, returns a new array of plants sorted alphabetically by type, case-insensitive.
 * @param {Array} plants Array of plant objects to sort 
 */
const sortPlants = plants => {
  const sortedPlants = plants.slice();

  sortedPlants.sort((plantA, plantB) => 
    plantA.type.toLowerCase().localeCompare(plantB.type.toLowerCase())
  );

  return sortedPlants;
};