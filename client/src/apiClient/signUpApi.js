import axiosClient from "./axiosClient";

const signUpApi = {
  post(request) {
    const url = "/api/auth/sign-up";
    // const url = "/sign-up";
    return axiosClient.post(url, request);
  },
};

export default signUpApi;
