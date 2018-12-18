const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require('fs');

//const banlist = require('./config/banwords.json');

let token;

if (fs.existsSync('./config/token.json')) {
  token = require('./config/token.json');
  client.login(token.token);
} else {
  client.login(process.env.BOT_TOKEN);
}
client.on('ready', () => {
  console.log(`Bot Erfolgreich auf dem Namen ${client.user.tag} gestartet!`);
});

client.on('message', async (msg) => {
  if (msg.author.bot) return;

  if (msg.content === 'NEWS') {
      msg.channel.send('```Anschlag in Straßburg! \nWas ist in Straßburg passiert?\nEin Mann eröffnete nach Behördenangaben gegen 20 Uhr am Dienstagabend in der \n Nähe des Weihnachtsmarktes das Feuer mit einer Handfeuerwaffe und stach mit dem\n Messer auf Menschen ein. Soldaten, die den Weihnachtsmarkt bewachten, hätten\n den Mann angeschossen und verletzt, hieß es von der Polizeigewerkschaft. Ein\n Militärsprecher sagte, der Verdächtige habe gezielt Zivilisten ins Visier genommen.\n QUELLE:https://www.tagesschau.de/ausland/strassbourg-103.html```')
  }
});
