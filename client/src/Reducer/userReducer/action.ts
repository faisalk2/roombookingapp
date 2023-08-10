import axios from "axios";
import {
  ADD_ROOM_FAILURE,
  ADD_ROOM_LOADING,
  ADD_ROOM_SUCCESS,
  DELETE_ROOM_FAILURE,
  DELETE_ROOM_LOADING,
  DELETE_ROOM_SUCCESS,
  EDIT_ROOM_FAILURE,
  EDIT_ROOM_LOADING,
  EDIT_ROOM_SUCCESS,
  GET_ROOM_FAILURE,
  GET_ROOM_LOADING,
  GET_ROOM_SUCCESS,
} from "./type";

const token = localStorage.getItem("token");

export const addRoom = (payload: any) => (dispatch: any) => {
  dispatch({ type: ADD_ROOM_LOADING });
  return axios
    .post("https://rdlab-production.up.railway.app/postRoom", payload, {
      headers: { token },
    })
    .then((res) => dispatch({ type: ADD_ROOM_SUCCESS }))
    .catch((err) => dispatch({ type: ADD_ROOM_FAILURE }));
};

export const getRoom = (payload: any) => (dispatch: any) => {
  dispatch({ type: GET_ROOM_LOADING });
  return axios
    .get("https://rdlab-production.up.railway.app/getRoom", {
      headers: {
        token,
      },
    })
    .then((res) => {
      return dispatch({ type: GET_ROOM_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      return dispatch({ type: GET_ROOM_FAILURE });
    });
};

export const deleteRoom =
  ({ id }: any) =>
  (dispatch: any) => {
    dispatch({ type: DELETE_ROOM_LOADING });
    return axios
      .delete(`https://rdlab-production.up.railway.app/deleteRoom/${id}`, {
        headers: {
          token,
        },
      })
      .then((res) => dispatch({ type: DELETE_ROOM_SUCCESS }))
      .catch((er) => dispatch({ type: DELETE_ROOM_FAILURE }));
  };

export const editRoom =
  ({ form, id }: any) =>
  (dispatch: any) => {
    dispatch({ type: EDIT_ROOM_LOADING });
    return axios
      .patch(`https://rdlab-production.up.railway.app/editRoom/${id}`, form, {
        headers: {
          token,
        },
      })
      .then((res) => dispatch({ type: EDIT_ROOM_SUCCESS }))
      .catch((er) => dispatch({ type: EDIT_ROOM_FAILURE }));
  };
