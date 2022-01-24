import axiosClient from "./axiosClient";

const getHotProductsApi = {
  get(request) {
    const url = "/api/products/hot";
    return axiosClient.get(request, {
      headers: {
        "content-type": "application/json",
      },
    });
  },
};

export default getHotProductsApi;
