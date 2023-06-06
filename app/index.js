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

// 8 - Получение сообщения пользователя

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

// 9 - Обработка команд

// bot.onText(/\/start/, (msg) => {
//   const { id } = msg.chat;
//   bot.sendMessage(id, debug(msg));
// });

// bot.onText(/\/help (.+)/, (msg, [source, match]) => {
//   const { id } = msg.chat;
//   bot.sendMessage(id, debug(match));
// });

// ====================================================

// 10 - Отправка HTML кода

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

// 11 - Отправка Markdown

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

// 12 - Дополнительные опции сообщения

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

// 13 - Простая клавиатура

// bot.on('message', (msg) => {
//   const { id } = msg.chat;

//   if (msg.text === 'Закрыть') {
//     bot.sendMessage(id, 'Закрываю клавиатуру', {
//       reply_markup: {
//         remove_keyboard: true,
//       },
//     });
//   } else if (msg.text === 'Ответить') {
//     bot.sendMessage(id, 'Отвечаю', {
//       reply_markup: {
//         force_reply: true,
//       },
//     });
//   } else {
//     bot.sendMessage(id, 'Клавиатура', {
//       reply_markup: {
//         keyboard: [
//           [
//             {
//               text: 'Отправить местоположение',
//               request_location: true,
//             },
//           ],
//           ['Ответить', 'Закрыть'],
//           [
//             {
//               text: 'Отправить контакт',
//               request_contact: true,
//             },
//           ],
//         ],
//         resize_keyboard: true,
//         one_time_keyboard: true,
//       },
//     });
//   }
// });

// 14 - Инлайн клавиатура

// bot.on('message', (msg) => {
//   const { id } = msg.chat;

//   bot.sendMessage(id, 'Inline keyboard', {
//     reply_markup: {
//       inline_keyboard: [
//         [
//           {
//             text: 'Google',
//             url: 'https://google.com',
//           },
//         ],
//         [
//           { text: 'Reply', callback_data: 'reply' },
//           { text: 'Forward', callback_data: 'forward' },
//         ],
//       ],
//     },
//   });

//   bot.on('callback_query', (query) => {
//     // bot.sendMessage(query.message.chat.id, debug(query));
//     bot.answerCallbackQuery(query.id, `${query.data}`);
//   });
// });

// 15 - Обработка инлайн запросов

// bot.on('inline_query', (query) => {
//   const results = [];

//   for (let i = 0; i < 5; i++) {
//     results.push({
//       type: 'article',
//       id: i.toString(),
//       title: 'Title ' + i,
//       input_message_content: {
//         message_text: `Article #${i + 1}`,
//       },
//     });
//   }

//   console.log(results);

//   bot.answerInlineQuery(query.id, results, {
//     cache_time: 0,
//   });
// });

// 16 - Перенаправление сообщений

// const inline_keyboard = [
//   [
//     { text: 'Forward', callback_data: 'forward' },
//     { text: 'Reply', callback_data: 'reply' },
//   ],
//   [
//     { text: 'Edit', callback_data: 'edit' },
//     { text: 'Delete', callback_data: 'delete' },
//   ],
// ];

// bot.on('callback_query', (query) => {
//   const { chat, message_id, text } = query.message;

//   switch (query.data) {
//     case 'forward':
//       // куда, откуда, что
//       bot.forwardMessage(chat.id, chat.id, message_id);
//       break;
//   }

//   bot.answerCallbackQuery({
//     callback_query_id: query.id,
//   });
// });

// bot.onText(/\/start/, (msg, [source, match]) => {
//   const chatId = msg.chat.id;

//   bot.sendMessage(chatId, 'keyboard', {
//     reply_markup: {
//       inline_keyboard,
//     },
//   });
// });

// 17 - Ответ на сообщение

// const inline_keyboard = [
//   [
//     { text: 'Forward', callback_data: 'forward' },
//     { text: 'Reply', callback_data: 'reply' },
//   ],
//   [
//     { text: 'Edit', callback_data: 'edit' },
//     { text: 'Delete', callback_data: 'delete' },
//   ],
// ];

// bot.on('callback_query', (query) => {
//   const { chat, message_id, text } = query.message;

//   switch (query.data) {
//     case 'forward':
//       // куда, откуда, что
//       bot.forwardMessage(chat.id, chat.id, message_id);
//       break;
//     case 'reply':
//       bot.sendMessage(chat.id, `Отвечаем на сообщение`, {
//         reply_to_message_id: message_id,
//       });
//   }

//   bot.answerCallbackQuery({
//     callback_query_id: query.id,
//   });
// });

// bot.onText(/\/start/, (msg, [source, match]) => {
//   const chatId = msg.chat.id;

//   bot.sendMessage(chatId, 'keyboard', {
//     reply_markup: {
//       inline_keyboard,
//     },
//   });
// });

// 18 - Редактирование сообщения

const inline_keyboard = [
  [
    { text: 'Forward', callback_data: 'forward' },
    { text: 'Reply', callback_data: 'reply' },
  ],
  [
    { text: 'Edit', callback_data: 'edit' },
    { text: 'Delete', callback_data: 'delete' },
  ],
];

bot.on('callback_query', (query) => {
  const { chat, message_id, text } = query.message;

  switch (query.data) {
    case 'forward':
      // куда, откуда, что
      bot.forwardMessage(chat.id, chat.id, message_id);
      break;
    case 'reply':
      bot.sendMessage(chat.id, `Отвечаем на сообщение`, {
        reply_to_message_id: message_id,
      });
    case 'edit':
      bot.editMessageText(`${text} (edited)`, {
        chat_id: chat.id,
        message_id,
        reply_markup: { inline_keyboard },
      });
  }

  bot.answerCallbackQuery({
    callback_query_id: query.id,
  });
});

bot.onText(/\/start/, (msg, [source, match]) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'keyboard', {
    reply_markup: {
      inline_keyboard,
    },
  });
});
