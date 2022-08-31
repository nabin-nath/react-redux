const BUY_CAKE = "BUY_CAKE";
const ADD_CAKE = "ADD_CAKE";

const buyCake = () => {
  return {
    type: BUY_CAKE,
  };
};

const addCake = () => {
  return {
    type: ADD_CAKE,
  };
};

export { buyCake, addCake };
