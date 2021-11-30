import * as actionTypes from "../types";

const initialState = {
    isDarkMode: false,
    lang: "en",
    tab: 1,
    profile: false,
    //content: "",

};


function uiReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.SET_THEME:
            return {
                ...state,
                isDarkMode: action.payload,
            };
        case actionTypes.SET_LANG:
            return {
                ...state,
                lang: action.payload,
            };
        case actionTypes.SET_TAB:
            return {
                ...state,
                tab: action.payload,
            };
        case actionTypes.SET_PROFILE:
            return {
                ...state,
                profile: action.payload,
            };

        default:
            return {
                ...state,
            }
    }
}

export default uiReducer;