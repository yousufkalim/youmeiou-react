import {combineReducers} from "redux";
import user from "./user";
import diagnosticList from "./diagnosticList";

export default combineReducers({user, diagnosticList});