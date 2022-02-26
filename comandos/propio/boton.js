const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "boton",
  alias: [],

async execute(client, message, args) {

  const row = new Discord.MessageActionRow()
  .addComponents(
    new Discord.MessageButton()
    .setCustomId("b1")
    .setLabel("Botón 1")
    .setStyle("SUCCESS")
    .setEmoji("😎")
  )

  const m = await message.channel.send({ content: "Hola papus Bvvvvvvvv", components: [row] })

  const ifilter = i => i.user.id === message.author.id;

  const collector = m.createMessageComponentCollector({ filter:ifilter, time: 60000 })

  collector.on("collect", async i => {
    if(i.customId === "b1"){
      await i.deferUpdate()
      i.message.edit({ content: "El mensaje fue editado papus Bvvvvvvvv.", })
    }

  })

  }
}