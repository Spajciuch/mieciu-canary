const Discord = require("discord.js");
module.exports.run = async (client, message, args, config) => {
    let embed = new Discord.RichEmbed()
    .setTitle("Link do zaproszenia bota")
    .addField("Link", "https://discordapp.com/api/oauth2/authorize?client_id=461233419012276234&permissions=8&scope=bot")
    .addField("Uprawnienia", "*Administarora")
    .setColor(config.embed_color)
    message.channel.send("**"+message.author.username +"** Sprawdź DM'y")
    message.author.send({embed})
  }
module.exports.help = {
  name: "invite",
  category: "info"
}
