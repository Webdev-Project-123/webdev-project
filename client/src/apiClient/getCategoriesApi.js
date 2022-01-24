import axiosClient from "./axiosClient";

const getProductApi = {
  get(name) {
    const url = `/api/categories/${name}`;
    return axiosClient.get(url, {
      header: {
        "content-type": "application/json",
      },
    });
  },
};
export default getProductApi;
