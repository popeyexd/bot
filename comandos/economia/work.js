const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "bal",
  alias: ["balance"],

execute(client, message, args) {

  const user = message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

  message.channel.send('Los comandos de economía estan en desarrollo.')

  }
}