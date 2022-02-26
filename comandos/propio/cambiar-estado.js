const Discord = require("discord.js");

module.exports = {
  name: "estado",
  alias: ["cambiar-estado"],

execute(client, message, args) {

  if(message.author.id === '605510289965842575'){

    var estado = args.join(' ')
    if(!estado) return message.reply('Debes poner algún texto para mi estado Bv')
  }

  client.user.setActivity({name: estado, type: "WATCHING"})

  message.channel.send('Listo! he cambiado mi estado Bv.')

  }
}