import * as actionTypes from "../actionTypes";

const initialState = {
    now: 7,
    name: "",
    categoryId: 0,
    familyId: 0,
    serialNo: "",
    explanation: "",
    shortExplanation:"",
    currentIndex: 0,
    diagnosticId: 0,
    questionsCount: 0,
    

}

const currentRiskReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.CURRENT_RISK:
            return {
                ...initialState,
                now: action.data.now,
                name: action.data.diagnosticName,
                categoryId: action.data.categoryId,
                familyId: action.data.familyId,
                serialNo: action.data.serialNo,
                explanation: action.data.explanation,
                shortExplanation: action.data.shortExplanation,
                diagnosticId: action.data.diagnosticId,
                currentIndex: action.data.currentIndex,
                questionsCount: action.data.questionsCount
            }
        case actionTypes.CLEAR_RISK:
            return {
                now: 7,
                name: "",
                categoryId: 0,
                familyId: 0,
                serialNo: "",
                explanation: "",
                shortExplanation:"",
                currentIndex: 0,
    diagnosticId: 0,
    questionsCount: 0,

                
            
            }
        default:
            return initialState;
    }
}

export default currentRiskReducer;