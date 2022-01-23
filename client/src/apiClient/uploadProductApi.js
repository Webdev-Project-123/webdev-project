import axiosClient from "./axiosClient";

const uploadProductApi = {
  post(payload) {
    const url = "/api/upload/add";
    return axiosClient.post(url, payload, {
      Headers: {
        "content-type": "multipart/form-data",
      },
    });
  },
  patch(request) {
    const url = "/api/auth/token";
    return axiosClient.patch(url, request);
  },
};

export default uploadProductApi;
