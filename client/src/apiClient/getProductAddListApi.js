import axiosClient from "./axiosClient";

const getProductAddListApi = {
  get(request) {
    const url = "/api/upload";
    return axiosClient.get(request, {
      headers: {
        "content-type": "application/json",
      },
    });
  },
};

export default getProductAddListApi;
