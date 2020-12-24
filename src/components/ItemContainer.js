import React, { useState } from "react";
import { connect } from "react-redux";
import { buyBook, buyPen } from "../redux";

const ItemContainer = ({ item, buyItem }) => {
  return (
    <div>
      <h2>Item No : {item} </h2>
      <button onClick={buyItem}>Buy Item</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.book
    ? state.book.numOfBooks
    : state.pen.numOfPens;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.book
    ? () => dispatch(buyBook())
    : () => dispatch(buyPen());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
// export default connect(null, mapDispatchToProps)(ItemContainer);
