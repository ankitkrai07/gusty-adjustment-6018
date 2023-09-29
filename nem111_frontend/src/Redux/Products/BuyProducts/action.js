import axios from "axios";
import {
  PRODUCT_FAILURE,
  PRODUCT_REQUEST,
  PRODUCT_SUCCESS,
} from "./actionTypes";

let url = "https://nice-rose-elephant-wrap.cyclic.cloud";

export const getProducts = (allParams) => (dispatch) => {
  const queryParams = new URLSearchParams(allParams.params).toString();

  dispatch({ type: PRODUCT_REQUEST });
  axios
    .get(`${url}/property/?${queryParams}`)
    .then((res) => {
      dispatch({ type: PRODUCT_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: PRODUCT_FAILURE });
    });
};
