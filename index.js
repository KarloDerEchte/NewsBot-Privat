const Discord = require('discord.js');

const client = new Discord.Client();

const fs = require('fs');

const banlist = require('./config/banwords.json');

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
{
    if ()
}