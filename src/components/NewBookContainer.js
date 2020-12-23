import React, { useState } from "react";
import { connect } from "react-redux";
import { buyBook } from "../redux";

const NewBookContainer = ({ numOfBooks, buyBook }) => {
  const [number, setNumber] = useState(1);
  return (
    <div>
      <h2>Available Books (Action Payload) : {numOfBooks} </h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      ></input>
      <button onClick={ () => buyBook(number)}>Buy {number} Book</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    numOfBooks: state.book.numOfBooks,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyBook: number => dispatch(buyBook(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBookContainer);
