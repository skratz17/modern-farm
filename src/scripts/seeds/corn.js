export const createCorn = () => {
  const cornObj = {
    type: 'Corn',
    height: 180,
    output: 6
  };

  return [
    cornObj,
    Object.assign({}, cornObj)
  ];
};