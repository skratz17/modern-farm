const plants = [];

export const addPlant = seed => {

  // if array, add all seeds in array separately to the plants array
  if(Array.isArray(seed)) {
    return plants.push(...seed);
  }

  plants.push(seed);
};

/**
 * Return an array of all plant objects in the field.
 */
export const usePlants = () => {
  return plants.slice();
};

/**
 * Return an array of all plant objects in the field, sorted alphabetically and case-insensitively by plant.type.
 */
export const usePlantsSorted = () => {
  const sortedPlants = plants.slice();

  sortedPlants.sort((plantA, plantB) => 
    plantA.type.toLowerCase().localeCompare(plantB.type.toLowerCase())
  );

  return sortedPlants;
};