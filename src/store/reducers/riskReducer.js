import * as actionTypes from "../actionTypes";
import {find} from "lodash";
import _ from "lodash"

const initialState = [

]

const riskReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SUBMIT_ANSWER:
            // debugger;
            if(_.find(state, {riskId: action.data.riskId})) {
                
            for (var i in state) {
                
                if (state[i].riskId === action.data.riskId) {
                  state[i].diagnosticId = action.data.diagnosticId;
                  state[i].selectedResponse = action.data.selectedResponse;
                  state[i].score = action.data.score;
                  state[i].riskId = action.data.riskId;
                //   console.log(state);
               
                   break; //Stop this loop, we found it!
                }
              }
              return state
            }
            else{
                return[...state, action.data]
            }
            // return[...state, action.data]
        
        case actionTypes.RESET_RISKS:

            return [];
        default:
            return state;

    }

}

export default riskReducer;