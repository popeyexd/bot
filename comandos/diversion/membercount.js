const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "membercount",
  alias: ["miembros"],

execute(client, message, args) {

  const user = message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

  const embedmiembros = new Discord.MessageEmbed()

  .setTitle('Miembros del servidor.')
  .setDescription(`**${message.guild.memberCount}**`)
  .setFooter(`En este servidor hay ${message.guild.memberCount} miembros.`)
  .setTimestamp()
  .setColor("RANDOM")

  message.channel.send({ embeds: [embedmiembros] });

  }
}