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

// #12 - Дополнительные опции сообщения

// bot.onText(/\/start/, (msg) => {
//   const { id } = msg.chat;
//   bot.sendMessage(id, debug(msg));
// });

// bot.onText(/\/help (.+)/, (msg, [source, match]) => {
//   const { id } = msg.chat;
//   bot.sendMessage(id, debug(match));
// });

// ====================================================

// #12 - Дополнительные опции сообщения

// bot.on('message', (msg) => {
//   const { id } = msg.chat;

//   const html = `
//     <strong>Hello, ${msg.from.first_name}</strong>
//     <i>Test message</i>
//     <a href="//marley.org">marley.org</a>
//     <pre>
//       ${debug(msg)}
//     </pre>
//   `;

//   bot.sendMessage(id, html, {
//     parse_mode: 'HTML',
//   });
// });

// ==================================================

// #12 - Дополнительные опции сообщения

// bot.on('message', (msg) => {
//   const { id } = msg.chat;

//   const markdown = `
//     **Hello, ${msg.from.first_name}**
//     _Привет!_
//     [marley](https://marley.org)
//   `;

//   bot.sendMessage(id, markdown, {
//     parse_mode: 'Markdown',
//   });
// });

// ==================================================

// #12 - Дополнительные опции сообщения

// bot.on('message', (msg) => {
//   const { id } = msg.chat;

//   setTimeout(() => {
//     bot.sendMessage(id, `https://core.telegram.org/bots/api`, {
//       disable_web_page_preview: true,
//       disable_notification: true,
//     });
//   }, 3000);
// });

// ==================================================

// #13 - Простая клавиатура

bot.on('message', (msg) => {
  const { id } = msg.chat;

  if (msg.text === 'Закрыть') {
    bot.sendMessage(id, 'Закрываю клавиатуру', {
      reply_markup: {
        remove_keyboard: true,
      },
    });
  } else if (msg.text === 'Ответить') {
    bot.sendMessage(id, 'Отвечаю', {
      reply_markup: {
        force_reply: true,
      },
    });
  } else {
    bot.sendMessage(id, 'Клавиатура', {
      reply_markup: {
        keyboard: [
          [
            {
              text: 'Отправить местоположение',
              request_location: true,
            },
          ],
          ['Ответить', 'Закрыть'],
          [
            {
              text: 'Отправить контакт',
              request_contact: true,
            },
          ],
        ],
        resize_keyboard: true,
        one_time_keyboard: true,
      },
    });
  }
});
