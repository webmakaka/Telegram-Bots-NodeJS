# [YouTube] Создание Telegram бота на Node.js

https://www.youtube.com/watch?v=DU9K1rIUWrY&list=PLhgRAQ8BwWFaxlkNNtO0NDPmaVO9txRg8

<br/>

```
core.telegram.org/bots/api
core.telegram.org
https://github.com/yagop/node-telegram-bot-api
```

<br/>

### 3 - Регистрация бота

```
https://t.me/BotFather

Start

/newbot
```

<br/>

```
Alright, a new bot. How are we going to call it? Please choose a name for your bot. [SuperBot]

Good. Now let's choose a username for your bot. It must end in `bot`. Like this, for example: TetrisBot or tetris_bot. [WebmakakaBot]
```

<br/>

```
BotFather, [01/06/2023 11:59]
Good. Now let's choose a username for your bot. It must end in `bot`. Like this, for example: TetrisBot or tetris_bot.


BotFather, [01/06/2023 12:00]
Done! Congratulations on your new bot. You will find it at t.me/WebmakakaBot. You can now add a description, about section and profile picture for your bot, see /help for a list of commands. By the way, when you've finished creating your cool bot, ping our Bot Support if you want a better username for it. Just make sure the bot is fully operational before you do this.

Use this token to access the HTTP API:
5999391787:AAGawcbTLrsO5rrSJotbQoO5GuhaXkC3nAY
Keep your token secure and store it safely, it can be used by anyone to control your bot.

For a description of the Bot API, see this page: https://core.telegram.org/bots/api
```

<br/>

### 4 - Создание простого бота

```
$ cd app
$ npm init -y
$ npm i node-telegram-bot-api
```

```
$ node ./index.js
```

<br/>

```
@BotFather

/mybots
```

```
@WebmakakaBot -> /start
Привет!
```

<br/>

### 5 - Настройки Bot Father 1

<br/>

```
@BotFather

setcommands

start - Начать работу
test - Протестировать
help - Открыть помощь
```

<br/>

### 6 - Настройки Bot Father 2

```
// Обращаться к любому боту из любого чата?
/setinline

/setinlinegeo
/setinlinefeedback
/setprivacy
```

<br/>

### 7 - Настройка polling

```
/token
```

<br/>

```
$ npm start
```

<br/>

### 8 - Получение сообщения пользователя

<br/>

### 9 - Обработка команд

<br/>

### 10 - Отправка HTML кода

<br/>

### 11 - Отправка Markdown

<br/>

### 12 - Дополнительные опции сообщения

<br/>

### 13 - Простая клавиатура

<br/>

### 14 - Инлайн клавиатура

<br/>

### 15 - Обработка инлайн запросов

Не заработало!

<br/>

### 16 - Перенаправление сообщений

```
/start
```

<br/>

### 17 - Ответ на сообщение

<br/>

### 18 - Редактирование сообщения

<br/>

### 19 - Удаление сообщения

<br/>

### 20 - Отправка картинок

```
/pic
/pic2
```

<br/>

### 21 - Отправка аудио

```
/audio
/audio2
```

<br/>

### 22 - Отправка файла (gif, pdf, zip)

```
/doc1
/doc2
```

<br/>

### 23 - Отправка стикеров (webp)

```
/s1
/s2
```

<br/>

### 24 - Отправка видео (mp4)

// https://techslides.com/demos/sample-videos/small.mp4

```
/v1
/v2
/v3
```

<br/>

### 25 - Отправка геолокации (https://www.google.com/maps/)

```
/loc
```

<br/>

### 26 - Отправка контакта
