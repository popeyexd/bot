const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "nalgada",
  alias: [],

execute(client, message, args) {

let user = message.mentions.members.first() || message.member;

if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

const embednalgada = new Discord.MessageEmbed()

.setDescription(`${message.author} esta nalgueando a ${user} :flushed:`)
.setColor("RANDOM")
.setImage('https://cdn.discordapp.com/attachments/875067932131078174/880273549825310730/michi-nalgadasxde.gif')
.setTimestamp()

message.channel.send({ embeds: [embednalgada]});

  }
}