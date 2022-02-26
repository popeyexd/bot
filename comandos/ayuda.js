const Discord = require("discord.js");
const { MessageActionRow, MessageSelectMenu } = require('discord.js');


module.exports = {
  name: "help",
  alias: ["ayuda"],

async execute(client, message, args) {

  const embed1 = new Discord.MessageEmbed()

  .setTitle('Hola! ¿Necesitas Ayuda?')
  .setColor('RANDOM')
  .setDescription('Abre el menú de abajo para ver mis comandos.\n\n🔰 = **Administración**\nTe da todos los comandos de administración.\n\n\n🚧 = **Moderación**\nTe da todos los comandos de moderación.\n\n\n🪀 = **Interacción**\nTe da todos los comandos de interacción.\n\n\n🎡 = **Diversión**\nTe da todos los comandos de diversión.\n\n\nPuedes elegir en el menú de abajo.')

  const embed2 = new Discord.MessageEmbed()

  .setTitle('Apartado de Administración')
  .setColor("RANDOM")
  .setDescription('Comandos:\n```\nset-prefix - sugs-channel - set-muterol - addemoji-link - clear - set-icon - set-name - nuke\n```')

  const embed3 = new Discord.MessageEmbed()

  .setTitle('Apartado de Moderación')
  .setDescription('Comandos:\n```\nkick - ban - hackban - unban - mute - warn - warns\n```')
  .setColor("RANDOM")

  const embed4 = new Discord.MessageEmbed()

  .setTitle('Apartado de Interacción')
  .setDescription('Comandos:\n```\nkiss - punch - kill - hug - nalgada - dance - cry - happy\n```')
  .setColor("RANDOM")

  const embed5 = new Discord.MessageEmbed()

  .setTitle('Apartado de Diversión')
  .setDescription('Comandos:\n```\n8ball - avatar - howgay - invite - jumbo - membercount - meme - say - servers - servericon - snipe - sugerencia - ascii - triggered - wallpaper - yt - comentario - ping\n```')
  .setColor("RANDOM")

  let row = new MessageActionRow()
  .addComponents(
    new MessageSelectMenu()
    .setCustomId("PapuSquad")
    .setPlaceholder("Menú de comandos.")
    .setMinValues(1)
    .setMaxValues(1)
    .addOptions([
      {
        label: "Administración",
        description: "Click acá para ver los comandos de Administración",
        emoji: "🔰",
        value: "admin"
      },
      {
        label: "Moderación",
        description: "Click acá para ver los comandos de Moderación",
        emoji: "🚧",
        value: "mod"
      },
      {
        label: "Interacción",
        description: "Click acá para ver los comandos de Interacción",
        emoji: "🪀",
        value: "inte"
      },
      {
        label: "Diversión",
        description: "Click acá para ver los comandos de Diversión",
        emoji: "🎡",
        value: "diversion"
      },
      {
        label: "Inicio",
        description: "Click acá para volver al Inicio",
        emoji: "↩",
        value: "inicio"
      },
    ]),
  );

  const msg = await message.channel.send({ embeds: [embed1], components: [row] })

  const ifilter = (row) => row.user.id === message.author.id;
  const collector = await msg.createMessageComponentCollector({ filter: ifilter, time: 3e5, componentType: 'SELECT_MENU'})

  collector.on("collect", async (row) => {
    if(row.values[0] === "admin"){
      row.deferUpdate()
      return msg.edit({embeds: [embed2] })
    }
    if(row.values[0] === "mod"){
      row.deferUpdate()
      return msg.edit({ embeds: [embed3] })
    }
    if(row.values[0] === "inte"){
      row.deferUpdate()
      return msg.edit({ embeds: [embed4] })
    }
    if(row.values[0] === "diversion"){
      row.deferUpdate()
      return msg.edit({ embeds: [embed5] })
    }
    if(row.values[0] === "inicio"){
      row.deferUpdate()
      return msg.edit({ embeds: [embed1] })
    }
  })


  }
}