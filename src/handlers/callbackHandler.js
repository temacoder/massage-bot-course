const Parser = require('rss-parser')

const { InlineKeyboard } = require('../buttons')

module.exports.CallbackHandler = (bot) => {
  bot.on('callback_query', async (ctx) => {
    const { callbackQuery } = ctx
    console.log(callbackQuery.data)

    if (callbackQuery.data = 'lisa') {
      await ctx.replyWithHTML('<b>Выберите удобный день:</b>\n1. Понедельник\n2. Вторник\n3. Среда\n4. Четверг\n\n Отправб подходящую цифру')
    }
  })
}