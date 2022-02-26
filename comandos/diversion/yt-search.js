const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "yt",
  alias: ["buscar", "yt-search"],

execute(client, message, args) {

  const user = message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

  const text = args.join(' ');
  const search = args.join('+');

  if(!text) {
    return message.reply('Ingresa algo para buscar.')
  }

  const embedbusqueda = new Discord.MessageEmbed()

  .setTitle('Búsqueda de YouTube')
  .setColor("RANDOM")
  .addField(`Tu Busqueda`, `${text}`)
  .addField(`Encontrado.`, `[Encontré esto](https://www.youtube.com/results?search_query=${search})`)

  message.channel.send({ embeds: [embedbusqueda] });


  }
}