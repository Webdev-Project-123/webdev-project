import axiosClient from "./axiosClient";

const deleteProductApi = {
  delete(payload) {
    const url = "/api/upload/delete";
    return axiosClient.delete(url, {
      data: payload,
      headers: {
        "content-type": "application/json",
      },
    });
  },
};

export default deleteProductApi;
