const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "nuke",
  alias: ["borrar-canal"],

execute(client, message, args) {

  const user = message.author;

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

  var permisos = message.member.permissions.has("ADMINISTRATOR")
  if(!permisos) return message.reply('No tienes los suficientes permisos.\nPermisos Requeridos: **ADMINISTRADOR, GESTIONAR_CANALES.**')

  if(!message.guild.me.permissions.has("ADMINISTRATOR")) return message.reply('No tengo los suficientes permisos.\nPermisos Requeridos: **ADMINISTRADOR, GESTIONAR_CANALES.**')

  let channel = message.mentions.channels.first() || message.channel;

  var posicion = message.channel.position

  message.channel.clone().then((canal) => {
    message.channel.delete()
    canal.setPosition(posicion)

    const embed = new Discord.MessageEmbed()
    .setTitle('Canal nukeado.')
    .setColor("RANDOM")
    .setImage('https://cdn.discordapp.com/attachments/884199365764325409/886736711672020992/kkkk.gif')
    .setTimestamp()

    canal.send({ embeds: [embed] });
  });

  }
}