import axiosClient from "./axiosClient";

const uploadProductApi = {
  post(payload) {
    const url = "/api/upload/add";
    return axiosClient.post(url, payload, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
  },
};

export default uploadProductApi;
