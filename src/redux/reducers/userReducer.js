import * as actionTypes from "../types";

const initialState ={
    displayName:"",
    counter: null,
    error: null, 
    students: []
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

       
        default:
            return{
                ...state,
            }
    }
}

export default userReducer;