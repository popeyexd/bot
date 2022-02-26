const Discord = require("discord.js");

module.exports = {
  name: "bot-av",
  alias: [],

async execute(client, message, args) {

var ids = [`605510289965842575`]//ahi pones tu id dentro de las comillas para que nadien pueda utilizar ese comando, solo usted.
let avatarurl = args.join(" ")
if(!ids.some(ids => message.author.id == ids)) return; 
if(!avatarurl) return message.reply('Debes poner un enlace.')//aqui te dice por si no pusiste una imagen url

client.user.setAvatar(avatarurl)//ahi estaria cambiando el avatar
  
  message.channel.send('Avatar cambiado! \n\n Nuevo avatar   :\n' + avatarurl)

  }
}