import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { buyBook } from '../redux';

const HooksBookContainer = () => {
    const numOfBooks = useSelector(state => state.book.numOfBooks)
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Books Available (from Hooks) - {numOfBooks} </h2>
            <button onClick={() => dispatch(buyBook())}>Buy Book</button>
        </div>
    );
};

export default HooksBookContainer;