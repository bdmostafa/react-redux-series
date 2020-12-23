import { BUY_PEN } from "./penTypes"

const initialState = {
    numOfPens: 5
}

const penReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PEN:
            return {
                ...state,
                numOfPens: state.numOfPens - 1
            }
        default:
            return state
    }
}

export default penReducer