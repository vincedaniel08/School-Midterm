import * as actionTypes from "../types";

const initialState ={
    displayName:"",
    counter: null,
    error: null, 
    students: [],
    profile: "",
    comments: [],
}

 function userReducer(state=initialState, action)
{
    switch(action.type)
    {
        case actionTypes.SET_STUDENT: 
        return{
            ...state,
            students: action.payload,
        };

        case actionTypes.SET_PROFILE:
            return {
                ...state,
                profile: action.payload,
            };
            case actionTypes.SET_COMMENT:
            return {
                ...state,
                comments: action.payload,
            };
        default:
            return{
                ...state,
            }
    }
}

export default userReducer;