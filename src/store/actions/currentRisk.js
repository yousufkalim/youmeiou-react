import endPoints from "../../globals/Constants";
import * as actionTypes from "../actionTypes";

export const currentDiagnostic = (data) => {
    return {
        type: actionTypes.CURRENT_RISK,
        data
    }
}