import axiosClient from "./axiosClient";

const updateProfileApi = {
  patch(payload) {
    const url = "/api/account/update";
    return axiosClient.patch(url, payload, {
      headers: {
        "content-type": "multipart/form-data",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": true,
        mode: "cors",
        credentials: "include",
      },
    });
  },
};

export default updateProfileApi;
