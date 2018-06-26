const Discord = require("discord.js");
const config = require(`../config.json`)
const superagent = require('superagent')
module.exports.run = async (client, message, args) => {
  if(!message.member.roles.some(r=>["adm","Admin","Administrator", "Moderator", "podkomisarze w Hyrule", "agent FBI w Hyrule", "właściciele", "Administracja"].includes(r.name)))
  return message.reply("Nie masz uprawnień")
  message.guild.createEmoji(args[0], args[1]) .then(emoji => console.log(`Utworzono nowe emoji na serwerze ${message.guild.name} o nazwie: ${emoji.name}`)) .catch(console.error);
}
module.exports.help = {
  name: "emojilist"
}
