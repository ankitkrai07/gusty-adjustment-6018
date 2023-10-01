import {
  ADD_NEW_USERS,
  DELETE_PRODUCT_SUCCESS,
  FETCH_FAILURE,
  FETCH_REQUEST,
  GET_FETCH_SUCCESS,
  POST_FETCH_SUCCESS,
} from "./actionType";

const initialState = {
  user: [],
  isLoading: false,
  isError: false,
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_FAILURE:
      return { ...state, isLoading: false, isError: false };
    case POST_FETCH_SUCCESS:
      return { ...state, isLoading: false };
    case GET_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        sales: payload,
        user: payload,
      };

    case ADD_NEW_USERS:
      return {
        ...state,
        isLoading: false,
        user: [...state.user, payload],
      };
    case DELETE_PRODUCT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        user: state.user.filter((el) => el.id !== payload),
      };
    default:
      return state;
  }
};
