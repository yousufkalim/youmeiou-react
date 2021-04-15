import {combineReducers} from "redux";
import user from "./user";
import diagnosticList from "./diagnosticList";

const rootReducer =  combineReducers({user, diagnosticList});

export default rootReducer;