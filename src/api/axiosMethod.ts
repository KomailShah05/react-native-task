import axiosClient from "./axiosInterceptor";

const getRequest = async (url: string, params?: any) => {
  console.log("params", params);
  return axiosClient.get(url, { params });
};

export { getRequest };
