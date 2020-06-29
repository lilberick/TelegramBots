const TelegramBot = require( "node-telegram-bot-api" );
const token = 'GGGGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
const bot = new TelegramBot(token, {polling: true});
//Muertos
bot.onText(/\/muertos/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Cargando mapa...');
  bot.sendPhoto(chatId,"/home/pi/app/TelegramBotCovid/TelegramBot/img/Muertos.png",{
	  caption	: "Perú: Muertes por coronavirus"
  })
  console.log("Foto enviada");
});

//Confirmados
bot.onText(/\/confirmados/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Cargando mapa...');
  bot.sendPhoto(chatId,"/home/pi/app/TelegramBotCovid/TelegramBot/img/Confirmados.png",{
	  caption	: "Perú: Casos confirmados de Covid"
  })
  console.log("Foto enviada");
});

//Poblacion
bot.onText(/\/poblacion/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Cargando mapa...');
  bot.sendPhoto(chatId,"/home/pi/app/TelegramBotCovid/TelegramBot/img/Poblacion.png",{
	  caption	: "Perú: Población actual"
  })
  console.log("Foto enviada");
});
