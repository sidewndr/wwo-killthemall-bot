import {API, axiosInstance} from "./api.js";

export const getAvailableQuests = async (clanId) => {
  try {
    const response = await axiosInstance.get(API.getAvailableQuests(clanId))
    return response.data
  } catch (e) {
    throw e
  }
}
