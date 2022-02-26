const discord = require('discord.js');
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "remover-prohibido",
  alias:["r-prohibido"],

  execute(client, message, args) {

    let user = message.mentions.members.first()

    if(!user) return message.channel.send('Debes mencionar a alguien')

    prohibidos.eliminar(user.id, user.user.tag)

    message.channel.send('El usuario ha sido eliminado de los usuarios prohibidos!')
    
  }
}