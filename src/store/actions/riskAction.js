import * as actionTypes from "../actionTypes";s

export const submitAnswer = (data) => {
    return {
        type: actionTypes.SUBMIT_ANSWER,
        data,
    }
}

