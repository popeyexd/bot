const Discord = require("discord.js");
const { MessageActionRow, MessageSelectMenu } = require('discord.js');


module.exports = {
  name: "help",
  alias: ["ayuda"],

async execute(client, message, args) {

  const embed1 = new Discord.MessageEmbed()

  .setTitle('Hola! 驴Necesitas Ayuda?')
  .setColor('RANDOM')
  .setDescription('Abre el men煤 de abajo para ver mis comandos.\n\n馃敯 = **Administraci贸n**\nTe da todos los comandos de administraci贸n.\n\n\n馃毀 = **Moderaci贸n**\nTe da todos los comandos de moderaci贸n.\n\n\n馃獉 = **Interacci贸n**\nTe da todos los comandos de interacci贸n.\n\n\n馃帯 = **Diversi贸n**\nTe da todos los comandos de diversi贸n.\n\n\nPuedes elegir en el men煤 de abajo.')

  const embed2 = new Discord.MessageEmbed()

  .setTitle('Apartado de Administraci贸n')
  .setColor("RANDOM")
  .setDescription('Comandos:\n```\nset-prefix - sugs-channel - set-muterol - addemoji-link - clear - set-icon - set-name - nuke\n```')

  const embed3 = new Discord.MessageEmbed()

  .setTitle('Apartado de Moderaci贸n')
  .setDescription('Comandos:\n```\nkick - ban - hackban - unban - mute - warn - warns\n```')
  .setColor("RANDOM")

  const embed4 = new Discord.MessageEmbed()

  .setTitle('Apartado de Interacci贸n')
  .setDescription('Comandos:\n```\nkiss - punch - kill - hug - nalgada - dance - cry - happy\n```')
  .setColor("RANDOM")

  const embed5 = new Discord.MessageEmbed()

  .setTitle('Apartado de Diversi贸n')
  .setDescription('Comandos:\n```\n8ball - avatar - howgay - invite - jumbo - membercount - meme - say - servers - servericon - snipe - sugerencia - ascii - triggered - wallpaper - yt - comentario - ping\n```')
  .setColor("RANDOM")

  let row = new MessageActionRow()
  .addComponents(
    new MessageSelectMenu()
    .setCustomId("PapuSquad")
    .setPlaceholder("Men煤 de comandos.")
    .setMinValues(1)
    .setMaxValues(1)
    .addOptions([
      {
        label: "Administraci贸n",
        description: "Click ac谩 para ver los comandos de Administraci贸n",
        emoji: "馃敯",
        value: "admin"
      },
      {
        label: "Moderaci贸n",
        description: "Click ac谩 para ver los comandos de Moderaci贸n",
        emoji: "馃毀",
        value: "mod"
      },
      {
        label: "Interacci贸n",
        description: "Click ac谩 para ver los comandos de Interacci贸n",
        emoji: "馃獉",
        value: "inte"
      },
      {
        label: "Diversi贸n",
        description: "Click ac谩 para ver los comandos de Diversi贸n",
        emoji: "馃帯",
        value: "diversion"
      },
      {
        label: "Inicio",
        description: "Click ac谩 para volver al Inicio",
        emoji: "鈫?",
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