import * as actionTypes from "../types";

export const toggleProfile = (profile) => async (dispatch) =>
{
    try{
      localStorage.setItem("profile",profile);
        dispatch({type: actionTypes.SET_PROFILE, payload : profile});
    }catch(err){
      dispatch({ type: actionTypes.USER_ERROR, payload: err });
    }
};

export const getStudent = (students) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_STUDENT, payload: students });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const getComment = (studentName) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_COMMENT, payload: studentName });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const getSubComment = (studentName,commentEmail) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_SUB_COMMENT, payload: studentName,commentEmail });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const findStudent = (studentName) => async (dispatch) => {
  try {
    
    dispatch({ type: actionTypes.FIND_STUDENT, payload: studentName });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const addComment = (comments) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ADD_COMMENT, payload: comments });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};

export const addSubComment = (subComments,id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ADD_SUB_COMMENT, payload: subComments,id });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};


export const editRating = (students) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.EDIT_RATING, payload: students });
  } catch (err) {
    dispatch({ type: actionTypes.USER_ERROR, payload: err });
  }
};
