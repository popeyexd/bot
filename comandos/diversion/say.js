const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "say",
  alias: [],

execute(client, message, args) {

 message.reply('desactivado Bv')
 message.delete()

  }
}