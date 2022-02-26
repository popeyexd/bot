const Discord = require("discord.js");
const db = require('megadb')
const prohibidos = new db.crearDB('prohibidos')

module.exports = {
  name: "kill",
  alias: ["matar"],

execute(client, message, args) {

let user = message.mentions.members.first()
if(!user) return message.reply('Menciona a alguien para matar :smiling_imp:')

  if(prohibidos.tiene(user.id)) return message.channel.send('<a:mal:884263980590309437> | Los usuarios prohibidos no pueden utilizar mis comandos.')

const embedkill = new Discord.MessageEmbed()

.setDescription(`${message.author} mató a ${user} :sob:`)
.setImage("https://cdn.discordapp.com/attachments/864339547977809960/876185654751531068/85bbab4e49c2f93b1ecb7851e0c69418.png")
.setColor("RANDOM")
.setTimestamp()

message.channel.send({ embeds: [embedkill]});

  }
}