const discord = require('discord.js');
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: 'prohibir',
  alias: ["blacklist"],

  execute(client, message, args) {

    let usuario = message.mentions.members.first()

    if(!usuario) return message.channel.send('Debes mencionar a alguien')

if(message.author.id !== '605510289965842575') return message.channel.send('No eres mi creador XD, no puedes usar este comando.')

prohibidos.establecer(usuario.id, usuario.user.tag)

message.channel.send('El usuario ahora esta prohibido de mis comandos.')
  
  }
}