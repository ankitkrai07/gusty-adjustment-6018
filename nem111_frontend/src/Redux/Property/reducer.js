
import { PROPERTY_FAILURE, PROPERTY_REQUEST, PROPERTY_SUCCESS } from "./actionTypes";

const initialData = {
  isLoading: false,
  isError: false,
  propertys: [],
};

export const reducer = (state = initialData, { type, payload }) => {
  switch (type) {
    case PROPERTY_REQUEST: {
      return { ...state, isLoading: true };
    }
    case PROPERTY_SUCCESS: {
      return { ...state, propertys: payload, isLoading: false };
    }
    case PROPERTY_FAILURE: {
      return { ...state, isLoading: false, isError: true };
    }

    default: {
      return state;
    }
  }
};
