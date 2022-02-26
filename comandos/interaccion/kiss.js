const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "kiss",
  alias: ["besar"],

execute(client, message, args) {

let user = message.mentions.members.first()
if(!user) return message.reply('Menciona a alguien para besar e.e')

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

const embedkiss = new Discord.MessageEmbed()

.setDescription(`${message.author} besó a ${user} <:_Flor:850559389433200651> `)
.setImage("https://cdn.discordapp.com/attachments/875067932131078174/880271811303047248/michi-besosxde.gif")
.setColor("RANDOM")
.setTimestamp()

message.channel.send({ embeds: [embedkiss]});

  }
}