import axiosClient from "./axiosClient";

const loginApi = {
  post(payload) {
    const url = "/api/auth/login";
    return axiosClient.post(url, payload, {
      headers: {
        "content-type": "application/json",
      },
    });
  },
  patch(request) {
    const url = "/api/auth/token";
    return axiosClient.patch(url, request, {
      headers: {
        "content-type": "application/json",
      },
    });
  },
};

export default loginApi;
