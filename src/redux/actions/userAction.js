import * as actionTypes from "../types";

export const studentInfo = (students) => async (dispatch) =>
{
    try{
      
        dispatch({type: actionTypes.SET_STUDENT, payload : students});
    }catch(err){
      console.log(err);
    }
}

export const toggleProfile = (profile) => async (dispatch) =>
{
    try{
      localStorage.setItem("profile",profile);
        dispatch({type: actionTypes.SET_PROFILE, payload : profile});
    }catch(err){
      console.log(err);
    }
}

export const commentInfo = (comments) => async (dispatch) =>
{
    try{
      
        dispatch({type: actionTypes.SET_COMMENT, payload : comments});
    }catch(err){
      console.log(err);
    }
}


