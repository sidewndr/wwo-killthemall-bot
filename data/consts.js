import dotenv from 'dotenv';
import TelegramApi from "node-telegram-bot-api";

dotenv.config()
export const BOT_TOKEN = process.env.BOT_TOKEN
export const BASE_URL = process.env.BASE_URL
export const WWO_API_KEY = process.env.WWO_API_KEY

export const bot = new TelegramApi(BOT_TOKEN, {polling: true})
