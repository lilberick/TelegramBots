const TelegramBot = require( "node-telegram-bot-api" );
const token = 'GGGGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/covid/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Cargando mapa...');
  bot.sendPhoto(chatId,"../img/PeruTemporal.png",{
	  caption	: "Perú: Muertes por coronavirus"
  })
  console.log("Foto enviada");
});

