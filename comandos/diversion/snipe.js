const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "snipe",
  alias: [],

execute(client, message, args) {

  const user = message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

  const channel = message.mentions.channels.first() || message.channel;

  const msg = client.snipes.get(channel.id)

  if(!msg){
    message.channel.send('No se ha eliminado ningún mensaje!')
  } else {
    const embedsnipe = new Discord.MessageEmbed()

    .setTitle('Mensaje Borrado')
    .setAuthor(`Mensaje escrito por ${msg.delete.tag}`, msg.delete.displayAvatarURL())
    .addField("Canal", `<#${msg.canal.id}>`)
    .setDescription(`${msg.content.toString()}`)
    .setColor("RANDOM")

    message.channel.send({ embeds: [embedsnipe] });
  }

  }
}