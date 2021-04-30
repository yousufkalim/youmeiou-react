import * as actionTypes from "../actionTypes";

const initialState = [

]

const riskReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SUBMIT_ANSWER:
            return[...state, action.data]
        
        case actionTypes.RESET_RISKS:

            return [];
        default:
            return state;

    }

}

export default riskReducer;