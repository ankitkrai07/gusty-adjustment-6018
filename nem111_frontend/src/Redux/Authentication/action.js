import axios from "axios";
import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
  SIGNUP_SUCCESS,
} from "./actionType";

const setTokenInLocalStorage = (token) => {
  localStorage.setItem("token", token);
};

// Function to remove the user's token from localStorage
const removeTokenFromLocalStorage = () => {
  localStorage.removeItem("token");
};

export const loginUser = (userData) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });

  return axios
    .post(`https://nice-rose-elephant-wrap.cyclic.cloud/users/login`, userData)
    .then((res) => {
      const { token } = res.data;
      setTokenInLocalStorage(token);
      console.log("login success", res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("login failure", err);
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const createAccount = (payload) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios
    .post(
      `https://nice-rose-elephant-wrap.cyclic.cloud/users/register`,
      payload
    )
    .then((res) => {
      console.log("account created", res.data);
      dispatch({ type: SIGNUP_SUCCESS });
      return res.data;
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: LOGIN_FAILURE });
    });
};

export const logoutUser = () => (dispatch) => {
  removeTokenFromLocalStorage();
  dispatch({ type: LOGOUT });
};
