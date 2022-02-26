const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "servercount",
  alias: ["servers"],

execute(client, message, args) {

  const user = message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

  const embed = new Discord.MessageEmbed()

  .setTitle('En cuantos servers estoy?')
  .setDescription(`Estoy en **${client.guilds.cache.size}** servidores.`)
  .setColor("RANDOM")

  message.channel.send({ embeds: [embed] });

  }
}