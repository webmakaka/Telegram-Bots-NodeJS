const TelegramBot = require('node-telegram-bot-api');
const debug = require('./helpers');
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

// bot.on('message', (msg) => {
//   const { id } = msg.chat;

//   if (msg.text.toLowerCase() === 'hello') {
//     bot.sendMessage(id, `Hello, ${msg.from.first_name}`);
//   } else {
//     bot.sendMessage(id, 'Здравствуй, ' + msg.from.first_name);
//     bot.sendMessage(id, debug(msg));
//   }

//   bot
//     .sendMessage(id, debug(msg))
//     .then(() => {
//       console.log('Message has been sent');
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// });

// ====================================================

// Создание Telegram бота на Node.js / #9 - Обработка команд

// bot.onText(/\/start/, (msg) => {
//   const { id } = msg.chat;
//   bot.sendMessage(id, debug(msg));
// });

// bot.onText(/\/help (.+)/, (msg, [source, match]) => {
//   const { id } = msg.chat;
//   bot.sendMessage(id, debug(match));
// });

// ====================================================

// Создание Telegram бота на Node.js / #10 - Отправка HTML кода

bot.on('message', (msg) => {
  const { id } = msg.chat;

  const html = `
    <strong>Hello, ${msg.from.first_name}</strong>
    <i>Test message</i>
    <a href="//marley.org">marley.org</a>
    <pre>
      ${debug(msg)}
    </pre>
  `;

  bot.sendMessage(id, html, {
    parse_mode: 'HTML',
  });
});
