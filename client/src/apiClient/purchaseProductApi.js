import axiosClient from "./axiosClient";

const purchaseProductApi = {
  put(id, payload) {
    const url = `/api/cart/${id}/purchased`;
    return axiosClient.put(url, payload, {
      headers: {
        "content-type": "application/json",
      },
    });
  },
};

export default purchaseProductApi;
