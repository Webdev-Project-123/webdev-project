import axiosClient from "./axiosClient";

const signUpApi = {
  post(request) {
    const url = "/api/auth/sign-up";
    return axiosClient.post(url, request, {
      headers: {
        "content-type": "application/json",
      },
    });
  },
};

export default signUpApi;
