const path = require('path')
require('dotenv').config({ path: path.join(__dirname, '.env') })

const { Telegraf } = require('telegraf')
const Server = require('./src/server/server')

const { CommandHandler } = require('./src/handlers/commandHandler')
const { CallbackHandler } = require('./src/handlers/callbackHandler')
const { TextHandler } = require('./src/handlers/textHandler')

const bot = new Telegraf(process.env.BOT_TOKEN)
Server.configure(bot)

CommandHandler(bot)
CallbackHandler(bot)
TextHandler(bot)