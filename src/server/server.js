const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const validUrl = require('valid-url')
require('dotenv').config({ path: path.join(__dirname, '.env') })

const Server = {
    configure: function (bot) {
        this.bot = bot

        this.app = express()
        this.app.use('/', express.static(path.join(`${__dirname}/views`)))
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: true }))
        this.app.set('views', path.join(__dirname, './views'))
        this.app.set('view engine', 'ejs')

        this.app.get('/', this.homeController)
        this.app.post('/sendrss', this.sendRssController.bind(this))

        this.app.post('/privatemessage', this.privateMessage.bind(this))

        this.app.use(this.bot.webhookCallback('/'))


        const port = process.env.PORT
        this.app.listen(port, () => {
          console.log(`Express server is listening on ${port}`)
        })

        this.bot.telegram.setWebhook(process.env.WEBHOOK)

        this.bot.telegram.getMe().then((res) => console.log(res))
        console.log(' [x] Bot running locally, mode: ', process.env.NODE_ENV)
        console.log(' [x] Connect to PORT: ', process.env.PORT)

        process.once('SIGINT', () => bot.stop('SIGINT'))
        process.once('SIGTERM', () => bot.stop('SIGTERM'))
    },

    privateMessage: function(request, response) {

        const user = request.body.user
        const message = request.body.message
        const bot = this.bot

        bot.sendMessage(user, message, { parse_mode: 'Markdown' })

        response.redirect('/')
    },

    sendRssController: function(request, response) {
        // Logger.notify('Called global message controller')

        const message = request.body.message
        const bot = this.bot

        console.log('message', message)

        if (validUrl.isUri(message)){
          // console.log('Looks like an URI')
          // response.redirect('/rssAdded')
        } else {
          // console.log('Not a URI')
          // response.redirect('/urlIncorrect')
        }
    },

    rssAddedController: function(request, response) {
      // Logger.notify('Called global message controller')

      console.log('Called home controller')
      response.render('rssAdded')
    },

    homeController: function (request, response) {
        console.log('Called home controller')
        response.render('index')
    }
}

module.exports = Server

