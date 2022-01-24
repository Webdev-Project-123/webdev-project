import axiosClient from "./axiosClient";

const getProductAddList = {
  get(request) {
    const url = "/api/upload";
    return axiosClient.get(request, {
      headers: {
        "content-type": "application/json",
      },
    });
  },
};

export default getProductAddList;
