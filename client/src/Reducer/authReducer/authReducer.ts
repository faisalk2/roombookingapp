import {
  LOGIN_USER_FAILURE,
  LOGIN_USER_LOADING,
  LOGIN_USER_SUCCESS,
  LOGOUT_USER_SUCCESS,
} from "./type";

const token = localStorage.getItem("token");
const name = localStorage.getItem("name");
const email = localStorage.getItem("email");

const initialData = {
  isLoading: false,
  isError: false,
  token: token ?? null,
  name: name ?? null,
  email: email ?? email,
};

export const authReducer = (state = initialData, { type, payload }: any) => {
  switch (type) {
    case LOGIN_USER_LOADING: {
      return { ...state, isLoading: true };
    }
    case LOGIN_USER_SUCCESS: {
      localStorage.setItem("token", payload.token);
      localStorage.setItem("name", payload.name);
      localStorage.setItem("email", payload.email);

      return {
        ...state,
        token: payload.token,
        name: payload.name,
        email: payload.email,
        isLoading: false,
      };
    }
    case LOGIN_USER_FAILURE: {
      return { ...state, isError: true, isLoading: false };
    }
    case LOGOUT_USER_SUCCESS: {
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      localStorage.removeItem("email");

      return {
        ...state,
        isError: false,
        isLoading: false,
        token: null,
        name: null,
        email: null,
      };
    }

    default: {
      return state;
    }
  }
};
