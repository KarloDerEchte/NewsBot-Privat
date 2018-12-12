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
      msg.channel.send('```In Straßburg gab es am Dienstagabend Schüsse bei einem Weihnachtsmarkt. Mehrere Menschen starben, es gibt zahlreiche Verletzte. Der Täter ist weiter auf der Flucht, Frankreich ruft die höchste Terrorwarnstufe aus.\n Am Dienstagabend gab es Schüsse in der Innenstadt von Straßburg.\n Drei Menschen werden aus dem Leben gerissen, zudem mehr als ein Dutzend verletzt. Laut Polizei ist der Täter noch flüchtig, 350 Sicherheitskräfte sind an der Fahndung beteiligt. In Frankreich gilt nun die höchste Terrorwarnstufe.Soldaten haben den mutmaßlichen Täter angeschossen. Er war den französischen Behörden als potenzieller Gefährder bekannt.In Deutschland saß der mutmaßliche Angreifer ebenso wie in Frankreich und der Schweiz wegen Einbrüchen im Gefängnias.\n***QUELLE:https://www.merkur.de/politik/strssburg-frankreich-tote-bei-anschlag-auf-weihnachtsmarkt-merkel-aeussert-sich-zr-10846090.html**```')
  }
});
