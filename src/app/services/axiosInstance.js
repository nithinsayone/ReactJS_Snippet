import axios from "axios";

/*global SERVICE_URL */
/*eslint no-undef: "error"*/

const axiosInstance = axios.create({
  baseURL: SERVICE_URL,
  timeout: 2000,
  withCredentials: true,
});


/**
 * request interceptor definition.
 * adds the custom request header Auth token if available.
 */
axiosInstance.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    /*global Promise */
    /*eslint no-undef: "error"*/
    return Promise.reject(error.response);
  }
);
export { axiosInstance };