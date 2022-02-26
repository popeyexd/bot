const Discord = require('discord.js');
const db = require('megadb');
const warns = new db.crearDB('warns');

module.exports = {
  name: "warn",
  alias: [],

  execute(client, message, args){

    var permisos = message.member.permissions.has('KICK_MEMBERS')
    if(!permisos) return message.reply('No tienes permisos para ejecutar este comando.')

   let warneado = message.mentions.members.first()
   if(!warneado) return message.reply('Menciona a alguien para warenar.')

    var razon = args.slice(1).join(' ')
  if(!razon){
    razon = 'No hubo razón.'
  }

  if(!warns.tiene(`${message.guild.id}.${warneado.id}`))
    warns.establecer(`${message.guild.id}.${warneado.id}`, 0)

  warns.sumar(`${message.guild.id}.${warneado.id}`, 1)

  const embedwarn = new Discord.MessageEmbed()

  .setTitle('Usuario Warneado')
  .setColor("RANDOM")
  .addField('Razón', `${razon}`)
  .addField('Moderador', `${message.author}`)
  .setFooter('No lo vuelvas a hacer.')
  .setTimestamp()

  message.channel.send({ embeds: [embedwarn] })

  warneado.send(`Has sido warneado en **${message.guild.name}**\nRazón: ${razon}`)

  }
}