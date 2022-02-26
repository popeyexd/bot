const Discord = require('discord.js')

module.exports = {
  name: "xnxx-buscar",
  alias: ["ytazul, xbuscar"],

  execute(client, message, args){

    const texto = args.join(' ')
    const buscar = args.join('+')

    if(!texto) return message.reply('Ingresa algo para buscar 7w7')

      const embedbusqueda = new Discord.MessageEmbed()

  .setTitle('Búsqueda de YouTube Azul')
  .setColor("RANDOM")
  .addField(`Tu Busqueda`, `${texto}`)
  .addField(`Encontrado.`, `[Encontré esto](https://xnxx.com/search/${buscar})`)

  message.channel.send({ embeds: [embedbusqueda] });

  }
}