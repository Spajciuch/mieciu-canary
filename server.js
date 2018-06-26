const Discord = require('discord.js')
const Music = require('discord.js-musicbot-addon-v2-pl');
var ffmpeg = require('ffmpeg');
const config = require('./config.json')
const client = new Discord.Client()
const fs = require('fs')
client.commands = new Discord.Collection()
var d = new Date()
var hour = d.getHours() +2
var minute = d.getMinutes()
var minute = `${minute}`.padStart(2, 0)
var time = hour + ":" + minute
switch (new Date().getDay()) {
  case 0:
      day = " w Niedzielę";
      break;
  case 1:
      day = "w Poniedziałek";
      break;
  case 2:
      day = "we Wtorek";
      break;
  case 3:
      day = "w Środę";
      break;
  case 4:
      day = "w Czwartek";
      break;
  case 5:
      day = "w Piątek";
      break;
  case 6:
      day = "w Sobotę";
}
client.on("ready", () => {
    const channelgeneral = client.channels.find("id", "460799362247950337");
    client.user.setActivity("saveyourinternet.eu", {type: "STREAMING"});
    console.log('[client] Logowanie')
    console.log("[client] Wystartowano o " + time)
    console.log(`[client] Zalogowano jako: ${client.user.username}`);
    console.log("[client] Bot obsługuje " + client.users.size + " osób, " +  client.channels.size + " kanałów, " + client.guilds.size + " serwerów");
    let embed = new Discord.RichEmbed()
    .setTitle("Uruchomienie bota")
    .addField("Godzina", time,true)
    .addField("Data", `${d.getDate()}.${d.getMonth()+1}.${d.getFullYear()}`)
.setColor(config.embed_color)
});
fs.readdir(`./commands/`,(err, files)=>{
  if(err) console.log(err)
  let jsfile = files.filter(f => f.split(".").pop() == "js")
  if(jsfile.length <= 0){
    console.log("Nie znaleziono komend!")
  }
  jsfile.forEach((f,i)=> {
    let props = require(`./commands/${f}`)
    console.log(`[Załadowano] ${f}`)
    client.commands.set(props.help.name, props)
  })
})
client.on("message", async message => {
  if (message.author.bot) return;
  if (message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  if(message.author.bot) return;

  let prefix = config.prefix
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];

if(command == 'cmd.list'){
  fs.readdir(`./commands/`,(err, files)=>{
    if(err) console.log(err)
    let jsfile = files.filter(f => f.split(".").pop() == "js")
    jsfile.forEach((f,i)=> {
      let props = require(`./commands/${f}`)
      
    })
     
  })
}
  let commandfile = client.commands.get(cmd.slice(prefix.length));
if(commandfile) commandfile.run(client ,message,args, config);
});
const music = new Music(client, {
   prefix: config.prefix,
  youtubeKey: config.yt,
  embedColor: 16760320,
  enableQueueStat: true,
  botAdmins: [316226442721755137, 367390191721381890],
  clearOnLeave: true,
  disableVolume: true,
  djRole: "@everyone"
});
client.login(process.env.TOKEN)
