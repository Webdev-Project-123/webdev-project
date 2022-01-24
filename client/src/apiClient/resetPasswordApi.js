import axiosClient from "./axiosClient";

const resetPasswordApi = {
  post(token, payload) {
    const url = `/api/auth/${token}`;
    return axiosClient.post(url, payload, {
      header: {
        "content-type": "application/json",
      },
    });
  },
};

export default resetPasswordApi;
