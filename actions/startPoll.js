import {clanIds} from "../data/clanIds.js";
import {bot} from "../data/consts.js";
import {getAvailableQuests} from "../api/getAvailableQuests.js";

export const startPoll = async (chatId) => {
  try {
    //Получения списка доступных квестов
    const availableQuests = await getAvailableQuests(clanIds.killThemAll)


    //Отправка изображений в чат
    const images = availableQuests.map((i) => ({
      type: 'photo',
      media: i.promoImageUrl.replace('.jpg', '@2x.jpg'),
      caption: i.promoImageUrl.split('/').slice(-1)[0].split('.')[0]
    }))
    await bot.sendMediaGroup(chatId, images)


    //Создание голосования
    const options = availableQuests.map((i, index) => {
      let title = String(index + 1)

      if (i.purchasableWithGems) {
        title += ' (гемовый)'
      }

      return title
    })

    const poll = await bot.sendPoll(chatId, 'Квест', options, {is_anonymous: false})


    //Закрепление голосования
    await bot.pinChatMessage(chatId, poll.message_id)

  } catch (e) {
    throw e
  }
}
