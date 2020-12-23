import React from "react";
import { connect } from "react-redux";
import { buyBook } from "../redux";

const BookContainer = ({numOfBooks, buyBook}) => {
  return (
    <div>
      <h2>Available Books : {numOfBooks} </h2>
      <button onClick={buyBook}>Buy Book</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfBooks: state.book.numOfBooks,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBook: () => dispatch(buyBook()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BookContainer);
