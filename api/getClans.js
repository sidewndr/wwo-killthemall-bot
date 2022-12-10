import {API, axiosInstance} from "./api.js";

export const getClans = async () => {
  try {
    const response = await axiosInstance.get(API.getClans)
    return response.data
  } catch (e) {
    throw e
  }
}
