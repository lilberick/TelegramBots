const TelegramBot = require( "node-telegram-bot-api" );
const token = 'GGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
const bot = new TelegramBot(token, {polling: true});
//Muertos
bot.onText(/\/muertos/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Cargando mapa...');
  bot.sendPhoto(chatId,"/home/pi/app/TelegramBotCovid/TelegramBot/img/Muertos.png",{
  //bot.sendPhoto(chatId,"../img/Muertos.png",{
	  caption	: "Perú: Muertes por coronavirus"
  })
  console.log("Foto enviada");
});

//Confirmados
bot.onText(/\/confirmados/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Cargando mapa...');
  bot.sendPhoto(chatId,"/home/pi/app/TelegramBotCovid/TelegramBot/img/Confirmados.png",{
  //bot.sendPhoto(chatId,"../img/Confirmados.png",{
	  caption	: "Perú: Casos confirmados de Covid"
  })
  console.log("Foto enviada");
});

//Poblacion
bot.onText(/\/poblacion/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Cargando mapa...');
  bot.sendPhoto(chatId,"/home/pi/app/TelegramBotCovid/TelegramBot/img/Poblacion.png",{
  //bot.sendPhoto(chatId,"../img/Poblacion.png",{
	  caption	: "Perú: Población actual"
  })
  console.log("Foto enviada");
});

//Audio
bot.onText(/\/audio/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Cargando audio...');
  bot.sendAudio(chatId,"/home/pi/app/TelegramBotCovid/TelegramBot/img/Coronavairus.mp3",{
  //bot.sendAudio(chatId,"../img/Coronavairus.mp3",{
	  caption	: "Coronavairus audio"
  })
  console.log("audio enviado");
});

//Video
bot.onText(/\/video/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Cargando video...');
  bot.sendVideo(chatId,"/home/pi/app/TelegramBotCovid/TelegramBot/img/Coronavairus.mp4",{
  //bot.sendVideo(chatId,"../img/Coronavairus.mp4",{
	  caption	: "Coronavairus video"
  })
  console.log("Video enviado");
});
