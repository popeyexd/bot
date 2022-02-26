const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "set-name",
  alias: ["set-guild-name"],

execute(client, message, args) {

  var perms = message.member.permissions.has("ADMINISTRATOR")
  if(!perms) return message.reply("No tienes los suficientes permisos!")

  if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.reply('No tengo suficientes permisos')

  
  let user = message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

  const nombre = args.join(" ")
  if(!nombre) return message.channel.send('Debes decir un nombre.')

  message.guild.setName(args.join(" "));

  message.channel.send(`El nuevo nombre del server es ${args.join(" ")}`)


  }
}