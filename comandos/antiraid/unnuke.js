const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "unnuke",
  alias: ["un-nuke", "nuke-all"],

execute(client, message, args) {

  const user = message.author;

  var permisos = message.member.permissions.has("ADMINISTRATOR")
  if(!permisos) return message.reply('No tienes los suficientes permisos.\nPermisos Requeridos: **ADMINISTRADOR, GESTIONAR_CANALES.**')

  if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.reply('No tengo los suficientes permisos.\nPermisos Requeridos: **ADMINISTRADOR, GESTIONAR_CANALES.**')

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

  message.guild.channels.cache.forEach(channel => channel.delete())
  message.guild.channels.create(`canales-nukeados`, {
    type: "text"
  }).then(channel => {
    channel.send(`Canales Nukeados Por ${message.author}`)
  })

  }
}