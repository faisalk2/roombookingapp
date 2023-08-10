import axios from "axios";
import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
  REGISTER_USER_FAILURE,
  REGISTER_USER_LOADING,
  REGISTER_USER_SUCCESS,
} from "./type";

export const registerUser = (payload: any) => (dispatch: any) => {
  dispatch({ type: REGISTER_USER_LOADING });
  return axios
    .post("https://rdlab-production.up.railway.app/register", payload)
    .then((res) => dispatch({ type: REGISTER_USER_SUCCESS }))
    .catch((e) => dispatch({ type: REGISTER_USER_FAILURE }));
};

export const loginUser = (payload: any) => (dispatch: any) => {
  dispatch({ type: LOGIN_USER_LOADING });
  return axios
    .post("https://rdlab-production.up.railway.app/login", payload)
    .then((res) => dispatch({ type: LOGIN_USER_SUCCESS, payload: res.data }))
    .catch((error) => dispatch({ type: LOGIN_USER_FAILURE }));
};

export const logoutUser=(payload:any)=>(dispatch:any)=>{
  dispatch({type:LOGOUT_USER_SUCCESS})
}