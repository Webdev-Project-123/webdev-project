import axiosClient from "./axiosClient";

const getBoughtListApi = {
  get(id) {
    const url = `/api/bought/${id}`;
    return axiosClient.get(url, {
      headers: {
        "content-type": "application/json",
      },
    });
  },
};

export default getBoughtListApi;
