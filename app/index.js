const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '5999391787:AAGawcbTLrsO5rrSJotbQoO5GuhaXkC3nAY';

console.log('Bot has been started ...');

const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10,
    },
  },
});

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'Здравствуй, ' + msg.from.first_name);
});
