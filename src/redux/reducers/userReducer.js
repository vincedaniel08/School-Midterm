import * as actionTypes from "../types";

const initialState ={
    displayName:"",
    counter: null,
    error: null, 
}

 function userReducer(state=initialState, action)
{
    switch(action.type)
    {
        case actionTypes.SET_NAME: 
        return{
            ...state,
            displayName: action.payload,
            counter: state.counter + 1,
        };

        case actionTypes.SET_NAME_NO_COUNTER: 
        return{
            ...state,
            displayName: action.payload,
        };

        case actionTypes.USER_ERROR: 
        return{
            ...state,
            error: action.payload,
        };
        default:
            return{
                ...state,
            }
    }
}

export default userReducer;