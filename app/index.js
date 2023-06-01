const TelegramBot = require('node-telegram-bot-api');
const TOKEN = '5999391787:AAGawcbTLrsO5rrSJotbQoO5GuhaXkC3nAY';

const bot = new TelegramBot(TOKEN, {
  polling: true,
});

bot.on('message', (msg) => {
  bot.sendMessage(msg.chat.id, 'Здравствуй, ' + msg.from.first_name);
});
