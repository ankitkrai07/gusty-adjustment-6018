import {
  ADD_NEW_ADMIN,
  ADMIN_LOGIN_FAILURE,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
} from "./actionType";

const initialState = {
  admin: {},
  isAuth: false,
  token: "",
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: true,
        token: payload,
        isLoading: false,
        isError: false,
      };
    case ADMIN_LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    case ADD_NEW_ADMIN:
      return {
        ...state,
        isLoading: false,
      };
    case ADMIN_LOGOUT:
      return initialState;
    default:
      return state;
  }
};
