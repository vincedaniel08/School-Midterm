import * as actionTypes from "../types";

export const studentInfo = (students) => async (dispatch) =>
{
    try{
      
        dispatch({type: actionTypes.SET_STUDENT, payload : students});
    }catch(err){
      console.log(err);
    }
}


