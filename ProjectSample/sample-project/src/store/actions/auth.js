import * as actionTypes from "./actionTypes";
import { BASE_URL } from "../../shared/AppConfig";
import axios from "axios";

export const authSuccess = data => {
  localStorage.setItem("token", data.token);
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: data.token,
    username: data.username,
    permision: data.permision
  };
};
export const AutoLoginSuccess = data => {
  //  localStorage.setItem("token", data.token);
  return {
    type: actionTypes.AUTH_AUTOLOGIN_SUCCESS,
    token: localStorage.getItem("token"),
    username: data.username,
    permision: data.permision
  };
};
export const authFail = () => {
  localStorage.removeItem("token");
  return {
    type: actionTypes.AUTH_FAIL
  };
};

export const logout = () => {
  localStorage.removeItem("token");
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

export const login = (username, password) => {
  return dispatch => {
    const authData = {
      UserName: username,
      Password: password
    };
    dispatch(logout());
    axios
      .post(`${BASE_URL}/Token/GetToken`, authData)
      .then(resp => {
        console.log(resp);
        dispatch(authSuccess(resp.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail());
      });
  };
};
export const Autologin = () => {
  return dispatch => {
    axios
      .get(`${BASE_URL}/Values/`, { isRequiredAuth: true })
      .then(resp => {
        dispatch(AutoLoginSuccess(resp.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(authFail());
      });
  };
};

export const setLocation = location => {
  return dispatch => {
    dispatch({
      type: actionTypes.AUTH_SET_LOCATION,
      location: location
    });
  };
};
