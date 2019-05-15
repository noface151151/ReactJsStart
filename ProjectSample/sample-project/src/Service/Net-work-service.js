import axios from "axios";
import * as cookieService from '../Service/cookieservice';

export default {
  setupInterceptors: store => {
    // Add a response interceptor
    axios.defaults.withCredentials = true;
    axios.interceptors.response.use(
      function (response) {
        return response;
      },
      function (error) {
        // console.log(error.response.status)
        //catches if the session ended!
        if (error.response.status === 401) {
         // localStorage.removeItem("token");
        // cookieService.eraseCookie("tokenInfo");
        //  window.location = "/LogIn";
        } else {
          return Promise.reject(error);
        }
      }
    );

    // axios.interceptors.request.use(
    //   config => {
    //     if (!config.headers.Authorization && config.isRequiredAuth) {
    //       const token = localStorage.getItem("token");
    //      // config.headers.Authorization = `Bearer ${token}`;
    //     }

    //     return config;
    //   },
    //   error => Promise.reject(error)
    // );
  }
};