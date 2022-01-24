import axiosClient from "./axiosClient";

const deleteUserCartApi = {
  delete(id, payload) {
    const url = `/api/cart/${id}/delete`;
    return axiosClient.delete(url, {
      data: payload,
      headers: { "content-type": "application/json" },
    });
  },
};

export default deleteUserCartApi;
