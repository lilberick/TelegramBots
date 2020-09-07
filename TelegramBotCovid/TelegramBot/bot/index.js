const TelegramBot = require( "node-telegram-bot-api" );
const token = 'GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA'
const bot = new TelegramBot(token, {polling: true});
//Menu
bot.onText(/\/covid/, (msg) => {
bot.sendMessage(msg.chat.id, "Bienvenido, soy covidPeruBot", {
"reply_markup": {
    "keyboard": [["Confirmados", "Muertos","Poblacion"], ["Audio","Video"]]
    }
});
});

//Respuestas
bot.on('message', (msg) => {
var a = "Confirmados";
if (msg.text.indexOf(a) === 0) {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Cargando mapa...');
  //bot.sendPhoto(chatId,"/home/pi/app/TelegramBotCovid/TelegramBot/img/Confirmados.png",{
  bot.sendPhoto(chatId,"../img/Confirmados.png",{
	  caption	: "Perú: Casos confirmados de Covid"
  })
  console.log("Foto enviada");
}
var b = "Muertos";
if (msg.text.indexOf(b) === 0) {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Cargando mapa...');
  //bot.sendPhoto(chatId,"/home/pi/app/TelegramBotCovid/TelegramBot/img/Muertos.png",{
  bot.sendPhoto(chatId,"../img/Muertos.png",{
	  caption	: "Perú: Muertes por coronavirus"
  })
  console.log("Foto enviada");
}
var c = "Poblacion";
if (msg.text.indexOf(c) === 0) {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Cargando mapa...');
  //bot.sendPhoto(chatId,"/home/pi/app/TelegramBotCovid/TelegramBot/img/Poblacion.png",{
  bot.sendPhoto(chatId,"../img/Poblacion.png",{
	  caption	: "Perú: Población actual"
  })
  console.log("Foto enviada");
}
var d= "Audio";
if (msg.text.indexOf(d) === 0) {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Cargando audio...');
  //bot.sendAudio(chatId,"/home/pi/app/TelegramBotCovid/TelegramBot/img/Coronavairus.mp3",{
  bot.sendAudio(chatId,"../img/Coronavairus.mp3",{
	  caption	: "Coronavairus audio"
  })
  console.log("audio enviado");
}
var e= "Video";
if (msg.text.indexOf(e) === 0) {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Cargando video...');
  //bot.sendVideo(chatId,"/home/pi/app/TelegramBotCovid/TelegramBot/img/Coronavairus.mp4",{
  bot.sendVideo(chatId,"../img/Coronavairus.mp4",{
	  caption	: "Coronavairus video"
  })
  console.log("Video enviado");
}
});
