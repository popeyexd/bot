const Discord = require("discord.js");
const db = require('megadb')
const prefix_db = new db.crearDB('prefix')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "set-prefix",
  alias: ["prefix"],

execute(client, message, args) {

  
  const user = message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

  var perms = message.member.permissions.has("ADMINISTRATOR")
  if(!perms) return message.reply('No tienes suficientes permisos.')

  if(!args[0]) return message.reply('Debes decir un prefix nuevo!')

prefix_db.establecer(message.guild.id, args[0])

message.channel.send(`El prefix ha sido cambiado a **${args[0]}**`)

  }
}