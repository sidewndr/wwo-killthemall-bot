import axios from 'axios';
import {BASE_URL, WWO_API_KEY} from "../data/consts.js";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    'Authorization': `Bot ${WWO_API_KEY}`
  }
})

export const API = {
  getClans: '/clans/authorized',
  getAvailableQuests: (clanId) => `/clans/${clanId}/quests/available`,
}
