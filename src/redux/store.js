import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";


import uiReducer from "./reducers/uiReducer";


const initialState = {};
const middleware = [thunk];
const reducers = combineReducers({
    // add reducer here
    ui: uiReducer,
 
  

});

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

 const enhancer = composeEnhancers(applyMiddleware(...middleware));
 const store = createStore(reducers, initialState, enhancer);

 export default store;