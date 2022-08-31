import React from "react";
import { buyCake, addCake } from "../redux";
import { connect } from "react-redux";

function CakeContainer(props) {
  return (
    <>
      <br></br>
      <div>Cakes in Inventory: {props.numOfCakes}</div>
      <br></br>
      <div>
        <button onClick={props.addCake}>Add Cake</button>
      </div>
      <br></br>
      <button onClick={props.buyCake}>Buy Cake</button>
    </>
  );
}

const mapStateToProps = (state) => {
  console.log("state", state);
  return {
    numOfCakes: state.numOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
    addCake: () => dispatch(addCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
