import axiosClient from "./axiosClient";

const deleteProduct = {
  delete(payload) {
    const url = "/api/upload/delete";
    return axiosClient.delete(payload, {
      headers: {
        "content-type": "application/json",
      },
    });
  },
};

export default deleteProduct;
