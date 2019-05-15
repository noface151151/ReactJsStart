import * as actionTypes from "./actionTypes";
import {
  BASE_URL
} from "../../shared/AppConfig";
import axios from "axios";
import * as cookieService from '../../Service/cookieservice';
import {
  Permission_Get_Success
} from './permission';

export const authSuccess = data => {
  // localStorage.setItem("token", data.token);
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: data.token,
    username: data.username,
    // permision: data.permision
  };
};
export const AutoLoginSuccess = data => {
  //  localStorage.setItem("token", data.token);
  return {
    type: actionTypes.AUTH_AUTOLOGIN_SUCCESS,
    token: cookieService.getCookie("tokenInfo"),
    username: data.username,
    permision: data.permision
  };
};
export const authFail = () => {
  // localStorage.removeItem("token");
  //cookieService.eraseCookie("tokenInfo");
  return {
    type: actionTypes.AUTH_FAIL
  };
};

export const authLogout = () => {
  // localStorage.removeItem("token");
  //cookieService.eraseCookie("tokenInfo");
  return {
    type: actionTypes.AUTH_LOGOUT
  }
};


export const logout = () => {
  return dispatch => {
    axios
      .post(`${BASE_URL}/Token/Logout`)
      .then(resp => {
        // console.log(resp);
        dispatch(authLogout());
      })
      .catch(err => {
        console.log(err);

      });
  }

};



export const login = (username, password) => {
  return dispatch => {
    const authData = {
      UserName: username,
      Password: password
    };
    dispatch(logout());
    // axios.defaults.withCredentials = true;
    axios
      .post(`${BASE_URL}/Token/GetToken`, authData)
      .then(resp => {
        console.log(resp);
        dispatch(authSuccess(resp.data));
        axios
          .get("http://localhost:51520/api/Values/GetPermission", {
            isRequiredAuth: true
          })
          .then(resp => {
            dispatch(Permission_Get_Success(resp.data))
          })
          .catch(error => {
            console.log(error);
          });
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
      .get(`${BASE_URL}/Values/Get`, {
        isRequiredAuth: true
      })
      .then(resp => {
        dispatch(AutoLoginSuccess(resp.data));
        axios
          .get("http://localhost:51520/api/Values/GetPermission", {
            isRequiredAuth: true
          })
          .then(resp => {
            dispatch(Permission_Get_Success(resp.data))
          })
          .catch(error => {
            console.log(error);
          });
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