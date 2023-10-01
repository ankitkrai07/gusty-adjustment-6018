import {
  PROPERTY_FAILURE,
  PROPERTY_REQUEST,
  PROPERTY_SUCCESS,
} from "./actionTypes";
import axios from "axios"

export const getProperty = () => (dispatch) => {
  dispatch({ type: PROPERTY_REQUEST });
  return axios
    .get("https://gusty.onrender.com/property")
    .then((res) => {
    //   console.log(res.data);
      dispatch({ type: PROPERTY_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log("property Failure", err);
      dispatch({ type: PROPERTY_FAILURE });
    });
};
