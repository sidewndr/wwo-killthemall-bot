import {bot} from "./data/consts.js";
import {AxiosError} from "axios";
import {actions} from "./data/actions.js";
import {startPoll} from "./actions/startPoll.js";
import {sendCatSticker} from "./actions/sendCatSticker.js";

bot.setMyCommands([
  {command: '/start_poll', description: 'Начать голосование за квест'}
])

bot.on('message', async (msg) => {
  const chatId = msg.chat.id

  try {
    if (msg.text === actions.startPoll) {
      await startPoll(chatId)
    }

    if (msg.sticker && msg.sticker.set_name === 'HANGSEED_Cutie_Cat' && msg.sticker.emoji === '💃') {
      await sendCatSticker(chatId)
    }


  } catch (e) {
    if (e instanceof AxiosError) {
      if (e.response.status === 429) {
        await bot.sendMessage(chatId, 'Слишком частые запросы, попробуй через минутку.')
        return;
      }

      await bot.sendMessage(chatId, `Ошибка при выполнении запроса: ${e.message}.`)
      return;
    }

    if (e instanceof Error) {
      await bot.sendMessage(chatId, e.message)
      return;
    }
  }
})
