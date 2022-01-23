import axios from "axios";
import queryString from "query-string";

const axiosClient = axios.create({
  // baseURL: "https://wordy-library.vercel.app/api/",
  baseURL: "http://localhost:5000/",
  // baseURL: "https://b05f-14-250-169-69.ngrok.io",
  headers: {
    "current-type": "json",
  },
  paramsSerializer: (param) => queryString.stringify(param),
});

axiosClient.interceptors.request.use(
  function (config) {
    const accessToken = window.localStorage.getItem("accessToken");
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (res) {
    if (res && res.data) {
      return res.data;
    } else return res;
  },
  function (err) {
    throw err;
  }
);

export default axiosClient;
