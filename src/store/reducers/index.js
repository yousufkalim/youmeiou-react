import {combineReducers} from "redux";
import user from "./user";
import diagnosticList from "./diagnosticList";
import riskReducer from "./riskReducer";

const rootReducer =  combineReducers({user, diagnosticList, riskReducer});

export default rootReducer;