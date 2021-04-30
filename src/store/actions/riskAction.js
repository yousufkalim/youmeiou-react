import * as actionTypes from "../actionTypes";

export const submitAnswer = (data) => {
    return {
        type: actionTypes.SUBMIT_ANSWER,
        data,
    }
}

