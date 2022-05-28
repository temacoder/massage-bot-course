const Telegraf = require('telegraf')
const { Markup } = Telegraf

module.exports.InlineKeyboard = {
  buttons_start: () => {
    return Markup.inlineKeyboard([
      [Markup.button.callback('Список RSS', 'listRss')],
      [Markup.button.webApp('Добавить RSS', 'https://423b-2003-c5-6718-6385-4d77-a43e-2216-8c7b.eu.ngrok.io/')]
    ])
  },
  buttons_start2: () => {
    return Markup.keyboard([
      [Markup.button.callback('Список RSS', 'listRss')],
      [Markup.button.webApp('WebApp', 'https://423b-2003-c5-6718-6385-4d77-a43e-2216-8c7b.eu.ngrok.io/')]
    ])
  },
  buttons_source: () => {
    return Markup.inlineKeyboard([
      [Markup.button.callback('Reddit', 'redditRss')]
    ])
  },
  buttons_back: () => {
    return Markup.inlineKeyboard([
      [Markup.button.callback('Назад', 'back')]
    ])
  },
  buttons_masters: () => {
    return Markup.inlineKeyboard([
      [Markup.button.callback('Татьяна', 'tatyana'), Markup.button.callback('Наталья', 'natalya')],
      [Markup.button.callback('Лиза', 'lisa'), Markup.button.callback('Макар', 'makar')]
    ])
  },
}