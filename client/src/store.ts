import { legacy_createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./Reducer/authReducer/authReducer";
import { userReducer } from "./Reducer/userReducer/userReducer";

const combineReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export const store = legacy_createStore(combineReducer, applyMiddleware(thunk));
