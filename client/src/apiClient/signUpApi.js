import axiosClient from "./axiosClient";

const signUpApi = {
  post(payload) {
    // const url = "/api/auth/signup";
    const url = "/sign-up";
    return axiosClient.post(url, payload);
  },
};

export default signUpApi;
