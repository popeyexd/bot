const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "icon",
  alias: ["servericon"],

execute(client, message, args) {

  const user = message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

  const embedicon = new Discord.MessageEmbed()

  .setTitle('Icon del server.')
  .setDescription("Este es el ícono del server.")
  .setImage(message.guild.iconURL({dynamic: true, size : 1024 }))
  .setFooter(`Pedido por ${message.member.displayName}, no lo robes hp.`)
  .setColor("RANDOM")
  .setTimestamp()

  message.channel.send({ embeds: [embedicon] });

  }
}