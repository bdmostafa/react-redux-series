const redux = require("redux");
const reduxLogger = require("redux-logger");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_BOOK = "BUY_BOOK";
const BUY_PEN = "BUY_PEN";

function buyBook() {
  return {
    type: BUY_BOOK,
    info: "1st redux action",
  };
}

function buyPen() {
  return {
    type: BUY_PEN,
  };
}

const initialBookState = {
  numOfBooks: 10,
};

const initialPenState = {
  numOfPens: 5,
};

const bookReducer = (state = initialBookState, action) => {
  switch (action.type) {
    case BUY_BOOK:
      return {
        ...state,
        numOfBooks: state.numOfBooks - 1,
      };
    default:
      return state;
  }
};

const penReducer = (state = initialPenState, action) => {
  switch (action.type) {
    case BUY_PEN:
      return {
        ...state,
        numOfPens: state.numOfPens - 1,
      };
    default:
      return state;
  }
};

// combineReducers assign in rootReducer
const rootReducer = combineReducers({
  book: bookReducer,
  pen: penReducer,
});

// Hold application state
const store = createStore(rootReducer, applyMiddleware(logger));

// Allow access to state via getState()
console.log('Initial state', store.getState())

// Register listeners via subscribe(listener)
// const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
const unsubscribe = store.subscribe(() => {});

// Allow state to be updaqted via dispatch(action)
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyBook());
store.dispatch(buyPen());

// Handles unregistering of listeners via the function returned by subscribe(listener)
unsubscribe()
