import axiosClient from "./axiosClient";

const getUserCartApi = {
  get(id) {
    const url = `/api/cart/${id}`;
    return axiosClient.get(url, {
      headers: {
        "content-type": "application/json",
      },
    });
  },
};

export default getUserCartApi;
