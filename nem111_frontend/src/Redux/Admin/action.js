import React from "react";
import axios from "axios";
import {
  ADD_NEW_ADMIN,
  ADMIN_LOGIN_FAILURE,
  ADMIN_LOGIN_REQUEST,
  ADMIN_LOGIN_SUCCESS,
  ADMIN_LOGOUT,
} from "./actionType";
import config from "../../config";

const setTokenInLocalStorage = (token) => {
  localStorage.setItem("adminToken", token);
};

// Function to remove the user's token from localStorage
const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("adminToken");
};

export const adminUser = (userData) => (dispatch) => {
  dispatch({ type: ADMIN_LOGIN_REQUEST });

  return axios
    .post(`${config.REACT_APP_SERVER}/admins/login`, userData)
    .then((res) => {
      const { token } = res.data;
      // console.log(id);
      setTokenInLocalStorage(token);
      // localStorage.setItem("id", JSON.stringify(id));
      console.log("login success", res.data);
      dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("login failure", err);
      dispatch({ type: ADMIN_LOGIN_FAILURE });
    });
};

export const createAccount = (payload) => (dispatch) => {
  dispatch({ type: ADMIN_LOGIN_REQUEST });
  return axios
    .post(`${config.REACT_APP_SERVER}/admins/register`, payload)
    .then((res) => {
      console.log("account created", res.data);
      dispatch({ type: ADD_NEW_ADMIN });
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: ADMIN_LOGIN_FAILURE });
    });
};

export const logoutUser = () => (dispatch) => {
  removeTokenFromLocalStorage();
  dispatch({ type: ADMIN_LOGOUT });
};
