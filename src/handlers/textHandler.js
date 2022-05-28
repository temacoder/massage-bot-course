const { InlineKeyboard } = require('../buttons')

module.exports.TextHandler = (bot) => {
  // bot.on('text', (ctx) => {
  //   console.log('text', ctx)
  // })

  // bot.on('inline_query', (ctx) => {
  //   console.log('inline_query', ctx)
  // })

  bot.on('message', async (ctx) => {
    // resend existing file by file_id
   console.log('message ', ctx.update.message.web_app_data)
   await ctx.replyWithHTML('Для записи выберите мастера', InlineKeyboard.buttons_masters())
  })

}