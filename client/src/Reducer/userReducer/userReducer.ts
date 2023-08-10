import { GET_ROOM_FAILURE, GET_ROOM_LOADING, GET_ROOM_SUCCESS } from "./type";

const initialData = {
  isLoading: false,
  isError: false,
  data: [],
};

export const userReducer = (state = initialData, { type, payload }: any) => {
  switch (type) {
    case GET_ROOM_LOADING: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case GET_ROOM_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        data: payload,
      };
    }
    case GET_ROOM_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};
