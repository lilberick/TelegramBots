const TelegramBot = require( "node-telegram-bot-api" );
const token = '12345678910:sdfasiwueiwueiuwehfuiwe'
const bot = new TelegramBot(token, {polling: true});
bot.onText(/\/start/, (msg) => {
bot.sendMessage(msg.chat.id, "Bienvenido", {
"reply_markup": {
    "keyboard": [["hola", "bye"], ["bota tu ga","ya pero eres o no eres"]]
    }
});

});

//Respuestas
bot.on('message', (msg) => {
var Hi = "hola";
if (msg.text.toString().toLowerCase().indexOf(Hi) === 0) {
    bot.sendMessage(msg.chat.id, "Hola, tiene que decir los chupetines caballero");
}
var bye = "bye";
if (msg.text.toString().toLowerCase().includes(bye)) {
    bot.sendMessage(msg.chat.id, "Saludooooos, Bye");
}
var ga = "bota tu ga";
if (msg.text.indexOf(ga) === 0) {
    bot.sendMessage(msg.chat.id, "GAAAAAAAAAAAAA");
    bot.sendPhoto(msg.chat.id,"img/ga.jpg");
}
var eres= "ya pero eres o no eres";
if (msg.text.indexOf(eres) === 0) {
    bot.sendMessage(msg.chat.id, "Si soy papi");
}
});
