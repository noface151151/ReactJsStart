import axios from "axios";

export default {
  setupInterceptors: store => {
    // Add a response interceptor
    axios.interceptors.response.use(
      function(response) {
        return response;
      },
      function(error) {
        // console.log(error.response.status)
        //catches if the session ended!
        if (error.response.status === 401) {
          localStorage.removeItem("token");
          window.location = "/LogIn";
        } else {
          return Promise.reject(error);
        }
      }
    );

    axios.interceptors.request.use(
      config => {
        if (!config.headers.Authorization && config.isRequiredAuth) {
          const token = localStorage.getItem("token");

          config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
      },
      error => Promise.reject(error)
    );
  }
};
