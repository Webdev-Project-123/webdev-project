import axiosClient from "./axiosClient";

const loginApi = {
  post(payload) {
    const url = "/api/auth/login";
    return axiosClient.post(url, payload);
  },
};

export default loginApi;
