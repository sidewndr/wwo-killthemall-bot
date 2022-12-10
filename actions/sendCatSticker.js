import {bot} from "../data/consts.js";

export const sendCatSticker = async (chatId) => {
  await bot.sendSticker(chatId, 'CAACAgQAAxkBAAOsY5SF-XN4hcIm7a_1EjaYgQRWRMoAAsYJAAI0BdFS-cpeE3dLrU4rBA')
}
