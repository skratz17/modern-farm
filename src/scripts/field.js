const plants = [];

export const addPlant = seed => {

  // if array, add all seeds in array separately to the plants array
  if(Array.isArray(seed)) {
    return plants.push(...seed);
  }

  plants.push(seed);
};

export const usePlants = () => {
  return plants.slice();
};

export const usePlantsSorted = () => {
  return sortPlants(plants);
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