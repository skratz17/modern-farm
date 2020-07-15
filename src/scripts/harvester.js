export const harvestPlants = plants => {
  const seeds = [];

  plants.forEach(plant => {
    const { output, type } = plant;

    const harvestCount = type === 'Corn' ? output / 2 : output;

    for(let i = 0; i < harvestCount; i++) {
      seeds.push({ ...plant });
    }
  });

  return seeds;
};