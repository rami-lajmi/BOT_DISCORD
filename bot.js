const Discord = require("discord.js");
const client = new Discord.Client();

// client.on('ready', () => {
  // console.log(`Bonjour je suis ${client.user.tag}!`);
  // console.log(`Le Nom du serveur : ${message.guild.name}`);
  
// });
client.on("ready", () => {
  console.log(`Bonjour je suis ${client.user.tag}!`);
  // This event will run if the bot starts, and logs in, successfully.
  console.log(`Actuellement, il y'a ${client.users.size} utilisateurs, Avec ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
  // Example of changing the bot's playing game to something useful. `client.user` is what the
  // docs refer to as the "ClientUser".
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTE0NzIyMTY0NjI1Mzc1MjQz.DtassQ.cgg7uO3_9acC6PFnEXwx7M5EqSY');