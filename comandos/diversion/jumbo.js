const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "jumbo",
  alias: [],

execute(client, message, args) {

  const user = message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

  if(!args[0]) return message.reply('No hay ningún emoji para hacerlo jumbo.')

  let emoji = message.guild.emojis.cache.find(x => x.name === args[0].split(":")[1]);
  if(!emoji) return message.reply('Ese no es un emoji válido!')

  const embedjumbo = new Discord.MessageEmbed()

  .setTitle(`${args[0]} Jumbo`)
  .setImage(emoji.url)
  .setColor("RANDOM")

  message.channel.send({ embeds: [embedjumbo] });

  }
}