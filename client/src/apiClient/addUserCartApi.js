import axiosClient from "./axiosClient";

const addUserCartApi = {
  put(id, payload) {
    const url = `/api/cart/${id}/add`;
    return axiosClient.put(url, payload, {
      header: {
        "content-type": "application/json",
      },
    });
  },
};
export default addUserCartApi;
