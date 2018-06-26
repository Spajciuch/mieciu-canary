const Discord = require("discord.js");
const config = require(`../config.json`)
const superagent = require('superagent')
module.exports.run = async (client, message, args) => {
  const emojiList = message.guild.emojis.map(e=>'\\'+ e.toString()).join(" ");
  message.channel.send(emojiList);
}
module.exports.help = {
  name: "emojilist"
}
