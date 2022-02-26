const Discord = require("discord.js");

module.exports = {
  name: "hackban",
  alias: [],

async execute(client, message, args) {

  var permisos = message.member.permissions.has("BAN_MEMBERS")
  if(!permisos) return message.reply('No tienes permisos para ejecutar este comando.')

    if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply('No tengo suficientes permisos para ejecutar ese comando.')

  const id = args.join(' ')
  if(!id) return message.reply("Pon la ID de alguien que quieras desbanear.")

    const member = await client.users.fetch(id)
  message.guild.members.ban(id)

 message.channel.send(`El usuario <@${id}> fue baneado del servidor.`)

  }
}