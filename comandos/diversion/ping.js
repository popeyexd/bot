const Discord = require('discord.js');

module.exports = {
  name: "ping",
  alias: [],

  execute(client, message, args){

   const embed = new Discord.MessageEmbed()

   .setTitle('Mi Ping')
   .addField('Mi Ping Es De', `**${client.ws.ping}** ms`)
   .setColor("RANDOM")

   message.channel.send({
    content: "Calculando mi ping...",
    embeds: [embed]
   })

  }
}