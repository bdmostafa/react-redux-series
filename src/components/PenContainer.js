import React from "react";
import { connect } from "react-redux";
import { buyPen } from "../redux";

const PenContainer = ({numOfPens, buyPen}) => {
  return (
    <div>
      <h2>Available Pens : {numOfPens} </h2>
      <button onClick={buyPen}>Buy Pen</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfPens: state.pen.numOfPens,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyPen: () => dispatch(buyPen()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PenContainer);
