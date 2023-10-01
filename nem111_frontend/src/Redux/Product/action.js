import axios from "axios";
import {
  ADD_NEW_PRODUCT,
  DELETE_PRODUCT_SUCCESS,
  FETCH_FAILURE,
  FETCH_REQUEST,
  GET_FETCH_SUCCESS,
  POST_FETCH_SUCCESS,
} from "./actionType";
// import { config } from "dotenv";

import config from "../../config";

// products

export const postProduct = (newData) => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  axios
    .post(`${config.REACT_APP_SERVER}/property/add`, newData)
    .then((res) => {
      // console.log(res);
      dispatch({ type: POST_FETCH_SUCCESS });
      dispatch({ type: ADD_NEW_PRODUCT, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE, payload: err });
    });
};

export const getProduct = () => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  return axios
    .get(`${config.REACT_APP_SERVER}/property/`)
    .then((res) => {
      dispatch({ type: GET_FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

export const deleteProduct = (productId) => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  axios
    .delete(`${config.REACT_APP_SERVER}/property/delete/${productId}`)
    .then(() => {
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
      dispatch(getProduct());
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};
