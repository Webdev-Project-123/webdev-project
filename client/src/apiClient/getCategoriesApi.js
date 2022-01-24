import axiosClient from "./axiosClient";

const getProductApi = {
  get(categories) {
    const url = `/api/categories/${categories}`;
    return axiosClient.get(url, {
      header: {
        "content-type": "application/json",
      },
    });
  },
};
export default getProductApi;
