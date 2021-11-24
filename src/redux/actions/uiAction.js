import * as actionTypes from "../types";

export const toggleTheme = (isDarkMode) => async (dispatch) =>
{
    try{
      localStorage.setItem("isDarkMode",isDarkMode);
        dispatch({type: actionTypes.SET_THEME, payload : isDarkMode});
    }catch(err){
      console.log(err);
    }
}


export const getTheme = () => async (dispatch) =>
{
    try{
        const isDarkMode =
        localStorage.getItem("isDarkMode") === "true" ? true : false;
        dispatch({type: actionTypes.SET_THEME, payload : isDarkMode});
    }catch(err){
      console.log(err);
    }
};

export const setLang = (lang) => async (dispatch) =>
{
    try{
       
        localStorage.setItem("lang",lang);
        dispatch({type: actionTypes.SET_LANG, payload : lang });
    }catch(err){
      console.log(err);
    }
};

export const getLang = () => async (dispatch) =>
{
    try{
        const lang =
        localStorage.getItem("lang") || "en";
        dispatch({type: actionTypes.SET_LANG, payload : lang });
    }catch(err){
      console.log(err);
    }
};

