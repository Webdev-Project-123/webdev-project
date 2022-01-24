import axiosClient from "./axiosClient";

const forgotPasswordApi = {
  post(request) {
    const url = "/api/auth/forgot-password";
    return axiosClient.post(url, request, {
      headers: {
        "content-type": "application/json",
      },
    });
  },
};
export default forgotPasswordApi;
