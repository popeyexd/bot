const Discord = require("discord.js");
const db = require('megadb')

module.exports = {
  name: "boton-embed",
  alias: [],

async execute(client, message, args) {

    const embedsito = new Discord.MessageEmbed()

    .setTitle('Asd')
    .setColor('RANDOM')
    .setDescription('asd')

    ///// botón

    const row = new Discord.MessageActionRow()
    .addComponents(
      new Discord.MessageButton()
    .setCustomId('btn')
    .setLabel('Hola')
    .setStyle('SUCCESS')
    .setEmoji('😎')
    )

  const m = await message.channel.send({ embeds: [embedsito], content: "asd", components: [row] })

  } 
}