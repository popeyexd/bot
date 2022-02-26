const Discord = require("discord.js");
const db = require('megadb')
const canalsugs = new db.crearDB('canalsugs')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "sugs-channel",
  alias: ["canal-sugerencias"],

execute(client, message, args) {

   const user = message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

var perms = message.member.permissions.has("ADMINISTRATOR")
if(!perms) return message.channel.send('No tienes permisos para ejecutar este comando!')

const canal = message.mentions.channels.first()
if(!canal) return message.channel.send("Debes mencionar un canal donde vaya a mandar las sugerencias!")

message.channel.send(`Las sugerencias serán mandadas a ${canal}`)

canalsugs.establecer(`${message.guild.id}`, `${canal.id}`)

  }
}
