import axiosClient from "./axiosClient";

const searchProductApi = {
  get(name) {
    const url = "/api/search/products?name=${name}";
    return axiosClient.get(url, {
      headers: {
        "content-type": "application/json",
      },
    });
  },
};

export default searchProductApi;
