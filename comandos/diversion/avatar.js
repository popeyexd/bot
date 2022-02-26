const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "avatar",
  alias: ["av"],

execute(client, message, args) {

let user = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

let embed = new Discord.MessageEmbed()

.setTitle(`Avatar de **${user.user.username}**`)
.setImage (user.user.displayAvatarURL ({ size: 1024, dynamic: true}))
.setFooter(`Pedido por ${message.member.displayName}`)
.setColor("RANDOM")

message.channel.send({ embeds: [embed] });

  }
}