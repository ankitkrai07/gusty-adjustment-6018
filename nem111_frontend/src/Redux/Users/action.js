import axios from "axios";
import {
  ADD_NEW_USERS,
  DELETE_PRODUCT_SUCCESS,
  FETCH_FAILURE,
  FETCH_REQUEST,
  GET_FETCH_SUCCESS,
  GET_USER_BY_ID_FAILURE,
  GET_USER_BY_ID_REQUEST,
  GET_USER_BY_ID_SUCCESS,
  POST_FETCH_SUCCESS,
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "./actionType";
// import { config } from "dotenv";

import config from "../../config";

// Users

export const postUsers = (newData) => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  axios
    .post(`http://localhost:8080/users`, newData)
    .then((res) => {
      console.log(res);
      dispatch({ type: POST_FETCH_SUCCESS });
      dispatch({ type: ADD_NEW_USERS, payload: res.data });
      dispatch(getUsers());
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

export const getUsers = (id) => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  return axios
    .get(`${config.REACT_APP_SERVER}/users/`)
    .then((res) => {
      // console.log(res.data);
      dispatch({ type: GET_FETCH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

export const getUserById = (userId) => {
  return (dispatch) => {
    dispatch({ type: GET_USER_BY_ID_REQUEST });

    axios
      .get(`${config.REACT_APP_SERVER}/users/${userId}`)
      .then((response) => {
        const userData = response.data;
        dispatch({ type: GET_USER_BY_ID_SUCCESS, payload: userData });
      })
      .catch((error) => {
        dispatch({ type: GET_USER_BY_ID_FAILURE, payload: error });
      });
  };
};

export const deleteUsers = (productId) => (dispatch) => {
  dispatch({ type: FETCH_REQUEST });
  axios
    .delete(`${config.REACT_APP_SERVER}/users/${productId}`)
    .then(() => {
      dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
      dispatch(getUsers());
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: FETCH_FAILURE });
    });
};

export const updateUser = (userData) => {
  return (dispatch) => {
    return axios
      .put(`${config.API_BASE_URL}/users/${id}`, userData)
      .then((response) => {
        dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
        return response; // Return the response for handling in your component
      })
      .catch((error) => {
        dispatch({ type: UPDATE_USER_FAILURE, payload: error });
        throw error; // Throw the error to be handled in your component
      });
  };
};
