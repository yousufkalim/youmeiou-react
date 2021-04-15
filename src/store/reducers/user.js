import * as actionTypes from "../actionTypes";

const initialState = {
    token: "",
    isLoggedIn: false,
};

const authReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.LOGIN:
            sessionStorage.setItem("token", action.token);
            return {
                ...state, 
                token: action.token,
                isLoggedIn: true,
            }
        case actionTypes.LOGOUT:
            sessionStorage.clear();
            return{
                ...state,
                token: "",
                isLoggedIn: false
            }
       default:
        return state;
    }
}

export default authReducer;
