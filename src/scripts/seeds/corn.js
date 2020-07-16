export const createCorn = () => {
  const cornObj = {
    type: 'Corn',
    height: 180,
    output: 6,
    icon: './assets/corn.png'
  };

  return [
    cornObj,
    Object.assign({}, cornObj)
  ];
};