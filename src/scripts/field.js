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