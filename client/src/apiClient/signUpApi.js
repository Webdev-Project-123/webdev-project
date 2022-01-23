import axiosClient from "./axiosClient";

const signUpApi = {
  post(request) {
    const url = "/api/auth/sign-up";
    return axiosClient.post(url, request, {
      Headers: {
        "content-type": "application/json",
      },
    });
  },
};

export default signUpApi;
