const Discord = require("discord.js");
const db = require('megadb');
const warns = new db.crearDB('warns');

module.exports = {
  name: "warns",
  alias: [],

async execute(client, message, args) {

  var perm = message.member.permissions.has("KICK_MEMBERS")
  if(!perm) return message.reply("No tienes permisos para ejecutar este comando.")

  let persona = message.mentions.members.first()
  if(!persona) return message.reply('Debes de mencionar a alguien.')

   let cantidad = await warns.obtener(`${message.guild.id}.${persona.id}`)

 if(!warns.tiene(`${message.guild.id}.${persona.id}`)){
  message.reply('Ese usuario no tiene warns!')

  return;
 }

message.channel.send(`${persona} tiene **${cantidad}** warns.`)

  }
}