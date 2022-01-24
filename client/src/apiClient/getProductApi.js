import axiosClient from "./axiosClient";

const getProductApi = {
  get(id) {
    const url = `/api/products/${id}`;
    return axiosClient.get(url, {
      headers: {
        "content-type": "application/json",
      },
    });
  },
};
export default getProductApi;
