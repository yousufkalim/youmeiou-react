import {combineReducers} from "redux";
import user from "./user";
import diagnosticList from "./diagnosticList";
import riskReducer from "./riskReducer";
import currentRisk from "./currentRiskReducer";

const rootReducer =  combineReducers({user, diagnosticList, riskReducer, currentRisk});

export default rootReducer;