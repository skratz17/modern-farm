/**
 * Given an array of plant objects, return an array of objects of the form: one object for each different type of plant, each object containing the properties type and count.
 * @param {Array} harvest Array of plant objects
 */
export const usePlantCounts = harvest => {
  const counts = getCounts(harvest);

  const countsArr = Object.keys(counts).map(type => ({ type, count: counts[type] }));

  return countsArr;
};

/**
 * Given an array of plant objects, return object of the form: { [plant.type]: <count of occurences of that plant in input array> }
 * @param {Array} harvest Array of plant objects
 */
const getCounts = harvest => {
  const counts = {};

  harvest.forEach(plant => {
    const { type } = plant;

    const count = counts[type] ? counts[type] + 1 : 1;
    counts[type] = count;
  });

  return counts;
};