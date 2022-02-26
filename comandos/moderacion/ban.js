const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "ban",
  alias: ["banear"],

execute(client, message, args) {


  var permisos = message.member.permissions.has("BAN_MEMBERS")
  if(!permisos) return message.reply("No tienes permisos para ejecutar este comando!")


  if(!message.guild.me.permissions.has("BAN_MEMBERS")) return message.reply('No tengo permisos para ejecutar este comando!')

  const user = message.mentions.members.first()
  if(!user) return message.reply('Menciona a un usuario para banear.')

  if(message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0) return message.reply('No puedes banear a una persona que sea del mismo o mayor rango que tú.')

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

  let razon = args.join(' ').slice(22)
  if(!razon) {
    razon: "No hubo razón"
  }

  user.ban({ reason: razon })

  const embedban = new Discord.MessageEmbed()

  .setTitle('Usuario baneado.')
  .setDescription(`**Usuario**: ${user}\n**Razón**: ${razon}\n**Moderador**: ${message.author}`)
  .setColor("RANDOM")

  message.channel.send({ embeds: [embedban] });

  }
}